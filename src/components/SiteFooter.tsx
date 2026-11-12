import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { CONTACT, NAV, waLink } from "@/lib/site";
import { Logo } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm text-navy-foreground/75">Private tours, safaris, beach escapes and airport transfers across Sri Lanka with a friendly local expert.</p>
          <div className="mt-5 flex gap-3">
            <a aria-label="Instagram" href={CONTACT.instagram} target="_blank" rel="noreferrer" className="rounded-full bg-navy-foreground/10 p-2.5 hover:bg-primary"><Instagram className="h-5 w-5" /></a>
            <a aria-label="WhatsApp" href={waLink()} target="_blank" rel="noreferrer" className="rounded-full bg-navy-foreground/10 p-2.5 hover:bg-whatsapp"><MessageCircle className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-primary">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">{NAV.map((n) => <li key={n.to}><Link to={n.to} className="text-navy-foreground/80 hover:text-primary">{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-primary">Popular Destinations</h4>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            {["Sigiriya", "Kandy", "Ella", "Yala Safari", "Mirissa", "Galle"].map((d) => <li key={d}><Link to="/destinations" className="hover:text-primary">{d}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-primary">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-primary" /><a href={`tel:${CONTACT.phoneRaw}`}>{CONTACT.phone}</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-primary" /><a href={`mailto:${CONTACT.email}`} className="break-all">{CONTACT.email}</a></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-primary" />{CONTACT.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-navy-foreground/60 md:flex-row">
          <p className="font-display text-sm italic text-navy-foreground/85">Explore Sri Lanka. Experience More. Journey With Nalin.</p>
          <p>© {new Date().getFullYear()} Journey With Nalin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a href={waLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-card transition-transform hover:scale-110">
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
