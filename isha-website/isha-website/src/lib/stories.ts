import { useEffect, useState } from "react";
import choir from "@/assets/choir.jpg";
import stage from "@/assets/hero-stage.jpg";
import film from "@/assets/film.jpg";

export type Story = { id: string; title: string; author: string; category: string; date: string; excerpt: string; body: string; image?: string };

export const SEED_STORIES: Story[] = [
  { id: "dakalo-award", title: "Dakalo takes home the award", author: "Isha Team", category: "News", date: "2026-10-28", image: stage, excerpt: "Our very own Dakalo was honoured for outstanding performance this season.", body: "Our very own Dakalo was honoured for outstanding performance this season. The award recognises years of work on stage with Isha, touring workplaces across the country and bringing difficult conversations to life.\n\nCongratulations from the whole Isha family!" },
  { id: "choir-writer", title: "From the choir: why I write", author: "Choir member", category: "Voices", date: "2026-10-10", image: choir, excerpt: "One of our choir members shares how singing led to writing songs of her own.", body: "When I joined the choir I only wanted to sing. Then the words started coming. Isha gave me a place to share them — and now I'm writing for our next production." },
  { id: "press-feature", title: "In the press: theatre that changes workplaces", author: "Press clipping", category: "Press", date: "2026-09-02", image: film, excerpt: "A recent newspaper feature on how Isha uses drama to tackle workplace challenges.", body: "A recent newspaper feature looked at how Isha Awareness Theatre, started in 2006, uses drama instead of memos and emails to get real messages across at work." },
];

const KEY = "isha-stories";
export function useStories() {
  const [stories, setStories] = useState<Story[]>(SEED_STORIES);
  useEffect(() => {
    try { const extra = JSON.parse(localStorage.getItem(KEY) || "[]") as Story[]; setStories([...extra, ...SEED_STORIES]); } catch { /* ignore */ }
  }, []);
  const add = (s: Omit<Story, "id" | "date">) => {
    const story: Story = { ...s, id: `${Date.now()}`, date: new Date().toISOString().slice(0, 10) };
    const extra = JSON.parse(localStorage.getItem(KEY) || "[]") as Story[];
    localStorage.setItem(KEY, JSON.stringify([story, ...extra]));
    setStories((p) => [story, ...p]);
  };
  return { stories, add };
}
