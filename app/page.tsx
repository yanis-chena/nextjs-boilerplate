"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Tabs } from "@/components/ui/tabs";
import { MOCK_DATA } from "./Data";
import { createPortal } from "react-dom";

type Item = (typeof MOCK_DATA)[number];

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
    <div className="w-full h-full overflow-auto rounded-2xl p-6 bg-gradient-to-br from-purple-700 to-violet-900">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item)}
          className="block w-full text-left mb-4 p-4 bg-white/10 hover:bg-white/20 transition-colors rounded-xl text-white cursor-pointer"
        >
          <h2 className="font-bold text-lg">{item.titre}</h2>
          <p className="text-sm opacity-70">
            {item.reference} · {item.entite}
          </p>
          <p className="text-sm mt-2">{item.consigne.split("\n")[0]}</p>
        </button>
      ))}
    </div>
  );
}

// ─── Popup de détail ───────────────────────────────────────────────────────────
function ConsignePopup({
  item,
  onClose,
}: {
  item: Item;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-red-800 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-lg max-h-[80vh] overflow-auto rounded-2xl p-6 bg-gradient-to-br from-purple-700 to-violet-900 text-white shadow-2xl"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white"
          aria-label="Fermer"
        >
          ✕
        </button>

        <h2 className="font-bold text-xl pr-8">{item.titre}</h2>
        <p className="text-sm opacity-70 mt-1">
          {item.reference} · {item.entite}
        </p>
        <p className="text-sm mt-4 whitespace-pre-line">{item.consigne}</p>

        <div className="text-xs opacity-50 mt-6">
          {item.dateCreation && <p>Créé le {item.dateCreation}</p>}
          <p>Modifié le {item.dateModification}</p>
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
    <div className="h-[50rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20 px-4 ">
      <h1 className="text-5xl font-bold oklch(44.8% 0.119 151.328) mb-6 animate-fade-up animate-once animate-ease-in-out">
        Groupama TECH — Consignes & Incidents
      </h1>
      <Tabs tabs={tabs} />

      <AnimatePresence>
        {selected && (
          <ConsignePopup item={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}