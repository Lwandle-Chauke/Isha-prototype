import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/site-data";
import { PageHeader, meta } from "@/components/SiteShell";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: meta("Services | Isha Awareness Theatre", "Corporate & industrial theatre, film and video production, scriptwriting and script editing, music and choir performances.") }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHeader eyebrow="Services" title="Pick what you need. We'll make it happen." intro="Want us to shoot your film, edit your script, or bring a live show to your staff? Start here." />
      <div className="mx-auto max-w-6xl px-4 py-16 space-y-16">
        {SERVICES.map((s, i) => (
          <section key={s.slug} id={s.slug} className={`grid md:grid-cols-2 gap-8 items-center scroll-mt-24 ${i % 2 ? "md:[&>img]:order-2" : ""}`}>
            <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="rounded-3xl aspect-[4/3] object-cover w-full" />
            <div>
              <h2 className="text-3xl font-extrabold">{s.title}</h2>
              <p className="mt-3 text-muted-foreground text-lg">{s.blurb}</p>
              <Button asChild variant="hero" className="mt-6"><Link to="/contact" search={{ service: s.title }}>Request this</Link></Button>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
