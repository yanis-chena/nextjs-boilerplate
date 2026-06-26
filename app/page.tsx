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
  aide: "bg-sky-400/20 text-sky-200 border-sky-300/30",
};

function Badge({ type }: { type?: string }) {
  const style =
    (type && TYPE_STYLES[type]) ?? "bg-white/10 text-white/70 border-white/20";
  const label = type ? type.charAt(0).toUpperCase() + type.slice(1) : "Autre";

  return (
    <span
      className={`shrink-0 inline-block text-xs font-medium px-2 py-0.5 rounded-full border ${style}`}
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
  const items = type
    ? MOCK_DATA.filter((item) => item.type === type)
    : MOCK_DATA;

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
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-bold text-lg">{item.titre}</h2>
            <Badge type={item.type} />
          </div>
          <p className="text-sm text-white/70 mt-1">
            {item.reference} · {item.entite}
          </p>
          <p className="text-sm mt-2 text-white/90 line-clamp-2 break-words">
            {item.consigne.split("\n")[0]}
          </p>
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
      <div className="absolute inset-0 bg-[oklch(26.6%_0.065_152.934)] backdrop-blur-md" />
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
    <div className="h-[50rem] underline underline-offset-4 relative text-2xl flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20 px-4 ">
      <TextRoll 
      className="font-display w-full text-center text-7xl font-extrabold tracking-tight mb-6 "
      >
  CONSIGNES & INCIDENTS
</TextRoll>
      <Tabs tabs={tabs} />

      <AnimatePresence>
        {selected && (
          <ConsignePopup item={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
