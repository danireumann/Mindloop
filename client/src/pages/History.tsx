import { useState, useMemo } from "react";
import dayjs from "dayjs";
import { Header } from "../components/Header";
import { BurgerMenu } from "../components/BurgerMenu";
import { entriesRepo } from "../storage/entriesRepo";
import { EntryListItem } from "../components/EntryListItem";

export function History() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursor, setCursor] = useState(dayjs());

  const entries = useMemo(() => {
    return entriesRepo.listByMonth(cursor.year(), cursor.month());
  }, [cursor]);

  return (
    <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
      <Header onMenuToggle={() => setMenuOpen(v => !v)} />
      <BurgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main style={{ padding: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <button onClick={() => setCursor(cursor.subtract(1, "month"))}>←</button>
          <div style={{ fontWeight: 600 }}>{cursor.format("MMMM YYYY")}</div>
          <button onClick={() => setCursor(cursor.add(1, "month"))}>→</button>
        </div>

        {/* debug removed */}

        {entries.length === 0 ? (
          <div style={{ color: "#666" }}>No entries this month.</div>
        ) : (
          <div>
            {entries.map(e => (
              <div key={e.id} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ flex: 1 }}>
                  <EntryListItem entry={e} />
                </div>
                <button
                  onClick={() => {
                    if (confirm("Delete this entry?")) {
                      entriesRepo.remove(e.id);
                      // force refresh by nudging cursor state
                      setCursor(c => c.add(0, "month"));
                    }
                  }}
                  aria-label="Delete entry"
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}