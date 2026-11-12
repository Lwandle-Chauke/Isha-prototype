import corporate from "@/assets/corporate.jpg";
import choir from "@/assets/choir.jpg";
import film from "@/assets/film.jpg";
import stage from "@/assets/hero-stage.jpg";

export const CONTACT = { phone: "011 867 0988", phoneHref: "tel:+27118670988", email: "support@ishainfo.co.za", whatsapp: "https://wa.me/27118670988" };

export const SERVICES = [
  { slug: "corporate-theatre", title: "Corporate & Industrial Theatre", img: corporate, blurb: "Safety, wellness and change messages your staff actually remember — performed live at your workplace." },
  { slug: "film", title: "Film & Video Production", img: film, blurb: "From concept to final cut: shoots, edits and campaign films in 4K." },
  { slug: "scripts", title: "Scriptwriting & Script Editing", img: stage, blurb: "Bring us an idea or a draft. We write, polish and develop scripts for stage and screen." },
  { slug: "music", title: "Music & Choir", img: choir, blurb: "Original music, choir performances and studio-quality recordings for events and brands." },
];

export type Client = { slug: string; name: string; sector: string; project: string; photos: string[] };
export const CLIENTS: Client[] = [
  { slug: "petrosa", name: "PetroSA", sector: "Energy", project: "Industrial safety theatre roadshow", photos: [corporate, stage, film] },
  { slug: "mining-client", name: "Mining Client (placeholder)", sector: "Mining", project: "HIV & wellness awareness drama", photos: [stage, corporate] },
  { slug: "municipality", name: "Municipality (placeholder)", sector: "Public sector", project: "Community service-delivery campaign film", photos: [film, choir] },
  { slug: "retail-client", name: "Retail Client (placeholder)", sector: "Retail", project: "Year-end staff function: choir & theatre", photos: [choir, stage] },
];

export type Video = { id: string; title: string };
export const YOUTUBE: Video[] = [
  { id: "dQw4w9WgXcQ", title: "Showreel (replace with Isha's YouTube video)" },
  { id: "jNQXAC9IVRw", title: "Behind the scenes (replace)" },
];
export const SPOTIFY_EMBED = "https://open.spotify.com/embed/playlist/37i9dQZF1DXbYM3nMM0oPk";
