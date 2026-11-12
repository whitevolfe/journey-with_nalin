import { MessageCircle, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Tilt } from "./Tilt";
import { waLink, type Destination } from "@/lib/site";

export function DestinationCard({ d }: { d: Destination }) {
  return (
    <Tilt>
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-card">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={d.img} alt={d.name} loading="lazy" width={1200} height={912}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="flex flex-1 flex-col p-6" style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-xl font-semibold">{d.name}</h3>
          <p className="mt-2 flex-1 text-sm text-muted-foreground">{d.desc}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href={waLink(d.name)} target="_blank" rel="noreferrer" className="btn-whatsapp !px-4 !py-2 text-sm">
              <MessageCircle className="h-4 w-4" /> Book This Experience
            </a>
            <Link to="/contact" className="inline-flex items-center gap-1 px-2 text-sm font-bold text-navy hover:text-primary">
              Explore More <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    </Tilt>
  );
}
