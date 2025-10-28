import { useState } from "react";
import { Header } from "../components/Header";
import { BurgerMenu } from "../components/BurgerMenu";

export function DayView() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
      <Header onMenuToggle={() => setMenuOpen(v => !v)} />
      <BurgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main style={{ padding: 16 }}>
        <div>Day details will appear here.</div>
      </main>
    </div>
  );
}