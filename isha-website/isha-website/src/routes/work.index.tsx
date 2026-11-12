import { createFileRoute, Link } from "@tanstack/react-router";
import { CLIENTS } from "@/lib/site-data";
import { PageHeader, meta } from "@/components/SiteShell";

export const Route = createFileRoute("/work/")({
  head: () => ({ meta: meta("Our Work & Clients | Isha Awareness Theatre", "See photos of Isha's theatre, film and music projects for clients like PetroSA.") }),
  component: Work,
});

function Work() {
  return (
    <>
      <PageHeader eyebrow="Our Work" title="Tap a client. See what we did." />
      <div className="mx-auto max-w-6xl px-4 py-16 grid gap-6 sm:grid-cols-2">
        {CLIENTS.map((c) => (
          <Link key={c.slug} to="/work/$client" params={{ client: c.slug }} className="group relative rounded-3xl overflow-hidden">
            <img src={c.photos[0]} alt={c.project} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
            <div className="absolute bottom-0 p-6 text-ink-foreground"><p className="text-accent text-xs uppercase tracking-widest">{c.sector}</p><h2 className="text-2xl font-extrabold">{c.name}</h2><p className="opacity-85 text-sm">{c.project}</p></div>
          </Link>
        ))}
      </div>
    </>
  );
}
