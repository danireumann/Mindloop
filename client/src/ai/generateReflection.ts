export async function generateReflection(input: { text: string; mood: number; dateISO: string }): Promise<string> {
  const { text, mood } = input;
  const moodTone = ["low","low","neutral","positive","positive"][Math.max(1, Math.min(5, mood)) - 1];
  const trimmed = text.trim();
  const snippet = trimmed.length > 160 ? trimmed.slice(0, 160) + "..." : trimmed || "your day";
  return Promise.resolve(
    `Thanks for sharing. It sounds like a ${moodTone} day. Here’s a gentle reflection:\n\n` +
    `- What felt most meaningful today?\n- What small action could help tomorrow?\n\n` +
    `Summary: ${snippet}`
  );
}