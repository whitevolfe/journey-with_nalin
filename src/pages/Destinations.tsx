import { useState } from "react";
import { categories, images } from "@/lib/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { PageHero } from "@/components/PageHero";
import { DestinationCard } from "@/components/DestinationCard";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export default function Destinations() {
  usePageMeta("Sri Lanka Destinations & Experiences — Journey With Nalin", "Sigiriya, Kandy, Ella, Yala safaris, Mirissa beaches, whale watching and more — book any experience via WhatsApp.");
  const [active, setActive] = useState(categories[0].id);
  const cat = categories.find((c) => c.id === active)!;
  return (
    <>
      <PageHero eyebrow="Explore Sri Lanka" title="Destinations & Experiences" text="Ancient kingdoms, wild safaris, misty hills and golden beaches — choose your adventure." img={images.sigiriya} />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button key={c.id} onClick={() => setActive(c.id)}
              className={cn("rounded-full px-5 py-2.5 text-sm font-bold transition-all", active === c.id ? "bg-navy text-navy-foreground shadow-card" : "bg-secondary text-navy hover:bg-border")}>
              {c.title}
            </button>
          ))}
        </div>
        <div key={active} className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cat.items.map((d, i) => <Reveal key={d.name} delay={i * 60}><DestinationCard d={d} /></Reveal>)}
        </div>
      </section>
    </>
  );
}
