"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { PROFILE, SECTIONS } from "@/lib/content";

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  const [active, setActive] = useState<string>("index");

  useEffect(() => {
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.2, 0.5, 0.8], rootMargin: "-20% 0px -40% 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[80]">
      <div className="border-b border-line bg-void/70 backdrop-blur-md">
        <div className="shell flex h-14 items-center justify-between gap-2 sm:gap-6">
          <a
            href="#index"
            data-cursor="TOP"
            aria-label="Zpět nahoru"
            className="flex h-14 shrink-0 items-center font-display text-[11px] font-bold uppercase tracking-[0.18em] text-bone transition-colors hover:text-electric"
          >
            M<span className="text-electric">/</span>M
          </a>

          <nav aria-label="Sekce" className="flex min-w-0 items-center gap-0.5 sm:gap-3 md:gap-7">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                data-cursor={s.num}
                aria-label={s.label}
                aria-current={active === s.id ? "true" : undefined}
                className={`group flex h-14 items-center gap-2 px-1.5 font-mono text-[10px] uppercase tracking-wide2 transition-colors sm:px-0 ${
                  active === s.id ? "text-electric" : "text-ash hover:text-bone"
                }`}
              >
                <span
                  className={`hidden h-1 w-1 transition-colors md:block ${
                    active === s.id ? "bg-electric" : "bg-line group-hover:bg-bone"
                  }`}
                />
                <span className="md:hidden">{s.num}</span>
                <span className="hidden md:inline">{s.label}</span>
              </a>
            ))}
          </nav>

          <a
            href={`mailto:${PROFILE.email}`}
            data-cursor="MAIL"
            aria-label="Kontakt — e-mail"
            className="flex h-14 w-10 shrink-0 items-center justify-end font-mono text-[10px] uppercase tracking-wide2 text-bone transition-colors hover:text-electric sm:w-auto"
          >
            <span aria-hidden className="text-sm sm:hidden">
              ✉
            </span>
            <span className="link-underline hidden sm:inline">Contact</span>
          </a>
        </div>
      </div>

      <motion.div
        style={{ scaleX: progress }}
        className="h-px origin-left bg-electric"
      />
    </header>
  );
}
