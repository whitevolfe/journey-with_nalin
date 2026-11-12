import { useState } from "react";
import { X } from "lucide-react";
import nalinimg2 from "@/assets/nalinimg2.jpeg";
import nalinimg5 from "@/assets/nalinimg5.jpeg";
import { images } from "@/lib/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

const shots = [
  { src: nalinimg2, alt: "Journey With Nalin portrait" },
  { src: nalinimg5, alt: "Journey With Nalin portrait" },
  { src: images.sigiriya, alt: "Sigiriya at sunrise" }, { src: images.beach, alt: "Mirissa beach" },
  { src: images.safari, alt: "Elephants at Minneriya" }, { src: images.ella, alt: "Nine Arch Bridge, Ella" },
  { src: images.kandy, alt: "Temple of the Tooth, Kandy" }, { src: images.whale, alt: "Whale watching, Mirissa" },
  { src: images.galle, alt: "Galle lighthouse" }, { src: images.polonnaruwa, alt: "Gal Vihara, Polonnaruwa" },
];

export default function Gallery() {
  usePageMeta("Sri Lanka Travel Gallery — Journey With Nalin", "Beaches, elephants, Sigiriya, hill country, temples and safari moments from across Sri Lanka.");
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <PageHero eyebrow="Gallery" title="Moments from the island" text="A glimpse of what awaits you in Sri Lanka." img={images.beach} />
      <section className="mx-auto max-w-7xl columns-1 gap-6 px-6 py-20 sm:columns-2 lg:columns-3">
        {shots.map((s, i) => (
          <Reveal key={i} delay={(i % 3) * 100} className="mb-6 break-inside-avoid">
            <button onClick={() => setOpen(i)} className="group block w-full overflow-hidden rounded-3xl shadow-card">
              <img src={s.src} alt={s.alt} loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/3]"}`} />
            </button>
          </Reveal>
        ))}
      </section>
      {open !== null && (
        <div role="dialog" aria-label={shots[open].alt} onClick={() => setOpen(null)} className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/90 p-6 backdrop-blur">
          <button aria-label="Close" className="absolute right-6 top-6 text-navy-foreground"><X className="h-8 w-8" /></button>
          <img src={shots[open].src} alt={shots[open].alt} className="max-h-[85vh] animate-fade-up rounded-2xl" />
        </div>
      )}
    </>
  );
}
