import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useStories } from "@/lib/stories";
import { PageHeader, meta } from "@/components/SiteShell";

export const Route = createFileRoute("/stories/")({
  head: () => ({ meta: meta("Isha Stories | News, Voices & Press", "News, awards, press clippings and personal stories from the Isha Awareness Theatre family.") }),
  component: Stories,
});

const CATS = ["All", "News", "Voices", "Press"];
const field = "w-full rounded-xl border bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring";

function Stories() {
  const { stories, add } = useStories();
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState(false);
  const list = cat === "All" ? stories : stories.filter((s) => s.category === cat);
  return (
    <>
      <PageHeader eyebrow="Isha Stories" title="Our newspaper." intro="Awards, press, behind-the-scenes and stories from our people. Got one? Share it." />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-wrap items-center gap-2">
          {CATS.map((c) => <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-sm font-semibold border ${cat === c ? "bg-primary text-primary-foreground border-primary" : "bg-card"}`}>{c}</button>)}
          <Button variant="hero" className="ml-auto" onClick={() => setOpen(!open)}>{open ? "Close" : "+ Share a story"}</Button>
        </div>
        {open && (
          <form className="mt-6 grid gap-3 rounded-3xl bg-secondary p-6" onSubmit={(e) => {
            e.preventDefault(); const f = new FormData(e.currentTarget);
            const body = String(f.get("body"));
            add({ title: String(f.get("title")), author: String(f.get("author")), category: String(f.get("category")), body, excerpt: body.slice(0, 140) });
            setOpen(false);
          }}>
            <input required name="title" placeholder="Headline" className={field} />
            <div className="grid sm:grid-cols-2 gap-3"><input required name="author" placeholder="Your name" className={field} /><select name="category" className={field}>{CATS.slice(1).map((c) => <option key={c}>{c}</option>)}</select></div>
            <textarea required name="body" rows={5} placeholder="Your story…" className={field} />
            <Button type="submit" variant="default">Publish</Button>
          </form>
        )}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s) => (
            <Link key={s.id} to="/stories/$id" params={{ id: s.id }} className="group rounded-3xl overflow-hidden bg-card border hover:-translate-y-1 transition">
              {s.image ? <img src={s.image} alt={s.title} loading="lazy" width={1024} height={768} className="aspect-[16/10] object-cover w-full" /> : <div className="aspect-[16/10] bg-stage" />}
              <div className="p-5"><p className="text-xs font-semibold uppercase tracking-widest text-highlight">{s.category} · {s.date}</p><h2 className="text-xl font-extrabold mt-1">{s.title}</h2><p className="text-sm text-muted-foreground mt-2">{s.excerpt}</p></div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
