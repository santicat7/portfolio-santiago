"use client";

import { useEffect, useRef } from "react";

export function MouseAura() {
  const el = useRef<HTMLDivElement>(null);
  const cur = useRef({ x: 0.5, y: 0.4 });
  const tgt = useRef({ x: 0.5, y: 0.4 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      tgt.current.x = e.clientX / window.innerWidth;
      tgt.current.y = e.clientY / window.innerHeight;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      cur.current.x = lerp(cur.current.x, tgt.current.x, 0.05);
      cur.current.y = lerp(cur.current.y, tgt.current.y, 0.05);

      if (el.current) {
        el.current.style.setProperty("--ax", `${cur.current.x * 100}%`);
        el.current.style.setProperty("--ay", `${cur.current.y * 100}%`);
      }

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={el}
      aria-hidden
      className="pointer-events-none fixed inset-0"
      style={
        {
          zIndex: 0,
          "--ax": "50%",
          "--ay": "40%",
          background: [
            "radial-gradient(ellipse 90vw 70vh at var(--ax) var(--ay), rgba(255,190,60,0.09) 0%, transparent 65%)",
            "radial-gradient(ellipse 40vw 35vh at var(--ax) var(--ay), rgba(220,140,40,0.06) 0%, transparent 55%)",
            "radial-gradient(ellipse 160vw 80vh at var(--ax) 100%, rgba(180,120,255,0.04) 0%, transparent 60%)",
          ].join(", "),
        } as React.CSSProperties
      }
    />
  );
}
