export type Mood = 1 | 2 | 3 | 4 | 5;

export interface Entry {
  id: string;
  dateISO: string;
  timeISO: string;
  mood: Mood;
  text: string;
  aiText: string;
}