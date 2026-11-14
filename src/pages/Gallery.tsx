import { useState } from "react";
import { X } from "lucide-react";
import nalinimg1 from "@/assets/nalinimg1.jpeg";
import nalinimg2 from "@/assets/nalinimg2.jpeg";
import nalinimg3 from "@/assets/nalinimg3.jpeg";
import nalinimg4 from "@/assets/nalinimg4.jpeg";
import nalinimg5 from "@/assets/nalinimg5.jpeg";
import nalinimg6 from "@/assets/nalinimg6.jpeg";
import nalinimg7 from "@/assets/nalinimg7.jpeg";
import nalinimg8 from "@/assets/nalinimg8.jpeg";
import nalinimg9 from "@/assets/nalinimg9.jpeg";
import nalinimg10 from "@/assets/nalinimg10.jpeg";
import nalinimg14 from "@/assets/nalinimg14.jpeg";
import nalinimg15 from "@/assets/nalinimg15.jpeg";
import nalinimg16 from "@/assets/nalinimg16.jpeg";
import nalinimg17 from "@/assets/nalinimg17.jpeg";
import nalinimg18 from "@/assets/nalinimg18.jpeg";
import nalinimg20 from "@/assets/nalinimg20.jpeg";
import nalinimg21 from "@/assets/nalinimg21.jpeg";
import nalinimg22 from "@/assets/nalinimg22.jpeg";
import nalinimg24 from "@/assets/nalinimg24.jpeg";
import nalinimg25 from "@/assets/nalinimg25.jpeg";
import nalinimg26 from "@/assets/nalinimg26.jpeg";
import nalinimg27 from "@/assets/nalinimg27.jpeg";
import nalinimg28 from "@/assets/nalinimg28.jpeg";
import nalinimg29 from "@/assets/nalinimg29.jpeg";
import { images } from "@/lib/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

const shots = [
  { src: nalinimg1, alt: "Journey With Nalin portrait" },
  { src: nalinimg2, alt: "Journey With Nalin portrait" },
  { src: nalinimg3, alt: "Journey With Nalin travel photo 3" },
  { src: nalinimg4, alt: "Journey With Nalin travel photo 4" },
  { src: nalinimg5, alt: "Journey With Nalin travel photo 5" },
  { src: nalinimg6, alt: "Journey With Nalin travel photo 6" },
  { src: nalinimg7, alt: "Journey With Nalin travel photo 7" },
  { src: nalinimg8, alt: "Journey With Nalin travel photo 8" },
  { src: nalinimg9, alt: "Journey With Nalin travel photo 9" },
  { src: nalinimg10, alt: "Journey With Nalin travel photo 10" },
  { src: nalinimg14, alt: "Journey With Nalin travel photo 14" },
  { src: nalinimg15, alt: "Journey With Nalin travel photo 15" },
  { src: nalinimg16, alt: "Journey With Nalin travel photo 16" },
  { src: nalinimg17, alt: "Journey With Nalin travel photo 17" },
  { src: nalinimg18, alt: "Journey With Nalin travel photo 18" },
  { src: nalinimg20, alt: "Journey With Nalin travel photo 20" },
  { src: nalinimg21, alt: "Journey With Nalin travel photo 21" },
  { src: nalinimg22, alt: "Journey With Nalin travel photo 22" },
  { src: nalinimg24, alt: "Journey With Nalin travel photo 24" },
  { src: nalinimg25, alt: "Journey With Nalin travel photo 25" },
  { src: nalinimg26, alt: "Journey With Nalin travel photo 26" },
  { src: nalinimg27, alt: "Journey With Nalin travel photo 27" },
  { src: nalinimg28, alt: "Journey With Nalin travel photo 28" },
  { src: nalinimg29, alt: "Journey With Nalin travel photo 29" },
  { src: images.sigiriya, alt: "Sigiriya at sunrise" },
  { src: images.beach, alt: "Mirissa beach" },
  { src: images.safari, alt: "Elephants at Minneriya" },
  { src: images.ella, alt: "Nine Arch Bridge, Ella" },
  { src: images.kandy, alt: "Temple of the Tooth, Kandy" },
  { src: images.whale, alt: "Whale watching, Mirissa" },
  { src: images.galle, alt: "Galle lighthouse" },
  { src: images.polonnaruwa, alt: "Gal Vihara, Polonnaruwa" },
];

export default function Gallery() {
  usePageMeta(
    "Sri Lanka Travel Gallery — Journey With Nalin",
    "Beaches, elephants, Sigiriya, hill country, temples and safari moments from across Sri Lanka.",
  );
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from the island"
        text="A glimpse of what awaits you in Sri Lanka."
        img={images.beach}
      />
      <section className="mx-auto max-w-7xl columns-1 gap-6 px-6 py-20 sm:columns-2 lg:columns-3">
        {shots.map((s, i) => (
          <Reveal key={i} delay={(i % 3) * 100} className="mb-6 break-inside-avoid">
            <button
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-3xl shadow-card"
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/3]"}`}
              />
            </button>
          </Reveal>
        ))}
      </section>
      {open !== null && (
        <div
          role="dialog"
          aria-label={shots[open].alt}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/90 p-6 backdrop-blur"
        >
          <button aria-label="Close" className="absolute right-6 top-6 text-navy-foreground">
            <X className="h-8 w-8" />
          </button>
          <img
            src={shots[open].src}
            alt={shots[open].alt}
            className="max-h-[85vh] animate-fade-up rounded-2xl"
          />
        </div>
      )}
    </>
  );
}
