"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AWARDS } from "@/lib/content";
import AwardBadge from "@/components/ui/AwardBadge";
import Reveal from "@/components/ui/Reveal";

export default function HopeToSee() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const slide = useTransform(scrollYProgress, [0, 1], ["2%", "-9%"]);
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.35]);

  return (
    <section
      id="hope-to-see"
      ref={ref}
      className="relative overflow-hidden border-t border-line bg-void py-24 sm:py-32"
    >
      <div className="shell">
        <Reveal>
          <div className="flex items-baseline gap-5">
            <span className="font-mono text-[11px] text-electric">[01]</span>
            <span className="eyebrow">Flagship Project</span>
          </div>
        </Reveal>
      </div>

      {/* Oversized kinetic title, dragged horizontally by scroll. */}
      <motion.div style={{ x: slide, opacity: glow }} className="mt-10 w-max">
        <h2 className="display whitespace-nowrap text-[13vw] leading-[0.9] text-electric glow-electric sm:text-[min(13vw,11rem)]">
          Hope To See
        </h2>
      </motion.div>

      {/* Extreme-contrast inverted band. */}
      <div className="mt-10 border-y border-electric bg-bone">
        <div className="shell flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="display text-[6vw] leading-none text-void sm:text-[min(2.1vw,2.4rem)]">
            Role — Hardware &amp; Embedded C
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wide2 text-void/70">
            Hardware · Firmware in C · Technical Comms
          </p>
        </div>
      </div>

      <div className="shell mt-16 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal className="space-y-6">
          <p className="text-base leading-relaxed text-bone sm:text-lg">
            Hope To See je projekt, kde jsem měl na starosti hardware —
            návrh a stavbu elektroniky, firmware v jazyce C a komunikaci
            technické části projektu směrem ven.
          </p>
          <p className="text-sm leading-relaxed text-ash">
            Projekt prošel několika národními soutěžemi a porotami. Před každou
            z nich jsem obhajoval technické řešení — jak hardware funguje, proč
            je postavený právě takhle a kde jsou jeho limity.
          </p>

          <dl className="grid grid-cols-2 gap-px border border-line bg-line">
            {[
              { k: "Scope", v: "Hardware + firmware" },
              { k: "Stack", v: "C — embedded" },
              { k: "Awards", v: `${AWARDS.length} recognitions` },
              { k: "Status", v: "Shipped" },
            ].map((row) => (
              <div key={row.k} className="bg-concrete p-5">
                <dt className="font-mono text-[10px] uppercase tracking-wide2 text-ash">
                  {row.k}
                </dt>
                <dd className="mt-2 font-mono text-sm text-electric">{row.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div>
          <Reveal>
            <h3 className="eyebrow mb-6">Wall of Fame</h3>
          </Reveal>
          <div className="grid gap-px bg-line sm:grid-cols-2">
            {AWARDS.map((a, i) => (
              <AwardBadge
                key={a.name}
                index={i}
                name={a.name}
                kind={a.kind}
                note={a.note}
                year={a.year}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
