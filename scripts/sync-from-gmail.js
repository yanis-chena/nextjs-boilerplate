// Relève la boîte Gmail pour le dernier mail "CONSIGNES_SYNC" envoyé par le
// flow Power Automate, puis pousse son contenu vers /api/consignes/sync.
// Fait pour tourner en local (Planificateur de tâches Windows), pas sur Vercel.
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env.local") });

const { ImapFlow } = require("imapflow");
const { simpleParser } = require("mailparser");

const GMAIL_ADDRESS = process.env.GMAIL_ADDRESS;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const SYNC_URL = process.env.SYNC_URL;
const VERCEL_BYPASS_SECRET = process.env.VERCEL_BYPASS_SECRET;
const CONSIGNES_SYNC_SECRET = process.env.CONSIGNES_SYNC_SECRET;
const SUBJECT_MARKER = "CONSIGNES_SYNC";

function requireEnv() {
  const missing = [
    "GMAIL_ADDRESS",
    "GMAIL_APP_PASSWORD",
    "SYNC_URL",
    "VERCEL_BYPASS_SECRET",
    "CONSIGNES_SYNC_SECRET",
  ].filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(`Variables manquantes dans .env.local : ${missing.join(", ")}`);
  }
}

// Le flow Power Automate sérialise les éléments avec string(...), mais le corps
// de mail est un éditeur HTML riche : certains guillemets présents dans le texte
// libre (ex: "reconnexion automatique") ressortent non échappés, de façon
// incohérente. On répare ça en repérant, pour chaque guillemet rencontré à
// l'intérieur d'une valeur, si le caractère non-blanc suivant est bien un
// terminateur JSON valide (, } ] :) ; sinon c'est un guillemet du texte, à
// échapper.
function fixUnescapedQuotes(text) {
  let result = "";
  let i = 0;
  const n = text.length;
  let inString = false;
  while (i < n) {
    const ch = text[i];
    if (!inString) {
      result += ch;
      if (ch === '"') inString = true;
      i++;
      continue;
    }
    if (ch === "\\") {
      result += ch;
      if (i + 1 < n) {
        result += text[i + 1];
        i += 2;
      } else {
        i++;
      }
      continue;
    }
    if (ch === '"') {
      let j = i + 1;
      while (j < n && /\s/.test(text[j])) j++;
      const next = text[j];
      if (next === "," || next === "}" || next === "]" || next === ":" || j >= n) {
        result += ch;
        inString = false;
        i++;
        continue;
      }
      result += '\\"';
      i++;
      continue;
    }
    result += ch;
    i++;
  }
  return result;
}

// Le même corps n'échappe pas non plus les sauts de ligne/tabulations bruts à
// l'intérieur des valeurs texte multi-lignes de SharePoint (ex: "Actions /
// Consignes / Contournement") -> JSON invalide tel quel. Le payload est compact
// (pas d'espace structurel), donc tout caractère de contrôle brut rencontré
// appartient forcément à une valeur string.
function sanitizeForJson(text) {
  return text.replace(/[\u0000-\u001f]/g, (ch) => {
    switch (ch) {
      case "\n":
        return "\\n";
      case "\r":
        return "\\r";
      case "\t":
        return "\\t";
      case "\b":
        return "\\b";
      case "\f":
        return "\\f";
      default:
        return "\\u" + ch.charCodeAt(0).toString(16).padStart(4, "0");
    }
  });
}

function extractJsonArray(text) {
  const start = text.indexOf("[");
  const end = text.lastIndexOf("]");
  if (start === -1 || end === -1 || end < start) return null;
  try {
    const slice = text.slice(start, end + 1);
    return JSON.parse(sanitizeForJson(fixUnescapedQuotes(slice)));
  } catch {
    return null;
  }
}

// Convertit un élément brut "Obtenir les éléments" (noms de colonnes encodés par
// SharePoint, ex: R_x00e9_f_x00e9_rence = "Référence") vers le format affiché
// par la page (voir app/Data.ts).
function transformItem(item) {
  const references = (item.R_x00e9_f_x00e9_rence || []).map((r) => r.Value).filter(Boolean);
  const entites = (item.Entit_x00e9_s || []).map((e) => e.Value).filter(Boolean);
  const consigne = (item.Actions_x002f_Consignes_x002f_Co || "").trim();

  return {
    id: item.ID,
    titre: item.Title,
    reference: references.length ? references.join(" / ") : null,
    entite: entites.length ? entites.join(", ") : null,
    consigne: consigne || "-",
    dateCreation: item.Cr_x00e9__x00e9_le || (item.Created ? item.Created.slice(0, 10) : null),
    dateModification: item.Modified ? item.Modified.slice(0, 10) : null,
    type: references.includes("Consigne") ? "consigne" : "incident",
  };
}

async function main() {
  requireEnv();

  const client = new ImapFlow({
    host: "imap.gmail.com",
    port: 993,
    secure: true,
    auth: { user: GMAIL_ADDRESS, pass: GMAIL_APP_PASSWORD },
    logger: false,
  });

  await client.connect();
  const lock = await client.getMailboxLock("INBOX");
  try {
    const uids = await client.search({ subject: SUBJECT_MARKER });
    if (!uids || uids.length === 0) {
      console.log(`[${new Date().toISOString()}] Aucun mail "${SUBJECT_MARKER}" trouvé.`);
      return;
    }

    const latestUid = uids.sort((a, b) => a - b).at(-1);
    const { source } = await client.fetchOne(latestUid, { source: true });
    const parsed = await simpleParser(source);
    const text = parsed.text || (parsed.html ? parsed.html.replace(/<[^>]+>/g, " ") : "");

    const rawItems = extractJsonArray(text);
    if (!rawItems) {
      console.error(`[${new Date().toISOString()}] JSON introuvable/invalide dans le mail.`);
      return;
    }
    const items = rawItems.map(transformItem);

    const res = await fetch(SYNC_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-vercel-protection-bypass": VERCEL_BYPASS_SECRET,
        "x-sync-secret": CONSIGNES_SYNC_SECRET,
      },
      body: JSON.stringify(items),
    });
    const body = await res.text();
    console.log(`[${new Date().toISOString()}] Sync -> ${res.status} ${body}`);
  } finally {
    lock.release();
    await client.logout();
  }
}

main().catch((err) => {
  console.error(`[${new Date().toISOString()}] Erreur:`, err.message || err);
  process.exit(1);
});
