import { createFileRoute } from "@tanstack/react-router";
import { YOUTUBE, SPOTIFY_EMBED } from "@/lib/site-data";
import { LiteYouTube } from "@/components/LiteYouTube";
import { PageHeader, meta } from "@/components/SiteShell";

export const Route = createFileRoute("/media")({
  head: () => ({ meta: meta("Watch & Listen | Isha Awareness Theatre", "Watch Isha's films and performances on YouTube and listen to Isha music on Spotify.") }),
  component: Media,
});

function Media() {
  return (
    <>
      <PageHeader eyebrow="Watch & Listen" title="Our films and music" intro="Streamed straight from our official YouTube and Spotify — full quality, no waiting." />
      <div className="mx-auto max-w-6xl px-4 py-16 space-y-12">
        <div className="grid gap-6 md:grid-cols-2">{YOUTUBE.map((v) => <div key={v.id}><LiteYouTube {...v} /><p className="mt-2 font-semibold">{v.title}</p></div>)}</div>
        <div><h2 className="text-2xl font-extrabold mb-4">On Spotify</h2><iframe src={SPOTIFY_EMBED} title="Isha on Spotify" loading="lazy" className="w-full h-[352px] rounded-2xl" allow="encrypted-media" /></div>
      </div>
    </>
  );
}
