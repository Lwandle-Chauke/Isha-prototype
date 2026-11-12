import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { CONTACT } from "@/lib/site-data";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Our Work" },
  { to: "/stories", label: "Stories" },
  { to: "/media", label: "Watch & Listen" },
  { to: "/contact", label: "Book Us" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 bg-ink/95 text-ink-foreground backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-extrabold tracking-tight">ISHA<span className="text-accent">.</span>media</Link>
          <nav className="hidden md:flex gap-6 text-sm">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="opacity-80 hover:opacity-100" activeProps={{ className: "text-accent opacity-100" }}>{n.label}</Link>
            ))}
          </nav>
          <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <nav className="md:hidden flex flex-col px-4 pb-4 gap-3">
            {NAV.map((n) => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-1">{n.label}</Link>)}
          </nav>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3 text-sm">
          <div><p className="font-display text-lg font-bold">Isha Awareness Theatre</p><p className="opacity-70 mt-2">Theatre, film, scripts & music. Black-owned, telling stories since 2006.</p></div>
          <div className="space-y-2">
            <a href={CONTACT.phoneHref} className="flex items-center gap-2"><Phone className="size-4" />{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2"><Mail className="size-4" />{CONTACT.email}</a>
          </div>
          <div className="opacity-70">© {new Date().getFullYear()} Isha Info. Videos & music hosted on YouTube and Spotify.</div>
        </div>
      </footer>
      <a href={CONTACT.phoneHref} className="md:hidden fixed bottom-4 right-4 z-50 bg-warm text-accent-foreground rounded-full px-5 py-3 font-semibold shadow-lg flex items-center gap-2"><Phone className="size-4" />Call</a>
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="bg-stage text-ink-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest">{eyebrow}</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-2">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl opacity-85">{intro}</p>}
      </div>
    </section>
  );
}

export const meta = (title: string, description: string) => [
  { title }, { name: "description", content: description },
  { property: "og:title", content: title }, { property: "og:description", content: description },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
];
