import { useState, type FormEvent } from "react";
import { MessageCircle, Phone, Mail, MapPin, Instagram } from "lucide-react";
import { CONTACT, images, waLink } from "@/lib/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { PageHero } from "@/components/PageHero";
import { Tilt } from "@/components/Tilt";

export default function Contact() {
  usePageMeta("Contact & Book — Journey With Nalin", "Book your Sri Lanka tour on WhatsApp +94 77 803 3914, by phone or email. Based in Andiambalama near Colombo Airport.");
  const [form, setForm] = useState({ name: "", email: "", dates: "", message: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hello Nalin! My name is ${form.name} (${form.email}).\nTravel dates: ${form.dates || "flexible"}\n\n${form.message}`;
    window.open(`https://wa.me/94778033914?text=${encodeURIComponent(text)}`, "_blank");
  };
  const cards = [
    { icon: MessageCircle, label: "WhatsApp", value: CONTACT.phone, href: waLink() },
    { icon: Phone, label: "Call", value: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}` },
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Instagram, label: "Instagram", value: "@journeywithnalin", href: CONTACT.instagram },
  ];
  const input = "w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring";
  return (
    <>
      <PageHero eyebrow="Contact & Booking" title="Let's plan your journey" text="Message Nalin on WhatsApp for the fastest reply." img={images.galle} />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ icon: Icon, label, value, href }) => (
          <Tilt key={label} max={14}>
            <a href={href} target="_blank" rel="noreferrer" className="block h-full rounded-3xl bg-card p-7 shadow-card transition-colors hover:bg-secondary">
              <Icon className="h-8 w-8 text-primary" />
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
              <p className="mt-1 break-all font-semibold text-navy">{value}</p>
            </a>
          </Tilt>
        ))}
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 lg:grid-cols-2">
        <form onSubmit={submit} className="space-y-4 rounded-3xl bg-secondary p-8">
          <h2 className="text-3xl font-semibold">Send an enquiry</h2>
          <label className="block text-sm font-semibold">Your name<input required className={`${input} mt-1`} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
          <label className="block text-sm font-semibold">Email<input required type="email" className={`${input} mt-1`} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
          <label className="block text-sm font-semibold">Travel dates<input className={`${input} mt-1`} placeholder="e.g. 10–20 March" value={form.dates} onChange={(e) => setForm({ ...form, dates: e.target.value })} /></label>
          <label className="block text-sm font-semibold">Message<textarea required rows={5} className={`${input} mt-1`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></label>
          <button type="submit" className="btn-whatsapp"><MessageCircle className="h-4 w-4" /> Send via WhatsApp</button>
        </form>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 rounded-3xl bg-card p-6 shadow-card"><MapPin className="h-6 w-6 shrink-0 text-primary" /><p className="font-semibold text-navy">{CONTACT.address}</p></div>
          <iframe title="Journey With Nalin location" loading="lazy" className="min-h-96 w-full flex-1 rounded-3xl border-0 shadow-card"
            src={`https://www.google.com/maps?q=${encodeURIComponent("Dewamottawa, Andiambalama, Sri Lanka")}&output=embed`} />
        </div>
      </section>
    </>
  );
}
