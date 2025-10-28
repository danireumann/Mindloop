import type { Entry } from "../types/entry";

const STORAGE_KEY = "mindloop.entries";

function readAll(): Entry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Entry[]) : [];
  } catch {
    return [];
  }
}

function writeAll(entries: Entry[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export const entriesRepo = {
  listByMonth(year: number, month0: number): Entry[] {
    return readAll()
      .filter(e => {
        const d = new Date(e.dateISO);
        return d.getFullYear() === year && d.getMonth() === month0;
      })
      .sort((a, b) => a.dateISO.localeCompare(b.dateISO));
  },
  get(id: string): Entry | undefined {
    return readAll().find(e => e.id === id);
  },
  add(entry: Entry): void {
    const all = readAll();
    all.push(entry);
    writeAll(all);
  },
  update(entry: Entry): void {
    const all = readAll().map(e => (e.id === entry.id ? entry : e));
    writeAll(all);
  }
};