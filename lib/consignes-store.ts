import { promises as fs } from "fs";
import os from "os";
import path from "path";

// Stockage des données synchronisées depuis SharePoint (voir
// scripts/sync-from-gmail.js et app/api/consignes/sync/route.ts).
// ⚠️ Dossier temporaire du runtime : suffisant pour tester, mais pas
// persistant entre deux invocations sur Vercel. À remplacer par un vrai
// store (Supabase, Vercel KV/Blob...) avant une mise en prod réelle.

export type ConsigneItem = {
  id: number;
  titre: string;
  reference: string | null;
  entite: string | null;
  consigne: string;
  dateCreation: string | null;
  dateModification: string | null;
  type: "consigne" | "incident";
};

const DATA_FILE = path.join(os.tmpdir(), "consignes-sync.json");

export async function readSyncedConsignes(): Promise<ConsigneItem[] | null> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export async function writeSyncedConsignes(items: unknown[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(items, null, 2), "utf-8");
}
