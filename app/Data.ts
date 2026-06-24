// ─── Mock data ─────────────────────────────────────────────────────────────────
// Remplacer par un vrai appel API SharePoint plus tard

export const MOCK_DATA = [
  {
    id: 1,
    titre: "Consigne générale populations",
    reference: "Consigne",
    entite: "Toutes populations",
    consigne: "Consigne TEST\n\nSuivre les KB\n\nPrévenir lors d'IG\n\nSoyez gentils tout plein",
    dateCreation: "2026-06-09",
    dateModification: "2026-06-15",
    type: "consigne",
  },
  {
    id: 2,
    titre: "Incident GanAss",
    reference: "INC151515",
    entite: "GanAss",
    consigne: "Rattacher à l'incident et appliquer la méthode de contournement",
    dateCreation: "2026-06-11",
    dateModification: "2026-06-15",
    type: "incident",
  },
  {
    id: 3,
    titre: "Incident GMED",
    reference: "INC262626",
    entite: "GMED",
    consigne: "Rattacher l'incident",
    dateCreation: "2026-06-15",
    dateModification: "2026-06-15",
    type: "incident",
  },
  {
    id: 4,
    titre: "Consigne GanPat",
    reference: "Consigne",
    entite: "GanPat",
    consigne: "BLABLA",
    dateCreation: null,
    dateModification: "2026-06-15",
    type: "consigne",
  },
];