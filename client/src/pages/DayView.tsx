import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { BurgerMenu } from "../components/BurgerMenu";
import { entriesRepo } from "../storage/entriesRepo";
import { formatDate, formatTime, moodToEmoji } from "../utils/format";
import { MoodSlider } from "../components/MoodSlider";

export function DayView() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const entry = id ? entriesRepo.get(id) : undefined;
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(entry?.text ?? "");
  const [editMood, setEditMood] = useState<number>(entry?.mood ?? 3);

  return (
    <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
      <Header onMenuToggle={() => setMenuOpen(v => !v)} />
      <BurgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main style={{ padding: 16, display: "grid", gap: 12 }}>
        {!entry ? (
          <>
            <div style={{ color: "#666" }}>Entry not found.</div>
            <button onClick={() => navigate(-1)}>Go back</button>
          </>
        ) : (
          <>
            <div style={{ fontSize: 14, color: "#666" }}>
              {formatDate(entry.dateISO)} · {formatTime(entry.timeISO)} · {moodToEmoji(entry.mood)}
            </div>

            {isEditing ? (
              <>
                <h2 style={{ margin: "8px 0" }}>Edit note</h2>
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  rows={8}
                  style={{ width: "100%" }}
                />
                <MoodSlider value={editMood} onChange={setEditMood} />
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    onClick={() => {
                      const updated = { ...entry, text: editText.trim(), mood: editMood as 1|2|3|4|5 };
                      entriesRepo.update(updated);
                      setIsEditing(false);
                    }}
                    disabled={!editText.trim()}
                  >
                    Save
                  </button>
                  <button onClick={() => { setIsEditing(false); setEditText(entry.text); setEditMood(entry.mood); }}>
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 style={{ margin: "8px 0" }}>Your note</h2>
                <div style={{ whiteSpace: "pre-wrap" }}>{entry.text}</div>
                {entry.aiText && (
                  <>
                    <h2 style={{ margin: "16px 0 8px" }}>AI reflection</h2>
                    <div style={{ whiteSpace: "pre-wrap", background: "#fafafa", border: "1px solid #eee", borderRadius: 8, padding: 12 }}>
                      {entry.aiText}
                    </div>
                  </>
                )}
                <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                  <button onClick={() => setIsEditing(true)}>Edit</button>
                  <button
                    onClick={() => {
                      if (id && confirm("Delete this entry?")) {
                        entriesRepo.remove(id);
                        navigate("/history");
                      }
                    }}
                  >
                    Delete
                  </button>
                  <button onClick={() => navigate("/history")}>
                    Back to history
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
}