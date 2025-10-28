import { useState } from "react";
import dayjs from "dayjs";
import { Header } from "../components/Header";
import { BurgerMenu } from "../components/BurgerMenu";
import { MoodSlider } from "../components/MoodSlider";
import { generateReflection } from "../ai";
import { entriesRepo } from "../storage/entriesRepo";
import type { Entry } from "../types/entry";

function createId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [text, setText] = useState("");
  const [mood, setMood] = useState(3);
  const [aiText, setAiText] = useState("");
  const [isReflecting, setIsReflecting] = useState(false);

  async function onReflect() {
    if (!text.trim()) return;
    setIsReflecting(true);
    setAiText("");

    const nowISO = dayjs().toDate().toISOString();
    const ai = await generateReflection({ text, mood, dateISO: nowISO });

    const entry: Entry = {
      id: createId(),
      dateISO: nowISO,
      timeISO: nowISO,
      mood: (mood as 1 | 2 | 3 | 4 | 5),
      text: text.trim(),
      aiText: ai,
    };
    entriesRepo.add(entry);

    setAiText(ai);
    setIsReflecting(false);
  }

  return (
    <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
      <Header onMenuToggle={() => setMenuOpen((v) => !v)} />
      <BurgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main style={{ padding: 16, display: "grid", gap: 16 }}>
        <textarea
          placeholder="How are you feeling today?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={8}
          style={{ width: "100%" }}
        />
        <MoodSlider value={mood} onChange={setMood} />
        <button onClick={onReflect} disabled={isReflecting || !text.trim()}>
          {isReflecting ? "Reflecting…" : "Reflect"}
        </button>
        {aiText && (
          <section
            style={{
              whiteSpace: "pre-wrap",
              padding: 12,
              border: "1px solid #eee",
              borderRadius: 8,
              background: "#fafafa",
            }}
          >
            {aiText}
          </section>
        )}
      </main>
    </div>
  );
}