"use client";

import { useEffect, useState } from "react";

// ─── MOCK DATA (vraies données SharePoint) ────────────────────────────────────
// Remplacer USE_MOCK par false une fois l'accès admin SharePoint obtenu
const USE_MOCK = true;

const MOCK_DATA = [
  {
    Id: 1,
    Title: "TEST",
    R_x00e9_f_x00e9_rence: "Consigne",
    Entit_x00e9_s: "Toutes populations",
    Consigne_x002f_Actions_x002f_Con: "Consigne TEST\n\nSuivre les KB\n\nPrévenir lors d'IG\n\nSoyez gentils tout plein",
    Cr_x00e9__x00e9_le: "2026-06-09T07:00:00Z",
    Modified: "2026-06-15T08:33:22Z",
  },
  {
    Id: 3,
    Title: "TEST 2",
    R_x00e9_f_x00e9_rence: "INC151515",
    Entit_x00e9_s: "GanAss",
    Consigne_x002f_Actions_x002f_Con: "Rattacher à l'incident et appliquer la méthode de contournement",
    Cr_x00e9__x00e9_le: "2026-06-11T07:00:00Z",
    Modified: "2026-06-15T08:31:00Z",
  },
  {
    Id: 4,
    Title: "TEST 3",
    R_x00e9_f_x00e9_rence: "INC262626",
    Entit_x00e9_s: "GMED",
    Consigne_x002f_Actions_x002f_Con: "Rattacher l'incident",
    Cr_x00e9__x00e9_le: "2026-06-15T07:00:00Z",
    Modified: "2026-06-15T08:32:01Z",
  },
  {
    Id: 5,
    Title: "TEST 4",
    R_x00e9_f_x00e9_rence: "Consigne",
    Entit_x00e9_s: "GanPat",
    Consigne_x002f_Actions_x002f_Con: "BLABLA",
    Cr_x00e9__x00e9_le: null,
    Modified: "2026-06-15T08:40:39Z",
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────
type EloItem = {
  Id: number;
  Title: string;
  R_x00e9_f_x00e9_rence: string;
  Entit_x00e9_s: string;
  Consigne_x002f_Actions_x002f_Con: string;
  Cr_x00e9__x00e9_le: string | null;
  Modified: string;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatDate(iso: string | null) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function getRefBadgeStyle(ref: string): React.CSSProperties {
  if (ref.startsWith("INC")) return { background: "#FEF3C7", color: "#92400E" };
  return { background: "#EDE9FE", color: "#5B21B6" };
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  const [data, setData] = useState<EloItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    if (USE_MOCK) {
      setTimeout(() => {
        setData(MOCK_DATA);
        setLoading(false);
      }, 400);
      return;
    }

    fetch(
      "https://helpline.sharepoint.com/sites/GroupamaTECHS/_api/web/lists/getbytitle('Test Elo')/items",
      {
        method: "GET",
        headers: { Accept: "application/json;odata=verbose" },
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.d.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filtered = data.filter((item) => {
    const q = search.toLowerCase();
    return (
      item.Title.toLowerCase().includes(q) ||
      item.R_x00e9_f_x00e9_rence?.toLowerCase().includes(q) ||
      item.Entit_x00e9_s?.toLowerCase().includes(q) ||
      item.Consigne_x002f_Actions_x002f_Con?.toLowerCase().includes(q)
    );
  });

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Groupama TECH Consignes et incidents généraux</h1>
          <p style={styles.subtitle}>
            {USE_MOCK && (
              <span style={styles.mockBadge}>● MODE DEV — données mockées</span>
            )}
            {data.length} consigne{data.length > 1 ? "s" : ""} chargée{data.length > 1 ? "s" : ""}
          </p>
        </div>
        <input
          style={styles.search}
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Content */}
      {loading ? (
        <div style={styles.loading}>Chargement...</div>
      ) : filtered.length === 0 ? (
        <div style={styles.empty}>Aucun résultat pour « {search} »</div>
      ) : (
        <div style={styles.grid}>
          {filtered.map((item) => (
            <div
              key={item.Id}
              style={styles.card}
              onClick={() => setExpanded(expanded === item.Id ? null : item.Id)}
            >
              {/* Card header */}
              <div style={styles.cardHeader}>
                <span style={styles.cardTitle}>{item.Title}</span>
                <span style={{ ...styles.badge, ...getRefBadgeStyle(item.R_x00e9_f_x00e9_rence) }}>
                  {item.R_x00e9_f_x00e9_rence}
                </span>
              </div>

              {/* Meta */}
              <div style={styles.meta}>
                <span style={styles.entity}>🏢 {item.Entit_x00e9_s}</span>
                <span style={styles.date}>📅 {formatDate(item.Cr_x00e9__x00e9_le)}</span>
              </div>

              {/* Consigne preview */}
              <p style={styles.consignePreview}>
                {item.Consigne_x002f_Actions_x002f_Con?.split("\n")[0]}
              </p>

              {/* Expanded */}
              {expanded === item.Id && (
                <div style={styles.expanded}>
                  <div style={styles.expandedLabel}>Consigne complète</div>
                  <pre style={styles.consigneFull}>
                    {item.Consigne_x002f_Actions_x002f_Con}
                  </pre>
                  <div style={styles.expandedMeta}>
                    Modifié le {formatDate(item.Modified)}
                  </div>
                </div>
              )}

              <div style={styles.toggle}>
                {expanded === item.Id ? "▲ Réduire" : "▼ Voir consigne"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    background: "#F8FAFC",
    minHeight: "100vh",
    padding: "24px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "24px",
    flexWrap: "wrap",
    gap: "12px",
  },
  title: {
    margin: 0,
    fontSize: "1.6rem",
    fontWeight: 700,
    color: "#0F172A",
  },
  subtitle: {
    margin: "4px 0 0",
    fontSize: "0.85rem",
    color: "#64748B",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  mockBadge: {
    background: "#FEF9C3",
    color: "#854D0E",
    padding: "2px 8px",
    borderRadius: "999px",
    fontSize: "0.75rem",
    fontWeight: 600,
  },
  search: {
    padding: "8px 14px",
    border: "1px solid #CBD5E1",
    borderRadius: "8px",
    fontSize: "0.9rem",
    width: "220px",
    outline: "none",
    background: "#fff",
  },
  loading: {
    textAlign: "center",
    padding: "60px",
    color: "#94A3B8",
    fontSize: "1rem",
  },
  empty: {
    textAlign: "center",
    padding: "60px",
    color: "#94A3B8",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "16px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "18px",
    border: "1px solid #E2E8F0",
    cursor: "pointer",
    transition: "box-shadow 0.15s",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    gap: "8px",
  },
  cardTitle: {
    fontWeight: 600,
    fontSize: "1rem",
    color: "#1E293B",
  },
  badge: {
    fontSize: "0.72rem",
    fontWeight: 600,
    padding: "3px 10px",
    borderRadius: "999px",
    whiteSpace: "nowrap",
  },
  meta: {
    display: "flex",
    gap: "16px",
    fontSize: "0.8rem",
    color: "#64748B",
    marginBottom: "10px",
  },
  entity: {},
  date: {},
  consignePreview: {
    margin: 0,
    fontSize: "0.85rem",
    color: "#475569",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  expanded: {
    marginTop: "14px",
    borderTop: "1px solid #F1F5F9",
    paddingTop: "12px",
  },
  expandedLabel: {
    fontSize: "0.72rem",
    fontWeight: 600,
    color: "#94A3B8",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginBottom: "8px",
  },
  consigneFull: {
    margin: 0,
    fontSize: "0.85rem",
    color: "#334155",
    whiteSpace: "pre-wrap",
    fontFamily: "inherit",
    lineHeight: 1.6,
    background: "#F8FAFC",
    borderRadius: "6px",
    padding: "10px 12px",
  },
  expandedMeta: {
    marginTop: "8px",
    fontSize: "0.75rem",
    color: "#94A3B8",
    textAlign: "right",
  },
  toggle: {
    marginTop: "12px",
    fontSize: "0.75rem",
    color: "#6366F1",
    fontWeight: 500,
  },
};