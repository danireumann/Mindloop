import { Link } from "react-router-dom";
import { Entry } from "../types/entry";
import { formatDate, moodToEmoji } from "../utils/format";

export function EntryListItem({ entry }: { entry: Entry }) {
  return (
    <Link to={`/day/${entry.id}`} style={{ display: "block", padding: "12px 8px", borderBottom: "1px solid #eee", color: "inherit", textDecoration: "none" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div style={{ flex: 1, overflow: "hidden", display: "grid", gap: 4 }}>
          <div style={{ fontWeight: 600 }}>{formatDate(entry.dateISO)}</div>
          <div style={{ color: "#666", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
            {entry.text}
          </div>
        </div>
        <div style={{ fontSize: 20 }}>{moodToEmoji(entry.mood)}</div>
      </div>
    </Link>
  );
}