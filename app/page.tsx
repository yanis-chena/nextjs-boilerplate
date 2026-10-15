import { readSyncedConsignes } from "@/lib/consignes-store";
import { MOCK_DATA } from "./Data";
import ConsignesClient from "./ConsignesClient";

// Sans ça, Next.js traite la lecture du fichier synchronisé comme une
// opération "déterministe" et la foge dans le rendu statique au build — la
// page ne relirait alors plus jamais les nouvelles données synchronisées.
export const dynamic = "force-dynamic";

// Composant serveur : lit les données synchronisées depuis SharePoint (voir
// scripts/sync-from-gmail.js + app/api/consignes/sync/route.ts). Si rien n'a
// encore été synchronisé (ou en cas d'erreur), on retombe sur le dernier
// export manuel connu (app/Data.ts) plutôt que d'afficher une page vide.
export default async function Page() {
  const synced = await readSyncedConsignes();
  const data = synced && synced.length > 0 ? synced : MOCK_DATA;

  return <ConsignesClient data={data} />;
}
