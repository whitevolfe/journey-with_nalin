import { MessageCircle, Award, Users, Compass, HeartHandshake } from "lucide-react";
import { images, waLink } from "@/lib/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { PageHero } from "@/components/PageHero";
import { Tilt } from "@/components/Tilt";
import { Reveal } from "@/components/Reveal";

export default function About() {
  usePageMeta(
    "About Nalin — Your Local Travel Partner in Sri Lanka",
    "Meet Nalin, a friendly Sri Lankan travel guide with almost 10 years of experience and more than 100 satisfied clients.",
  );
  const stats = [
    { icon: Award, t: "Almost 10 Years of Experience" },
    { icon: Users, t: "100+ Happy Clients" },
    { icon: Compass, t: "Personalized Travel Experiences" },
    { icon: HeartHandshake, t: "Friendly Local Service" },
  ];
  return (
    <>
      <PageHero
        eyebrow="About Nalin"
        title="Your Local Travel Partner in Sri Lanka"
        text="Friendly, experienced and passionate about sharing my island with you."
        img={images.kandy}
      />
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
        <Reveal>
          <Tilt max={8}>
            <img
              src={images.nalinprofile}
              alt="Polonnaruwa ancient city"
              loading="lazy"
              width={1200}
              height={912}
              className="rounded-3xl shadow-card"
            />
          </Tilt>
        </Reveal>
        <Reveal delay={150} className="space-y-5 text-muted-foreground">
          <h2 className="text-4xl font-semibold">Hello! I'm Nalin</h2>
          <p>
            Hello! I'm Nalin, your friendly local travel partner in Sri Lanka. With almost 10 years
            of experience in tourism and more than 100 satisfied clients, I am passionate about
            helping travelers discover the beauty, culture, wildlife and hidden treasures of my
            beautiful island.
          </p>
          <p>
            Whether you are looking for an airport pickup, a wildlife safari, a relaxing beach
            holiday or a complete Sri Lankan adventure, I'm here to make your journey comfortable,
            memorable and special.
          </p>
          <p className="font-display text-2xl italic text-navy">
            Let's explore Sri Lanka together!
          </p>
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-whatsapp">
            <MessageCircle className="h-4 w-4" /> Chat with Nalin
          </a>
        </Reveal>
      </section>
      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, t }, i) => (
            <Reveal key={t} delay={i * 80}>
              <Tilt max={14}>
                <div className="h-full rounded-3xl bg-card p-8 text-center shadow-card">
                  <Icon
                    className="mx-auto h-10 w-10 text-primary"
                    style={{ transform: "translateZ(40px)" }}
                  />
                  <h3 className="mt-4 text-lg font-semibold">{t}</h3>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
