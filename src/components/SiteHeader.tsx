import { Link, NavLink } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { NAV, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import GoogleTranslate from "@/components/GoogleTranslate";

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
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "bg-background/95 shadow-card backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Logo light={!solid} />

        <div className="flex items-center gap-3">
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-semibold transition-colors hover:text-primary",
                    isActive ? "!text-primary" : solid ? "text-navy" : "text-navy-foreground",
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}

            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="btn-brand !py-2.5 text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              Book Now
            </a>
          </nav>

          {/* Google Translate */}
          <GoogleTranslate inline />

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
              solid ? "text-navy" : "text-navy-foreground",
            )}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="flex max-h-[calc(100vh-72px)] flex-col gap-1 overflow-y-auto px-6 pb-6 lg:hidden">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3 py-3 font-semibold transition-colors hover:bg-secondary",
                  isActive ? "text-primary" : "text-navy",
                )
              }
            >
              {n.label}
            </NavLink>
          ))}

          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="btn-brand mt-2 justify-center"
          >
            <MessageCircle className="h-4 w-4" />
            Book via WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
