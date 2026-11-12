import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CLIENTS } from "@/lib/site-data";
import { PageHeader, meta } from "@/components/SiteShell";

export const Route = createFileRoute("/work/$client")({
  loader: ({ params }) => { const c = CLIENTS.find((x) => x.slug === params.client); if (!c) throw notFound(); return c; },
  head: ({ loaderData }) => ({ meta: loaderData ? meta(`${loaderData.name} | Isha Work Gallery`, `${loaderData.project} — photos from Isha Awareness Theatre's work for ${loaderData.name}.`) : [{ title: "Not found" }, { name: "robots", content: "noindex" }] }),
  component: ClientPage,
});

function ClientPage() {
  const c = Route.useLoaderData();
  return (
    <>
      <PageHeader eyebrow={c.sector} title={c.name} intro={c.project} />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Link to="/work" className="text-primary font-semibold inline-flex items-center gap-1"><ArrowLeft className="size-4" />All clients</Link>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.photos.map((p, i) => <img key={i} src={p} alt={`${c.name} project photo ${i + 1}`} loading="lazy" width={1024} height={768} className="rounded-2xl aspect-[4/3] object-cover w-full" />)}
        </div>
      </div>
    </>
  );
}
