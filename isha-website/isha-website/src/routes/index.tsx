import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-stage.jpg";
import { SERVICES, CLIENTS } from "@/lib/site-data";
import { meta } from "@/components/SiteShell";

export const Route = createFileRoute("/")({
  head: () => ({ meta: meta("Isha Awareness Theatre | Theatre, Film & Music in South Africa", "Corporate & industrial theatre, film production, scriptwriting and choir music. Black-owned South African media company since 2006.") }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <img src={hero} alt="Isha actors performing on stage" width={1600} height={912} fetchPriority="high" className="absolute inset-0 -z-10 size-full object-cover opacity-60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="mx-auto max-w-6xl px-4 pt-32 pb-20 md:pt-48 md:pb-28">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm">Isha Awareness Theatre · since 2006</p>
          <h1 className="mt-3 text-5xl md:text-7xl font-extrabold leading-[0.95] max-w-3xl">Stories that move <span className="text-warm">people.</span></h1>
          <p className="mt-5 max-w-xl text-lg opacity-90">Theatre, film, scripts and music — for your workplace, your brand, your stage.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg"><Link to="/contact">Book a show</Link></Button>
            <Button asChild variant="glass" size="lg"><Link to="/work">See our work</Link></Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold">What do you need?</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Link key={s.slug} to="/services" hash={s.slug} className="group rounded-2xl overflow-hidden bg-card border hover:-translate-y-1 transition">
              <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="aspect-[4/3] object-cover w-full" />
              <div className="p-4"><h3 className="font-bold">{s.title}</h3><p className="text-sm text-muted-foreground mt-1">{s.blurb}</p></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between gap-4"><h2 className="text-3xl md:text-4xl font-extrabold">Who we've worked with</h2><Link to="/work" className="text-primary font-semibold flex items-center gap-1">All work <ArrowRight className="size-4" /></Link></div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {CLIENTS.map((c) => (
              <Link key={c.slug} to="/work/$client" params={{ client: c.slug }} className="rounded-xl bg-card p-5 text-center font-display font-bold hover:bg-accent transition">{c.name}<span className="block text-xs font-sans font-normal text-muted-foreground mt-1">{c.sector}</span></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-3 gap-6 text-center">
        {[["2006", "Founded"], ["20 yrs", "Telling stories"], ["100%", "Black-owned"]].map(([n, l]) => (
          <div key={l}><p className="font-display text-5xl font-extrabold text-primary">{n}</p><p className="text-muted-foreground mt-1">{l}</p></div>
        ))}
      </section>
    </>
  );
}
