import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, SERVICES } from "@/lib/site-data";
import { PageHeader, meta } from "@/components/SiteShell";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: { service?: unknown }): { service?: string } => (typeof s.service === "string" ? { service: s.service } : {}),
  head: () => ({ meta: meta("Book Isha | Contact Isha Awareness Theatre", "Book a corporate theatre show, film shoot, script service or choir. Call 011 867 0988 or send a booking request.") }),
  component: Contact,
});

const field = "w-full rounded-xl border bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring";

function Contact() {
  const { service } = Route.useSearch();
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader eyebrow="Book Us" title="Let's make something." intro="Call, WhatsApp, or send a booking request — we'll get back to you within a day." />
      <div className="mx-auto max-w-6xl px-4 py-16 grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-3">
          <a href={CONTACT.phoneHref} className="flex items-center gap-3 rounded-2xl bg-secondary p-5 font-semibold"><Phone className="text-primary" />{CONTACT.phone}</a>
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-secondary p-5 font-semibold"><MessageCircle className="text-primary" />WhatsApp us</a>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 rounded-2xl bg-secondary p-5 font-semibold"><Mail className="text-primary" />{CONTACT.email}</a>
        </div>
        {sent ? (
          <div className="rounded-3xl bg-card border p-10 text-center"><CheckCircle2 className="mx-auto size-12 text-primary" /><h2 className="text-2xl font-extrabold mt-4">Request received!</h2><p className="text-muted-foreground mt-2">We'll be in touch shortly.</p></div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4 rounded-3xl bg-card border p-6">
            <h2 className="text-2xl font-extrabold">Booking request</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input required name="name" placeholder="Your name" className={field} />
              <input required name="phone" type="tel" placeholder="Phone" className={field} />
            </div>
            <input required name="email" type="email" placeholder="Email" className={field} />
            <select name="service" defaultValue={service ?? ""} className={field}>
              <option value="">What do you need?</option>
              {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
            </select>
            <input name="date" type="date" className={field} aria-label="Preferred date" />
            <textarea name="message" rows={4} placeholder="Tell us about your event or project" className={field} />
            <Button type="submit" variant="hero" size="lg">Send request</Button>
          </form>
        )}
      </div>
    </>
  );
}
