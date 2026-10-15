import { NextRequest, NextResponse } from "next/server";
import { readSyncedConsignes, writeSyncedConsignes } from "@/lib/consignes-store";

// Reçoit les données de la liste SharePoint "Incidents de masse et Consignes"
// (via un flow Power Automate + scripts/sync-from-gmail.js) et les stocke
// pour affichage sur la page (voir lib/consignes-store.ts pour le stockage).

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
  await writeSyncedConsignes(items);

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

  const items = await readSyncedConsignes();
  return NextResponse.json(items ?? []);
}
