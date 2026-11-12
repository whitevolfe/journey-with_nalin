export function PageHero({
  eyebrow,
  title,
  text,
  img,
}: {
  eyebrow: string;
  title: string;
  text: string;
  img: string;
}) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden">
      <img
        src={img}
        alt=""
        className="absolute inset-0 h-full w-full scale-105 object-cover"
        width={1600}
        height={912}
      />
      <div className="bg-hero-overlay absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-40">
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl animate-fade-up text-4xl font-semibold text-navy-foreground md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl animate-fade-up text-lg text-navy-foreground/85">{text}</p>
      </div>
    </section>
  );
}
