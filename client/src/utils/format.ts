import dayjs from "dayjs";

export function formatDate(dateISO: string): string {
  return dayjs(dateISO).format("MMM D, YYYY");
}

export function formatTime(timeISO: string): string {
  return dayjs(timeISO).format("h:mm A");
}

export function moodToEmoji(mood: number): string {
  return ["😟","😕","😐","🙂","😄"][Math.max(1, Math.min(5, mood)) - 1];
}