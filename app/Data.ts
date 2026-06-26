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
    reference: "INC4661182",
    entite: "Toutes populations",
    consigne: `Toutes populations sauf GAN ASS /!\ - 
Windows 11 / Appli appx (outils capture, paint ...) KO - Erreur C:\Program [...] I .8_8000.879.201 n'est pas conçu pour s'exécuter sous Windows [...] État de l'erreur : 0x0000020`,
    dateCreation: "26/06/2026",
    dateModification: "2026-06-15",
    type: "incident",
  },
  {
    id: 5,
    titre: "Consigne GanPat",
    reference: "Consigne",
    entite: "GanPat",
    consigne: "BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA ",
    dateCreation: null,
    dateModification: "2026-06-15",
    type: "consigne",
  },
  {
    id: 6,
    titre: "Référent(e) en AIDE VOLANTE",
    reference: "Consigne",
    entite: "Toutes populations",
    consigne: "Lorsque vous essayez de contacter une agence GMED, il y a un choix téléphonique caché qui vous permet de joindre les utilisateurs.Il faut​ composer le numéro 9. Il ne vous sera pas proposé. Il est caché.Cela peut vous être utile notamment lors des rappels des incidents présents dans le backlog. ",
    dateCreation: null,
    dateModification: "2026-06-15",
    type: "consigne",
  },
  {
    id: 7,
    titre: "Consigne GanPat",
    reference: "Consigne",
    entite: "GanPat",
    consigne: `Certains incidents connus peuvent se résoudre au PISVP par une solution communiquée par G2S.


¤  Incident : 
Impossible d'enregistrer les mots de passe/favoris dans EDGE 130

Solution : 
Une mise à jour corrective et pérenne sera automatiquement intégrée lors de la prochaine mise à jour EDGE prévue à partir de mars, garantissant la stabilité du service. SSOX ne sera plus actif après la version, il sera alors possible de le désinstaller et de mettre à jour EDGE vers la 146.
---------------------------------------------------------

¤ Incident :
W11 - Dysfonctionnement barre des tâches / menu démarrer (Epingle impossible..)
Solution :
Nous vous informons que les dysfonctionnements identifiés que vous rencontrez, seront corrigés avec la prochaine montée de version Windows en 25h2 prévue sur l'année 2026. Malgré nos analyses menées conjointement avec le support Microsoft, il n'a pas été possible de résoudre ce dysfonctionnement dans l'immédiat. Celui-ci sera toutefois pleinement pris en charge par le nouveau correctif Windows.
Votre incident est donc clôturé, tout en restant attentifs à son bon fonctionnement d'ici le déploiement. N'hésitez pas à revenir vers nous en cas de besoin.
---------------------------------------------------------
¤ Incident :
EDGE / Chrome - Votre administrateur a désactivé la synchronisation
Solution : 
Pour EDGE : 
Ces incidents sont liés à la version trop ancienne du navigateur Edge (en version 130).
Il faudra attendre la version supérieure qui sera déployée courant mars quand SSOX sera décommissionné car c'est SSOX qui fait que l'on ne peut pour l'instant pas mettre à jour les navigateurs Edge (incompatibilité de performances).

Pour Chrome : ~Bientôt~ `,
    dateCreation: null,
    dateModification: "2026-06-15",
    type: "consigne",
  },
];