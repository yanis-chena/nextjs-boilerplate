"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Tabs } from "@/components/ui/tabs";
import { MOCK_DATA } from "./Data";
import { TextRoll } from "@/components/ui/text-roll";

type Item = (typeof MOCK_DATA)[number];

// ─── Badge par type ─────────────────────────────────────────────────────────
const TYPE_STYLES: Record<string, string> = {
  consigne: "bg-emerald-400/20 text-emerald-200 border-emerald-300/30",
  incident: "bg-orange-400/20 text-orange-200 border-orange-300/30",
};

function Badge({ type }: { type?: string }) {
  const style =
    (type && TYPE_STYLES[type]) ?? "bg-white/10 text-white/70 border-white/20";
  const label = type ? type.charAt(0).toUpperCase() + type.slice(1) : "Autre";

  return (
    <span
      className={`shrink-0 inline-block text-2xs font-medium px-2 py-0.5 rounded-full border ${style}`}
    >
      {label}
    </span>
  );
}

// ─── Contenu d'un onglet ───────────────────────────────────────────────────────
function ListeConsignes({
  type,
  onSelect,
}: {
  type?: "consigne" | "incident";
  onSelect: (item: Item) => void;
}) {
  const items = (
    type ? MOCK_DATA.filter((item) => item.type === type) : MOCK_DATA
  ).sort((a, b) => {
    if (!a.dateCreation) return 1;   // null → fin de liste
    if (!b.dateCreation) return -1;
    return b.dateCreation.localeCompare(a.dateCreation); // décroissant
  });

  return (
    <div className="w-full h-full no-visible-scrollbar overflow-auto rounded-2xl p-6 bg-gradient-to-br from-[#005f4b] via-[#003d30] to-[#001f19]">
      {items.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => onSelect(item)}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="
            block w-full text-left mb-4 p-4
            bg-white/5 hover:bg-white/20
            border border-white/10
            rounded-xl text-white cursor-pointer
            shadow-sm shadow-black/20
            transition-all duration-300
          "
        >
          <div className="grid grid-cols-[1fr_2fr_auto] items-center gap-4">
            <p className="text-3sm text-white/90">
              {item.dateCreation} · {item.entite} · {item.reference}
            </p>
            <h2 className="font-bold text-lg truncate">{item.titre}</h2>
            <Badge type={item.type} />
          </div>
        </motion.button>
      ))}
    </div>
  );
}

// ─── Popup de détail ───────────────────────────────────────────────────────────
function ConsignePopup({ item, onClose }: { item: Item; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Fond sombre + glow radial vert */}
      <div className="absolute inset-0 bg-[oklch(15.3% 0.006 107.1)] backdrop-blur-md" />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(0,163,125,0.25), transparent 5%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      />

      <motion.div
        className="relative w-full my-8 max-w-5xl max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl break-words"
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ type: "spring", bounce: 0.25, duration: 0.45 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background:
            "linear-gradient(135deg, #00a37d, #006a53 35%, #003d30 70%, #001f19)",
        }}
      >
        {/* Liseré lumineux en haut, signature visuelle */}
        <div className="h-1 w-full bg-gradient-to-r from-emerald-300 via-emerald-400 to-transparent" />

        <div className="p-8">
          {/* Bouton fermer, stylé en cercle glass */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white border border-white/10 transition-colors duration-200"
            aria-label="Fermer"
          >
            ✕
          </button>

          {/* Header */}
          <div className="flex items-start justify-between gap-4 pr-12">
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="font-bold text-4xl md:text-5xl text-white tracking-tight">
                  {item.titre}
                </h2>
                <Badge type={item.type} />
              </div>
              <p className="text-lg md:text-xl text-emerald-100/60 mt-2 font-medium tracking-wide uppercase">
                {item.reference} · {item.entite}
              </p>
            </div>
          </div>

          {/* Séparateur fin */}
          <div className="h-px w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent my-6" />

          {/* Corps */}
          <p className="text-xl md:text-2xl leading-relaxed text-white/90 whitespace-pre-line">
            {item.consigne}
          </p>

          {/* Footer métadonnées */}
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-emerald-100/50 mt-8 pt-4 border-t border-white/10">
            {item.dateCreation && <p>Créé le {item.dateCreation}</p>}
            <p>Modifié le {item.dateModification}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Page principale ──────────────────────────────────────────────────────────
export default function Home() {
  const [selected, setSelected] = useState<Item | null>(null);

  const tabs = [
    {
      title: "Tous",
      value: "tous",
      content: <ListeConsignes onSelect={setSelected} />,
    },
    {
      title: "Consignes",
      value: "consigne",
      content: <ListeConsignes type="consigne" onSelect={setSelected} />,
    },
    {
      title: "Incidents généraux",
      value: "incident",
      content: <ListeConsignes type="incident" onSelect={setSelected} />,
    },
  ];

  return (
    <div className="relative">
      {/* Logos */}
      <img
        src="/EverienceHelplineLogo.jpg"
        alt="Helpline by everience"
        className="absolute top-0 left-0 h-12 w-32 sm:h-20 sm:w-52 md:h-30 md:w-80"
      />
      <img
        src="/GroupamaLogo.png"
        alt="Logo Groupama"
        className="absolute top-0 right-0 h-12 w-32 z-10 sm:h-24 sm:w-52 md:h-30 md:w-80"
      />

      <div className="h-[80rem] relative flex flex-col max-w-7xl mx-auto w-full items-start justify-start mt-10 px-4">
        {/* Titre */}
        <div className="w-full flex justify-center mb-8 pt-16 sm:pt-12 md:pt-0">
          <TextRoll className="font-display text-center text-4xl md:text-6xl font-extrabold tracking-tight">
            CONSIGNES & INCIDENTS
          </TextRoll>
        </div>
        <div className="max-w-7xl w-full h-[60rem] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">📢</span>
            <h2 className="text-2xl font-bold text-emerald-300">
              Demande d'aide
            </h2>
          </div>
          <div className="space-y-4 text-lg text-emerald-100/80 leading-relaxed">
            <p>
              Avant toute sollicitation,{" "}
              <span className="font-semibold text-white">
                consultez la base de connaissance
              </span>{" "}
              puis privilégiez le{" "}
              <span className="font-semibold text-white">
                canal Teams nominatif
              </span>
              .
            </p>
            <div className="rounded-xl bg-black/20 p-4">
              <p className="font-semibold text-emerald-300 mb-2">
                Vérification du statut Genesys :
              </p>

              <ul className="space-y-2">
                <li>
                  🟢{" "}
                  <span className="font-semibold" style={{ color: "#fd6bda" }}>
                    Busy Teams Support
                  </span>{" "}
                  : référent(e) ou backup disponible en aide volante.
                </li>

                <li>
                  🔴{" "}
                  <span className="font-semibold" style={{ color: "#ffb200" }}>
                    Busy
                  </span>{" "}
                  : référent(e) déjà mobilisé(e) sur une autre activité.
                </li>
              </ul>
            </div>
            <p>Si aucun(e) référent(e) n'est disponible, vous pouvez :</p>
            <ul className="space-y-2 ml-4">
              <li>💬 Poser votre question dans la conversation d'équipe.</li>
              <li>
                📋 Ajouter votre incident dans le backlog PISVP afin de le
                reprendre ultérieurement.
              </li>
            </ul>
          </div>
        </div>
        <Tabs tabs={tabs} />
        <AnimatePresence>
          {selected && (
            <ConsignePopup item={selected} onClose={() => setSelected(null)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
