import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import os from "os";
import path from "path";

// Reçoit les données de la liste SharePoint "Incidents de masse et Consignes"
// (via un flow Power Automate) et les stocke pour affichage sur la page.
// ⚠️ Stockage dans le dossier temporaire du runtime : suffisant pour tester
// la connectivité (Power Automate -> cette route), mais pas persistant entre
// deux invocations sur Vercel. Il faudra brancher un vrai store (Supabase,
// Vercel KV/Blob...) avant une mise en prod réelle.

const DATA_FILE = path.join(os.tmpdir(), "consignes-sync.json");

function isAuthorized(request: NextRequest) {
  const secret = process.env.CONSIGNES_SYNC_SECRET;
  return Boolean(secret) && request.headers.get("x-sync-secret") === secret;
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const items = Array.isArray(body) ? body : [body];

  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(items, null, 2), "utf-8");

  return NextResponse.json({
    ok: true,
    count: items.length,
    receivedAt: new Date().toISOString(),
  });
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return NextResponse.json(JSON.parse(raw));
  } catch {
    return NextResponse.json([]);
  }
}
