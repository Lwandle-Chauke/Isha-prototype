import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useStories, SEED_STORIES } from "@/lib/stories";
import { meta } from "@/components/SiteShell";

export const Route = createFileRoute("/stories/$id")({
  head: ({ params }) => { const s = SEED_STORIES.find((x) => x.id === params.id); return { meta: meta(s ? `${s.title} | Isha Stories` : "Isha Stories", s?.excerpt ?? "A story from the Isha Awareness Theatre family.") }; },
  component: StoryPage,
});

function StoryPage() {
  const { id } = Route.useParams();
  const { stories } = useStories();
  const s = stories.find((x) => x.id === id);
  if (!s) return <div className="mx-auto max-w-3xl px-4 py-24 text-center"><p>Story not found.</p><Link to="/stories" className="text-primary font-semibold">Back to stories</Link></div>;
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Link to="/stories" className="text-primary font-semibold inline-flex items-center gap-1"><ArrowLeft className="size-4" />All stories</Link>
      <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-highlight">{s.category} · {s.date} · {s.author}</p>
      <h1 className="text-4xl md:text-5xl font-extrabold mt-2">{s.title}</h1>
      {s.image && <img src={s.image} alt={s.title} width={1024} height={768} className="mt-8 rounded-3xl w-full aspect-[16/9] object-cover" />}
      <div className="mt-8 space-y-4 text-lg leading-relaxed">{s.body.split("\n").filter(Boolean).map((p, i) => <p key={i}>{p}</p>)}</div>
    </article>
  );
}
