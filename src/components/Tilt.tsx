import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

/** CSS 3D tilt wrapper that follows the pointer. */
export function Tilt({ children, className, max = 10 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateY(${x * max}deg) rotateX(${-y * max}deg) translateZ(0)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <div className="perspective-stage h-full">
      <div ref={ref} onMouseMove={onMove} onMouseLeave={reset}
        className={cn("preserve-3d h-full transition-transform duration-300 ease-out", className)}>
        {children}
      </div>
    </div>
  );
}
