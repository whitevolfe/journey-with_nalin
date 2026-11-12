import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import {
  MessageCircle,
  Compass,
  Award,
  Users,
  MapPinned,
  Car,
  Plane,
  CalendarCheck,
  HeartHandshake,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { images, categories, packages, waLink, CONTACT, HERO_VIDEO } from "@/lib/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { DestinationCard } from "@/components/DestinationCard";
import { Tilt } from "@/components/Tilt";
import { Reveal } from "@/components/Reveal";

const Hero3D = lazy(() => import("@/components/Hero3D"));

const features = [
  { icon: Award, t: "Almost 10 Years of Experience" },
  { icon: Users, t: "100+ Happy Clients" },
  { icon: Compass, t: "Friendly Local Travel Expert" },
  { icon: Car, t: "Comfortable Private Transportation" },
  { icon: MapPinned, t: "Customized Tour Packages" },
  { icon: Plane, t: "Airport Pickup and Drop-off" },
  { icon: CalendarCheck, t: "Flexible Travel Plans" },
  { icon: HeartHandshake, t: "Personalized Customer Service" },
];

export default function Home() {
  usePageMeta(
    "Journey With Nalin — Discover Sri Lanka with a Local Expert",
    "Private Sri Lanka tours, wildlife safaris, beach holidays and airport transfers with Nalin — almost 10 years of experience and 100+ happy clients.",
  );
  const featured = [
    categories[0].items[0],
    categories[1].items[2],
    categories[2].items[1],
    categories[3].items[0],
  ];
  return (
    <>
      {/* HERO with video + 3D */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          poster={images.sigiriya}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pb-20 pt-32 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow animate-fade-up">Private Sri Lanka Tours</p>
            <h1 className="mt-4 animate-fade-up text-5xl font-semibold leading-[1.05] text-navy-foreground md:text-7xl">
              Discover the Beauty of <span className="text-gradient-brand italic">Sri Lanka</span>{" "}
              with Nalin
            </h1>
            <p
              className="mt-6 max-w-xl animate-fade-up text-lg text-navy-foreground/85"
              style={{ animationDelay: "150ms" }}
            >
              Explore Sri Lanka with a local travel expert. From golden beaches and ancient kingdoms
              to unforgettable wildlife safaris and breathtaking mountain landscapes, experience the
              island your way.
            </p>
            <div
              className="mt-8 flex animate-fade-up flex-wrap gap-4"
              style={{ animationDelay: "300ms" }}
            >
              <Link to="/destinations" className="btn-brand">
                Explore Destinations <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={waLink()} target="_blank" rel="noreferrer" className="btn-glass">
                <MessageCircle className="h-4 w-4" /> Book Your Journey – WhatsApp
              </a>
            </div>
            <div
              className="mt-10 flex animate-fade-up flex-wrap gap-3"
              style={{ animationDelay: "450ms" }}
            >
              {[
                "Almost 10 Years of Experience",
                "100+ Happy Clients",
                "Personalized Sri Lankan Tours",
              ].map((t) => (
                <span key={t} className="glass-card rounded-full px-4 py-2 text-sm font-semibold">
                  ✓ {t}
                </span>
              ))}
            </div>
          </div>
          <div className="relative hidden h-[520px] lg:block">
            <Suspense fallback={null}>
              <Hero3D />
            </Suspense>
          </div>
        </div>
      </section>

      {/* ABOUT teaser */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
        <Reveal>
          <Tilt max={8}>
            <div className="relative">
              <img
                src={images.kandy}
                alt="Kandy, Sri Lanka"
                loading="lazy"
                width={1200}
                height={912}
                className="rounded-3xl shadow-card"
              />
              <div
                className="absolute -bottom-6 -right-4 animate-float rounded-2xl bg-primary px-6 py-4 text-primary-foreground shadow-card"
                style={{ transform: "translateZ(60px)" }}
              >
                <p className="font-display text-3xl font-bold">~10</p>
                <p className="text-xs font-bold uppercase tracking-widest">Years guiding</p>
              </div>
            </div>
          </Tilt>
        </Reveal>
        <Reveal delay={150}>
          <p className="eyebrow">Meet Nalin</p>
          <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
            Your Local Travel Partner in Sri Lanka
          </h2>
          <p className="mt-5 text-muted-foreground">
            Hello! I'm Nalin, your friendly local travel partner in Sri Lanka. With almost 10 years
            of experience in tourism and more than 100 satisfied clients, I am passionate about
            helping travelers discover the beauty, culture, wildlife and hidden treasures of my
            beautiful island.
          </p>
          <Link to="/about" className="btn-outline-navy mt-8">
            More about Nalin <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* FEATURED destinations */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Explore Sri Lanka</p>
              <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
                Destinations & Experiences
              </h2>
            </div>
            <Link to="/destinations" className="btn-outline-navy">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((d, i) => (
              <Reveal key={d.name} delay={i * 100}>
                <DestinationCard d={d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="text-center">
          <p className="eyebrow">Why Travel With Nalin?</p>
          <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
            Travel the island with confidence
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, t }, i) => (
            <Reveal key={t} delay={i * 60}>
              <Tilt max={14}>
                <div className="h-full rounded-3xl border bg-card p-7 shadow-card">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{t}</h3>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PACKAGES strip */}
      <section className="bg-navy py-24 text-navy-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Popular Tour Packages</p>
              <h2 className="mt-3 text-4xl font-semibold text-navy-foreground md:text-5xl">
                Journeys loved by travellers
              </h2>
            </div>
            <Link to="/tours" className="btn-brand">
              All tours <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {packages.slice(0, 3).map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <Tilt>
                  <div className="group relative h-96 overflow-hidden rounded-3xl">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                    <div
                      className="absolute bottom-0 p-6"
                      style={{ transform: "translateZ(50px)" }}
                    >
                      <h3 className="text-2xl font-semibold text-navy-foreground">{p.name}</h3>
                      <p className="mt-1 text-sm text-navy-foreground/80">{p.desc}</p>
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <Reveal>
          <Instagram className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Follow Our Journey</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Watch travel reels, safari moments and island adventures with Nalin on Instagram.
          </p>
          <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="btn-brand mt-8">
            @journeywithnalin
          </a>
        </Reveal>
      </section>
    </>
  );
}
