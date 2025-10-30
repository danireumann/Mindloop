import dayjs from "dayjs";
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
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch (err) {
    console.error("Failed to write entries to localStorage:", err);
  }
}

export const entriesRepo = {
  listAll(): Entry[] {
    return readAll().sort((a, b) => a.dateISO.localeCompare(b.dateISO));
  },

  listByMonth(year: number, month0: number): Entry[] {
    const targetKey = `${year}-${String(month0 + 1).padStart(2, "0")}`; // e.g., 2025-10
    return readAll()
      .filter((e) => (e.dateISO || "").slice(0, 7) === targetKey)
      .sort((a, b) => a.dateISO.localeCompare(b.dateISO));
  },

  get(id: string): Entry | undefined {
    return readAll().find((e) => e.id === id);
  },

  add(entry: Entry): void {
    const all = readAll();
    all.push(entry);
    writeAll(all);
  },

  update(entry: Entry): void {
    const all = readAll().map((e) => (e.id === entry.id ? entry : e));
    writeAll(all);
  },

  remove(id: string): void {
    const all = readAll().filter((e) => e.id !== id);
    writeAll(all);
  },
};