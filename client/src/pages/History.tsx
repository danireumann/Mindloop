import { useState } from "react";
import dayjs from "dayjs";
import { Header } from "../components/Header";
import { BurgerMenu } from "../components/BurgerMenu";

export function History() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursor, setCursor] = useState(dayjs());

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
        <div>Entries will show here next.</div>
      </main>
    </div>
  );
}