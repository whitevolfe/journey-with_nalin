import { MessageCircle, Check } from "lucide-react";
import { packages, images, waLink } from "@/lib/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { PageHero } from "@/components/PageHero";
import { Tilt } from "@/components/Tilt";
import { Reveal } from "@/components/Reveal";

export default function Tours() {
  usePageMeta("Sri Lanka Tour Packages — Journey With Nalin", "Cultural Triangle, wildlife safaris, Ella hill country, southern beaches and complete round tours. Request a custom quote on WhatsApp.");
  return (
    <>
      <PageHero eyebrow="Popular Tour Packages" title="Tours made around you" text="Every tour is private and flexible. Message Nalin for a customized quotation." img={images.ella} />
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-2">
        {packages.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 120}>
            <Tilt max={7}>
              <article className="group grid h-full overflow-hidden rounded-3xl bg-card shadow-card sm:grid-cols-[1fr_1.2fr]">
                <div className="relative min-h-56 overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex flex-col p-7" style={{ transform: "translateZ(30px)" }}>
                  <h3 className="text-2xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <ul className="mt-4 flex-1 space-y-1.5 text-sm">
                    {p.highlights.map((h) => <li key={h} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />{h}</li>)}
                  </ul>
                  <a href={waLink(p.name)} target="_blank" rel="noreferrer" className="btn-brand mt-6 self-start !py-2.5 text-sm">
                    <MessageCircle className="h-4 w-4" /> Request a Quote
                  </a>
                </div>
              </article>
            </Tilt>
          </Reveal>
        ))}
      </section>
    </>
  );
}
