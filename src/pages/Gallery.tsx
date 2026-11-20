import { useState } from "react";
import { X } from "lucide-react";
import { images } from "@/lib/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

// Automatically load available Nalin gallery images
const galleryModules = import.meta.glob("/src/assets/nalinimg*.jpeg", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

// Sort images numerically: 1, 2, 3 ... 29
const nalinPhotos = Object.entries(galleryModules)
  .sort((a, b) => {
    const getNumber = (path: string) => Number(path.match(/nalinimg(\d+)\.jpeg$/)?.[1] ?? 0);

    return getNumber(a[0]) - getNumber(b[0]);
  })
  .map(([path, src]) => {
    const number = path.match(/nalinimg(\d+)\.jpeg$/)?.[1];

    return {
      src,
      alt: `Journey With Nalin travel photo ${number}`,
    };
  });

// Complete gallery
const shots = [
  ...nalinPhotos,
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
          <Reveal key={s.src} delay={(i % 3) * 100} className="mb-6 break-inside-avoid">
            <button
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-3xl shadow-card"
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              />
            </button>
          </Reveal>
        ))}
      </section>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={shots[open].alt}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/90 p-6 backdrop-blur"
        >
          <button
            aria-label="Close"
            onClick={() => setOpen(null)}
            className="absolute right-6 top-6 text-navy-foreground"
          >
            <X className="h-8 w-8" />
          </button>

          <img
            src={shots[open].src}
            alt={shots[open].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full animate-fade-up rounded-2xl object-contain"
          />
        </div>
      )}
    </>
  );
}
