// ─── Données SharePoint ────────────────────────────────────────────────────────
// Liste "Incidents de masse et Consignes" (Groupama TECHS).
// Récupéré via Power Automate le 15/10/2026. Sert de repli (voir app/page.tsx)
// tant que rien n'a encore été synchronisé via scripts/sync-from-gmail.js +
// /api/consignes/sync.

import type { ConsigneItem } from "@/lib/consignes-store";

export const MOCK_DATA: ConsigneItem[] = [
  {
    id: 1,
    titre: `GGVIE - DISQUE "C" saturé en cause application ALIZE`,
    reference: "INC4427194",
    entite: "GGVie",
    consigne: "-",
    dateCreation: "2026-01-26",
    dateModification: "2026-07-09",
    type: "incident",
  },
  {
    id: 2,
    titre: "GAC / VDI / Accès suite Office impossible",
    reference: "INC4459133",
    entite: "GAC",
    consigne: `Communication envoyée aux utilisateurs pour qu'ils puissent se dépanner tout seul.
Vu avec le MRC pour fermeture de la GDP suite à la migration vers VDI ARTEMIS`,
    dateCreation: "2026-02-12",
    dateModification: "2026-09-21",
    type: "incident",
  },
  {
    id: 3,
    titre: "GAN - INDEM - Ouverture automatique fichier .rtf KO (+ISI- sécurité de windows)",
    reference: "INC4564405",
    entite: "GanAss",
    consigne: `Bonjour
Aucune solution n'a été trouvée pour résoudre ce problème (non bloquant) malgré les analyses réalisées par les experts techniques. En l'état, le fonctionnement restera tel quel.
Je résous l'incident`,
    dateCreation: "2026-04-20",
    dateModification: "2026-09-21",
    type: "incident",
  },
  {
    id: 4,
    titre: `QUICK 3270 / GAUTHIQ - Sigma déconnexion, écran noir et en bas à gauche "Déconnecté".`,
    reference: "INC4478121",
    entite: "GCM",
    consigne: `Solution de contournement pour l'incident dans QUICK > Définition / Telnet / Décocher la case "reconnexion automatique"/ Valider par OK.`,
    dateCreation: "2026-04-23",
    dateModification: "2026-07-01",
    type: "incident",
  },
  {
    id: 5,
    titre: "GAN - Windows - Ouverture outil de capture d'écran KO (et/ou Paint, photos, calculatrice, bloc-note , sticky-note...)",
    reference: "INC4611389",
    entite: "GanAss",
    consigne: "Suivre la KB0019606",
    dateCreation: "2026-05-26",
    dateModification: "2026-07-16",
    type: "incident",
  },
  {
    id: 7,
    titre: "GAN PAT / GAN PREV / ASTERION / impossible de visualiser les documents depuis les tablettes.",
    reference: "INC4638060",
    entite: "GanPat, GanPrev",
    consigne: "Contournement télécharger le fichier",
    dateCreation: "2026-06-10",
    dateModification: "2026-09-23",
    type: "incident",
  },
  {
    id: 8,
    titre: "ONEDRIVE - Boutons / Clic souris KO",
    reference: "INC4656484",
    entite: "Toutes populations",
    consigne: "Affectation DSES_INCIDENTS_MASSE",
    dateCreation: "2026-06-23",
    dateModification: "2026-07-31",
    type: "incident",
  },
  {
    id: 9,
    titre: `GAN - Devis WEP - seule la personne qui l'a généré peut le reprendre`,
    reference: "INC4661247",
    entite: "GanAss",
    consigne: "-",
    dateCreation: "2026-06-24",
    dateModification: "2026-07-06",
    type: "incident",
  },
  {
    id: 10,
    titre: "Dysfonctionnement outil windows suite passage Copernic / erreur 0xc0000020",
    reference: null,
    entite: "Toutes populations",
    consigne: `Pour GAN ASS : suivre KB0019606
Toutes les autres populations : rattacher INC4661182 et Affectation DSES_INCIDENTS_MASSE
Pour capture d'écran, proposer la solution de contournement avec Greenshot (à installer depuis portail d'entreprise si disponible).

Demandez à un référent si besoin ! :)`,
    dateCreation: "2026-06-26",
    dateModification: "2026-09-01",
    type: "incident",
  },
  {
    id: 11,
    titre: "GAN ASS / QLIK - Microsoft Internet Explorer is not a supported browser",
    reference: "INC4665601",
    entite: "GanAss",
    consigne: "-",
    dateCreation: "2026-06-29",
    dateModification: "2026-07-02",
    type: "incident",
  },
  {
    id: 14,
    titre: `GMED - Mobil ITI / Impossible d'émettre ou de réceptionner un appel sur l'application`,
    reference: "INC4670206",
    entite: "GMED",
    consigne: "-",
    dateCreation: "2026-07-01",
    dateModification: "2026-07-02",
    type: "incident",
  },
  {
    id: 15,
    titre: `GCA - Panne réseau mobile : "orange vous informe que le numéro n'est pas attribué."`,
    reference: "INC4670239",
    entite: "GCA",
    consigne: "-",
    dateCreation: "2026-07-01",
    dateModification: "2026-07-01",
    type: "incident",
  },
  {
    id: 16,
    titre: "Edge 146 - ASR - Blocages sont rencontrés sur plusieurs ASR lors de l'insertion de clauses libres ou via le clausier.(pages moulines)",
    reference: "INC4655877",
    entite: "GanAss",
    consigne: "-",
    dateCreation: "2026-07-01",
    dateModification: "2026-07-01",
    type: "incident",
  },
  {
    id: 18,
    titre: `Panne réseau mobile : "orange vous informe que le numéro n'est pas attribué."`,
    reference: "INC4670283",
    entite: "GCM",
    consigne: "-",
    dateCreation: "2026-07-01",
    dateModification: "2026-07-01",
    type: "incident",
  },
  {
    id: 19,
    titre: "Caisses régionales GMED > Contact vers agence",
    reference: "Consigne",
    entite: "GMED",
    consigne: `Lorsque vous essayez de contacter une agence GMED, il y a un choix téléphonique caché qui vous permet de joindre les utilisateurs.
Il faut composer le numéro 9. Il ne vous sera pas proposé. Il est caché.

Cela peut vous être utile notamment lors des rappels des incidents présents dans le backlog.`,
    dateCreation: "2025-10-15",
    dateModification: "2026-08-25",
    type: "consigne",
  },
  {
    id: 20,
    titre: "QDS > Affectation d'incident",
    reference: "Consigne / Ajouté dans accueil des processus et modop backlog",
    entite: "Toutes populations",
    consigne: "Aucune affectation manuelle vers QDS ne doit être effectuée sans validation au préalable de la gouvernance (PS ou référents).",
    dateCreation: "2025-10-15",
    dateModification: "2026-08-25",
    type: "consigne",
  },
  {
    id: 22,
    titre: "Aide résolution incidents Edge et/où W11",
    reference: "Consigne",
    entite: "Toutes populations",
    consigne: `¤ Incident :

W11 - Dysfonctionnement barre des tâches / menu démarrer (Epingle impossible..)
Solution :
En contournement : Vérrouiller/Déverrouiller la session

Nous vous informons que les dysfonctionnements identifiés que vous rencontrez, seront corrigés avec la prochaine montée de version Windows en 25h2 prévue sur l'année 2026. Malgré nos analyses menées conjointement avec le support Microsoft, il n'a pas été possible de résoudre ce dysfonctionnement dans l'immédiat. Celui-ci sera toutefois pleinement pris en charge par le nouveau correctif Windows.
Votre incident est donc clôturé, tout en restant attentifs à son bon fonctionnement d'ici le déploiement. N'hésitez pas à revenir vers nous en cas de besoin.`,
    dateCreation: "2026-03-12",
    dateModification: "2026-07-02",
    type: "consigne",
  },
  {
    id: 23,
    titre: "Référent(e) en AIDE VOLANTE",
    reference: "Consigne",
    entite: "Toutes populations",
    consigne: `Avant toute sollicitation, consultez la base de connaissance puis privilégiez le canal Teams nominatif.

Vérification du statut Genesys :

🟢 Busy Teams Support : référent(e) ou backup disponible en aide volante.
🔴 Busy : référent(e) déjà mobilisé(e) sur une autre activité.
Si aucun(e) référent(e) n'est disponible, vous pouvez :

💬 Poser votre question dans la conversation d'équipe.
📋 Ajouter votre incident dans le backlog PISVP afin de le reprendre ultérieurement.`,
    dateCreation: "2025-10-15",
    dateModification: "2026-07-16",
    type: "consigne",
  },
  {
    id: 36,
    titre: "EVERBRIDGE - Lien de connexion > Chrome KO",
    reference: "INC4653323",
    entite: "G2S, GMA",
    consigne: "-",
    dateCreation: "2026-07-02",
    dateModification: "2026-09-21",
    type: "incident",
  },
  {
    id: 60,
    titre: "GAN // ADP - L'application Epointage est indisponible ce 3 juillet matin (Bad Gateway (Error 502))",
    reference: "INC4674559",
    entite: "GanAss",
    consigne: "-",
    dateCreation: "2026-07-03",
    dateModification: "2026-07-03",
    type: "incident",
  },
  {
    id: 61,
    titre: "Outlook - recherche ne fonctionne pas",
    reference: "INC4679708",
    entite: "Toutes populations",
    consigne: "-",
    dateCreation: "2026-07-07",
    dateModification: "2026-07-16",
    type: "incident",
  },
  {
    id: 62,
    titre: "Fenetre IExplorer a l ouverture d'un courrier",
    reference: "INC4680495",
    entite: "Toutes populations",
    consigne: `Conserver les tickets rattachés au PISVP

[CONSIGNE]
Si ouverture d'une popup d'authentification iexplorer lors de l'ouverture d'un courrier OASIS en cours de rédaction :

>> S'assurer que le compte de connexion est bien le compte Windows

2 possibilités :
-Si le compte est OK, c'est donc un problème sur le serveur courrier (incident à déclarer)
-Si le compte KO >>  sélectionner « autre choix / Utiliser un autre Compte » et saisir le compte et le mot de passe Windows (qui permet de se connecter le matin)`,
    dateCreation: "2026-07-07",
    dateModification: "2026-07-16",
    type: "incident",
  },
  {
    id: 63,
    titre: "SINAPPS - Erreur au débranchement depuis néo",
    reference: "INC4681368",
    entite: "Toutes populations",
    consigne: "Une fois le dossier rattaché à l'incident père, garder les dossiers au PISVP",
    dateCreation: "2026-07-08",
    dateModification: "2026-07-09",
    type: "incident",
  },
  {
    id: 64,
    titre: "GCA - Accès capslive/capsauto KO",
    reference: "INC4681375",
    entite: "GCA",
    consigne: "-",
    dateCreation: "2026-07-08",
    dateModification: "2026-07-16",
    type: "incident",
  },
  {
    id: 65,
    titre: "GMED - Accès capslive/capsauto KO",
    reference: "INC4681281",
    entite: "GMED",
    consigne: "-",
    dateCreation: "2026-07-08",
    dateModification: "2026-07-16",
    type: "incident",
  },
  {
    id: 66,
    titre: "Accès capslive/capsauto KO",
    reference: "INC4681281",
    entite: "Toutes populations",
    consigne: "Une fois le dossier rattaché, merci de garder le ticket au PISVP",
    dateCreation: "2026-07-08",
    dateModification: "2026-07-09",
    type: "incident",
  },
  {
    id: 67,
    titre: "Trame de résolution des tickets (hors relance 3)",
    reference: "Consigne",
    entite: "Toutes populations",
    consigne: `Une trame pour les résolutions d'incident hors relance 3 a été créé, histoire d'homogénéiser les tickets.

Cette trame doit OBLIGATOIREMENT être utilisée a partir de maintenant pour l'ensemble des tickets (résolution direct ou traitement de backlog)

son nom : Ticket résolu / Notes de résolution`,
    dateCreation: "2026-07-08",
    dateModification: "2026-08-26",
    type: "consigne",
  },
  {
    id: 68,
    titre: "Incident réseau général",
    reference: "INC4682708",
    entite: "Toutes populations",
    consigne: "Rattacher vos dossiers à l'incident père et laissez vos ticket au PISVP",
    dateCreation: "2026-07-08",
    dateModification: "2026-07-10",
    type: "incident",
  },
  {
    id: 70,
    titre: "PULSE SECURE - Echec authentification erreur 1326",
    reference: "INC4689336",
    entite: "Toutes populations",
    consigne: "Rattachez vos tickets à l'incident père et les laisser au PISVP",
    dateCreation: "2026-07-16",
    dateModification: "2026-07-22",
    type: "incident",
  },
  {
    id: 71,
    titre: "IVANTI SECURE - Echec d'installation",
    reference: "INC4691530",
    entite: "Toutes populations",
    consigne: "Rattachez vos tickets à l'incident père et les conserver au PISVP",
    dateCreation: "2026-07-16",
    dateModification: "2026-07-22",
    type: "incident",
  },
  {
    id: 72,
    titre: "SINAPPS - Erreur de débranchement depuis NEO",
    reference: "INC4691831",
    entite: "Toutes populations",
    consigne: "Rattachez vos tickets à l'incident père et les conserver au PISVP",
    dateCreation: "2026-07-16",
    dateModification: "2026-07-16",
    type: "incident",
  },
  {
    id: 73,
    titre: "ALIZE PROD : REPLICATION KO",
    reference: "INC4695887",
    entite: "GGVie",
    consigne: "-",
    dateCreation: "2026-07-20",
    dateModification: "2026-07-22",
    type: "incident",
  },
  {
    id: 74,
    titre: "Autres POPULATIONS - SMART KO",
    reference: "INC4696276",
    entite: "Toutes populations",
    consigne: "Un vidage de cache peut être nécessaire pour retrouver des performances satisfaisantes",
    dateCreation: "2026-07-20",
    dateModification: "2026-07-22",
    type: "incident",
  },
  {
    id: 75,
    titre: "GAN - SMART KO",
    reference: "INC4696438",
    entite: "GanAss",
    consigne: "Un vidage de cache peut être nécessaire pour retrouver des performances satisfaisantes",
    dateCreation: "2026-07-20",
    dateModification: "2026-07-21",
    type: "incident",
  },
  {
    id: 77,
    titre: "OAT (EXCEL) - SMART erreur 1004",
    reference: "INC4698875",
    entite: "GMED, GCM, Toutes populations, GanAss",
    consigne: `Solution :

Sur Excel :
Aller dans Fichier > Options > Centre de gestion de la confidentialité
Puis cliquer sur "Paramètes du Centre de gestion de la confidentialité"
Puis suivre les 2 étapes :

1 - ActivX :
Aller d'abord sur "Paramètres ActiveX" et cocher :
-"Activer tous les controles sans restrictions [....]"
- "Mode sans échec"

2 - Macro VBA (+GRIS) :
Aller sur "Paramètres des macros" et cocher :

-"Activer les macro VBA (non recommandé ...)"
-"Activer les macros Excel 4.0 lorsque les macros VBA sont activées"
-"Accès approuvé au modèle d'objet du projet VBA"

Validez et retentez !

NB : Doc présente dans l'incident père`,
    dateCreation: "2026-07-21",
    dateModification: "2026-07-31",
    type: "incident",
  },
  {
    id: 78,
    titre: `GED Plusieurs message d'erreur possible : "impossible de charger le pli", "impossible d'afficher le document", "erreur lors de la recherche de documents".`,
    reference: "INC4707213",
    entite: "GMED",
    consigne: "-",
    dateCreation: "2026-07-27",
    dateModification: "2026-07-31",
    type: "incident",
  },
  {
    id: 79,
    titre: "GCA - accès au lecteur S (scan agence) ko",
    reference: "INC4711502",
    entite: "GCA",
    consigne: "-",
    dateCreation: "2026-07-30",
    dateModification: "2026-07-31",
    type: "incident",
  },
  {
    id: 80,
    titre: "Outlook Web - Page blanche lors de l'impression/prévisualisation de fichiers au format image",
    reference: "INC4709782",
    entite: "GanAss",
    consigne: "-",
    dateCreation: "2026-07-29",
    dateModification: "2026-08-11",
    type: "incident",
  },
  {
    id: 81,
    titre: "GMED- Suppression de favoris sur le Portail / Portail intramed",
    reference: "INC4710640",
    entite: "GMED",
    consigne: "-",
    dateCreation: "2026-07-29",
    dateModification: "2026-08-19",
    type: "incident",
  },
  {
    id: 82,
    titre: "ETEMPTATION - Difficulté d'accès à l'application / Cette connexion n'est pas privée",
    reference: "INC4716789",
    entite: "GMED",
    consigne: `Solution :
Cliquez sur « Avancé ».
Cliquez ensuite sur « Continuer vers gme-temptation.gsd.groupama.fr (non sécurisé) ».
> L'accès à etemptation s'effectue.`,
    dateCreation: "2026-08-04",
    dateModification: "2026-08-11",
    type: "incident",
  },
  {
    id: 83,
    titre: "GAN / ISI - Impossible de consulter ou faire des courriers sinistres sur ISI // Erreur frontal",
    reference: "INC4720168",
    entite: "GanAss",
    consigne: "-",
    dateCreation: "2026-08-06",
    dateModification: "2026-08-11",
    type: "incident",
  },
  {
    id: 84,
    titre: `GAN - ISI - erreur inconnu dans le frontal - Message d'erreur : Les compteurs affichés ne sont pas à jour`,
    reference: "INC4720157",
    entite: "GanAss",
    consigne: "-",
    dateCreation: "2026-08-06",
    dateModification: "2026-08-11",
    type: "incident",
  },
  {
    id: 85,
    titre: "FVA / le variant n'est pas un objet",
    reference: "INC4713254",
    entite: "GanAss",
    consigne: `CAROLE HAMOU
Commentaires Additionnels•
31/08/2026 11:03:00
Bonjour,
Une correction a été apportée.
Je procède donc à la résolution de cet incident.
Cordialement,
Carole HAMOU`,
    dateCreation: "2026-07-31",
    dateModification: "2026-09-21",
    type: "incident",
  },
  {
    id: 86,
    titre: "Econtact Paie - Echec ouverture du site / Forte lenteur",
    reference: "INC4730950",
    entite: "Toutes populations",
    consigne: "-",
    dateCreation: "2026-08-17",
    dateModification: "2026-08-26",
    type: "incident",
  },
  {
    id: 87,
    titre: "GMED / INTRAMED / Google chrome Introuvable l'ors lors de l'ouverture de QLIK",
    reference: "INC4736518",
    entite: "GMED",
    consigne: "-",
    dateCreation: "2026-08-21",
    dateModification: "2026-08-26",
    type: "incident",
  },
  {
    id: 88,
    titre: "Windows - écran noir (plusieurs secondes) lors de la recherche sur le menu démarrer",
    reference: "INC4736759",
    entite: "Toutes populations",
    consigne: `Solution de contournement :

Aller dans les Paramètres
Aller dans Confidentialité et Sécurité
Aller dans Autorisations de recherche
Dans la rubrique Recherche Web, désactiver Microsoft Bing`,
    dateCreation: "2026-08-21",
    dateModification: "2026-09-21",
    type: "incident",
  },
  {
    id: 89,
    titre: "LAPS UI - déblocage NOK",
    reference: "Consigne",
    entite: "Toutes populations",
    consigne: `Si vous ne parvenez pas à ouvrir une session local lors de la procédure LAPS UI.
Merci de prévenir une référente en gardant l'appel en attente.

Il faudra vérifier si un mot de passe est disponible dans Intune (voir ci-dessous)

Si oui :

Si non :`,
    dateCreation: "2026-08-31",
    dateModification: "2026-09-09",
    type: "consigne",
  },
  {
    id: 90,
    titre: "EDGE / Votre connexion n'est pas privée (Problème de sécurité pour toutes les applis interne)",
    reference: "INC4743463",
    entite: "GGVie",
    consigne: "-",
    dateCreation: "2026-08-27",
    dateModification: "2026-09-21",
    type: "incident",
  },
  {
    id: 91,
    titre: "GAN Agence / Odyssey - CLIMAP - GAN AGRI / Accès KO page blanche (chargement en boucle)",
    reference: "INC4743757",
    entite: "GanAss",
    consigne: "-",
    dateCreation: "2026-08-27",
    dateModification: "2026-09-21",
    type: "incident",
  },
  {
    id: 92,
    titre: "GMED PPROD COND12 KO - le formulaire est grisé",
    reference: "INC4749614",
    entite: "GMED",
    consigne: "-",
    dateCreation: "2026-09-01",
    dateModification: "2026-09-21",
    type: "incident",
  },
  {
    id: 93,
    titre: "GAN - ZENDESK - ajout de pièce jointe impossible à la création d'une demande",
    reference: "Consigne",
    entite: "GanAss",
    consigne: `Solution de contournement :
- Ajouter la pièce jointe via un cliquer/glisser.
ou
- Enregistrer la demande sans la pièce jointe puis l'ajouter ensuite.

Résoudre l'incident après avoir donné la consigne.`,
    dateCreation: "2026-09-07",
    dateModification: "2026-09-09",
    type: "consigne",
  },
  {
    id: 94,
    titre: "G2S - Perte d'accès aux applications O365 depuis smartphone pour les utilisateurs externes (prenom.nom.ext@groupama.com)",
    reference: "Consigne",
    entite: "G2S",
    consigne: `Suite au CHG0084765, le MFA devient obligatoire pour tous les utilisateurs externes de G2S, par exemple avec une adresse mail au format prenom.nom.ext@groupama.com*

Par conséquent un utilisateur G2S disposant d'un compte externe* devra avoir mis en place le MFA pour accéder aux applications pour O365 + Teams depuis un smartphone personnel ET professionnel (Android et iOS)

En cas de sollicitations, il faudra d'abord vérifier si le MFA est déjà mis en place : Ouvrir le lien https://mysignins.microsoft.com/security-info à partir d'un ordinateur ou VDI G2S.

cf "Inscription au MFA" dans la KB0016242.`,
    dateCreation: "2026-09-07",
    dateModification: "2026-09-08",
    type: "consigne",
  },
  {
    id: 95,
    titre: `DARVA / SINAPPS - Impossible de valider rapport d'expertise et note d'honoraires, mission ne s'envoie pas`,
    reference: "INC4763848",
    entite: "GanAss",
    consigne: "-",
    dateCreation: "2026-09-09",
    dateModification: "2026-09-21",
    type: "incident",
  },
  {
    id: 96,
    titre: "ECD OneDrive - Impossibilité de partager le lien d'un fichier",
    reference: "INC4720295",
    entite: "Toutes populations",
    consigne: "-",
    dateCreation: "2026-08-06",
    dateModification: "2026-10-09",
    type: "incident",
  },
  {
    id: 97,
    titre: "[25H02] Migration / Déploiement Windows Version / Écran bleu + BitLocker",
    reference: "INC4757481",
    entite: "G2S",
    consigne: `Dans le cadre du déploiement de Windows 25H2, l'ordinateur peut rester bloqué sur un écran bleu demandant le choix de la langue.

Actions :
→ Redémarrer l'ordinateur

Si l'écran bleu persiste :

→ Choix de la langue
→ Choix sur "utiliser un autre système d'exploitation"

→ Choix sur "Windows 11 sur le volume 3" (celui du milieu)

→ Cela demande la clé BitLocker > Clé à récupérer via Intune (cf KB0015815) et à communiquer à l'utilisateur (par Teams si possible).

Si l'ordinateur est toujours bloqué, escalader l'incident en matériel / dysfonctionnement .
Si l'ordinateur est débloqué, escalader l'incident en application / dysfonctionnement / Windows.
Attention, il y a des redémarrages automatiques du poste.`,
    dateCreation: "2026-09-09",
    dateModification: "2026-09-09",
    type: "incident",
  },
  {
    id: 98,
    titre: "EDITO - Erreur à la génération des documents (envoi documents, SED, etc.)",
    reference: "INC4765216",
    entite: "Toutes populations, GanAss, GCM, GMED",
    consigne: "-",
    dateCreation: "2026-09-09",
    dateModification: "2026-09-21",
    type: "incident",
  },
  {
    id: 99,
    titre: "API IGN KO - message erreur GAN AGRI",
    reference: "INC4774750",
    entite: "GanAss",
    consigne: "-",
    dateCreation: "2026-09-15",
    dateModification: "2026-09-21",
    type: "incident",
  },
  {
    id: 100,
    titre: "NEO - Accès tache KO",
    reference: "INC4776558",
    entite: "Toutes populations",
    consigne: "-",
    dateCreation: "2026-09-16",
    dateModification: "2026-09-21",
    type: "incident",
  },
  {
    id: 101,
    titre: "GCM - Néo - Erreur sur la récupération des tâches et des campagnes",
    reference: "INC4776547",
    entite: "GCM",
    consigne: "-",
    dateCreation: "2026-09-16",
    dateModification: "2026-09-21",
    type: "incident",
  },
  {
    id: 102,
    titre: `GMED - Imprimante multifonction - Scan "Echec de numérisation"`,
    reference: "INC4785128",
    entite: "GMED",
    consigne: "-",
    dateCreation: "2026-09-22",
    dateModification: "2026-09-22",
    type: "incident",
  },
  {
    id: 103,
    titre: "G2S - Teams - latences",
    reference: "INC4783123",
    entite: "G2S",
    consigne: `Solution :
Paramètres Teams > Général > Cocher "Ne jamais utiliser le mode Efficacité"

-Noter le modèle du poste dans le ticket (ex : Lenovo THINKPAD L13 AMD GEN4)
-Version Windows (commande winver)`,
    dateCreation: "2026-09-21",
    dateModification: "2026-09-23",
    type: "incident",
  },
  {
    id: 104,
    titre: "GMED - La SED (signature électronique) est KO",
    reference: "INC4789770",
    entite: "GMED",
    consigne: "Solution de contournement : Seulement si le client est en face à face, signature possible",
    dateCreation: "2026-09-24",
    dateModification: "2026-09-24",
    type: "incident",
  },
  {
    id: 105,
    titre: `Néo - message : Oups ! vous n'êtes plus habilité à Néo.`,
    reference: "INC4793318",
    entite: "GCM",
    consigne: "-",
    dateCreation: "2026-09-23",
    dateModification: "2026-10-01",
    type: "incident",
  },
  {
    id: 106,
    titre: "GCM - PORTE ADRESSE - Accès à l'application impossible (http://web.gcm.intra.groupama.fr/web/intranet/appli/PorteAdresse/index.html)",
    reference: "INC4800642",
    entite: "GCM",
    consigne: "Rattacher au groupe GCM ASR",
    dateCreation: "2026-10-01",
    dateModification: "2026-10-01",
    type: "incident",
  },
  {
    id: 107,
    titre: "GAN AGT - Habilitation manquante pour un nouvel arrivant > coffre-fort GRC absent.",
    reference: "INC4797539",
    entite: "GanAss",
    consigne: "-",
    dateCreation: "2026-09-30",
    dateModification: "2026-10-02",
    type: "incident",
  },
  {
    id: 108,
    titre: `MRI01 - la carte ne s'affiche pas : 403 "access blocked"`,
    reference: "INC4770480",
    entite: "Toutes populations",
    consigne: "-",
    dateCreation: "2026-09-11",
    dateModification: "2026-10-08",
    type: "incident",
  },
  {
    id: 109,
    titre: `GMED - Cartographie boosters urbains - Vue maps KO "403 access blocked"`,
    reference: "INC4771840",
    entite: "GMED",
    consigne: "Choisir le fond de carte > Vue satellite",
    dateCreation: "2026-09-14",
    dateModification: "2026-10-06",
    type: "incident",
  },
  {
    id: 110,
    titre: `WEP - Accès impossible "une erreur est survenue"`,
    reference: "INC4808289",
    entite: "Toutes populations",
    consigne: "-",
    dateCreation: "2026-10-06",
    dateModification: "2026-10-06",
    type: "incident",
  },
  {
    id: 111,
    titre: "Poste de travail - Mise a jour en boucle lié au Pilote LENOVO",
    reference: "INC4807728",
    entite: "Toutes populations",
    consigne: "Plusieurs utilisateurs se plaignent de mise a jour en boucle lié au pilote lenovo depuis le mois de septembre",
    dateCreation: "2026-10-07",
    dateModification: "2026-10-07",
    type: "incident",
  },
  {
    id: 112,
    titre: "Pb de son/micro sur un type de poste L13 GN3/4",
    reference: "INC4801472",
    entite: "G2S",
    consigne: `Indiquer dans l'incident :
-Modèle de poste

-Version pilote audio concerné

Constat : Plusieurs utilisateurs signalent un volume micro très faible lors des réunions Teams ainsi qu'un volume audio faible via les haut-parleurs intégrés. Les cas observés concernent principalement des postes Lenovo L13 Gen3 et Gen4.`,
    dateCreation: "2026-10-01",
    dateModification: "2026-10-08",
    type: "incident",
  },
  {
    id: 113,
    titre: "GAN agence - Artemis - Accès VDI NOK",
    reference: "INC4815652",
    entite: "GanAss",
    consigne: "-",
    dateCreation: "2026-10-12",
    dateModification: "2026-10-14",
    type: "incident",
  },
  {
    id: 114,
    titre: "GAN - ISI - Ouverture/consultation sinistre client en défaut",
    reference: "INC4815869",
    entite: "GanAss",
    consigne: "-",
    dateCreation: "2026-10-12",
    dateModification: "2026-10-12",
    type: "incident",
  },
  {
    id: 115,
    titre: "GMED - Neo - TODO toutes les données à 0",
    reference: "INC4815838",
    entite: "GMED",
    consigne: "-",
    dateCreation: "2026-10-12",
    dateModification: "2026-10-14",
    type: "incident",
  },
  {
    id: 116,
    titre: "GMED / Tests EGARAGE MRAUTO débranchement KO en Affaire nouvelle depuis Néo création ETUDE, environnement production impacté,",
    reference: "INC4815208",
    entite: "GMED",
    consigne: `Consigne et solution de contournement :
créer l'affaire nouvelle MRAUTO depuis SMART.
Correctif prévu en début de semaine prochaine.`,
    dateCreation: "2026-10-11",
    dateModification: "2026-10-12",
    type: "incident",
  },
  {
    id: 117,
    titre: "PROVEANCE GGVIE - Ged médicale - 500 - L'application a un problème interne avec cette requête. Notre équipe a été notifiée et travaille à sa résolution.",
    reference: "INC4816078",
    entite: "GGVie",
    consigne: "-",
    dateCreation: "2026-10-12",
    dateModification: "2026-10-12",
    type: "incident",
  },
  {
    id: 118,
    titre: "Incident CANOPEE",
    reference: "INC4821084",
    entite: "GanAss",
    consigne: "-",
    dateCreation: "2026-10-14",
    dateModification: "2026-10-14",
    type: "incident",
  },
  {
    id: 119,
    titre: "MICROSOFT - Téléversement de fichiers OneDrive et récupération des documents partagés via TEAM KO",
    reference: "INC4821231",
    entite: "GanAss",
    consigne: "-",
    dateCreation: "2026-10-14",
    dateModification: "2026-10-14",
    type: "incident",
  },
  {
    id: 120,
    titre: "GAN - EDITO - Erreur de compilation COENT",
    reference: "INC4819354",
    entite: "GanAss",
    consigne: "-",
    dateCreation: "2026-10-13",
    dateModification: "2026-10-14",
    type: "incident",
  },
  {
    id: 121,
    titre: "ASTERION - Incident de connexion",
    reference: "INC4822452",
    entite: "GanAss",
    consigne: "-",
    dateCreation: "2026-10-14",
    dateModification: "2026-10-14",
    type: "incident",
  },
  {
    id: 122,
    titre: "GAN AGT - Portail Agence : Divers prob d'accès / erreur 0000",
    reference: "INC4816782",
    entite: "GanAss",
    consigne: "-",
    dateCreation: "2026-10-14",
    dateModification: "2026-10-14",
    type: "incident",
  },
  {
    id: 123,
    titre: "NEO - Fermeture d'opportunités défense résiliation KO",
    reference: "INC4819827",
    entite: "GNE",
    consigne: "-",
    dateCreation: "2026-10-14",
    dateModification: "2026-10-15",
    type: "incident",
  },
];
