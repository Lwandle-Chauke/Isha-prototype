import { useState } from "react";
import { Play } from "lucide-react";

export function LiteYouTube({ id, title }: { id: string; title: string }) {
  const [on, setOn] = useState(false);
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink">
      {on ? (
        <iframe className="absolute inset-0 size-full" src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`} title={title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
      ) : (
        <button onClick={() => setOn(true)} className="group absolute inset-0" aria-label={`Play ${title}`}>
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={title} loading="lazy" className="size-full object-cover opacity-80 group-hover:opacity-100 transition" />
          <span className="absolute inset-0 grid place-items-center"><span className="bg-warm rounded-full p-4 shadow-lg"><Play className="size-6 text-accent-foreground" /></span></span>
        </button>
      )}
    </div>
  );
}
