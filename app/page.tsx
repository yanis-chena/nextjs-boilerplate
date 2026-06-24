"use client";

import { Tabs } from "@/components/ui/tabs";
import { MOCK_DATA } from "./Data";

// ─── Contenu d'un onglet ───────────────────────────────────────────────────────
function ListeConsignes({ type }: { type?: "consigne" | "incident" }) {
  const items = type
    ? MOCK_DATA.filter((item) => item.type === type)
    : MOCK_DATA;

  return (
    <div className="w-full h-full overflow-auto rounded-2xl p-6 bg-gradient-to-br from-purple-700 to-violet-900">
      {items.map((item) => (
        <div
          key={item.id}
          className="mb-4 p-4 bg-white/10 rounded-xl text-white"
        >
          <h2 className="font-bold text-lg">{item.titre}</h2>
          <p className="text-sm opacity-70">
            {item.reference} · {item.entite}
          </p>
          <p className="text-sm mt-2">{item.consigne.split("\n")[0]}</p>
        </div>
      ))}
    </div>
  );
}

// ─── Page principale ──────────────────────────────────────────────────────────
export default function Home() {
  const tabs = [
    {
      title: "Tous",
      value: "tous",
      content: <ListeConsignes />,
    },
    {
      title: "Consignes",
      value: "consigne",
      content: <ListeConsignes type="consigne" />,
    },
    {
      title: "Incidents généraux",
      value: "incident",
      content: <ListeConsignes type="incident" />,
    },
  ];

  return (
    <div className="h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20 px-4 ">
      <h1 className="text-5xl font-bold oklch(44.8% 0.119 151.328) mb-6 animate-fade-up animate-once animate-ease-in-out">
        Groupama TECH — Consignes & Incidents
      </h1>
      <Tabs tabs={tabs} />
    </div>
  );
}
