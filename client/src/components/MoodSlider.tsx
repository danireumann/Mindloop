import { moodToEmoji } from "../utils/format";

export function MoodSlider(props: { value: number; onChange: (v: number) => void }) {
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <label htmlFor="mood">Mood: {moodToEmoji(props.value)} ({props.value})</label>
      <input
        id="mood"
        type="range"
        min={1}
        max={5}
        step={1}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
      />
    </div>
  );
}