import { Link, NavLink } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { NAV, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={logo}
        alt="Journey With Nalin"
        className={cn("h-10 w-auto object-contain sm:h-12", light ? "opacity-100" : "opacity-100")}
      />
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f(); window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  const solid = scrolled || open;
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all", solid ? "bg-background/95 shadow-card backdrop-blur" : "bg-transparent")}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo light={!solid} />
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === "/"}
              className={({ isActive }) =>
                cn("text-sm font-semibold transition-colors hover:text-primary", isActive ? "!text-primary" : solid ? "text-navy" : "text-navy-foreground")
              }>{n.label}</NavLink>
          ))}
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-brand !py-2.5 text-sm"><MessageCircle className="h-4 w-4" /> Book Now</a>
        </nav>
        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className={cn("lg:hidden", solid ? "text-navy" : "text-navy-foreground")}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 px-6 pb-6 lg:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-semibold text-navy hover:bg-secondary">{n.label}</Link>
          ))}
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-brand mt-2 justify-center">Book via WhatsApp</a>
        </nav>
      )}
    </header>
  );
}
