"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { PROFILE } from "@/lib/content";
import GuideLines from "@/components/ui/GuideLines";
import Marquee from "@/components/ui/Marquee";

const TICKER = [
  "Next.js",
  "Supabase / RLS",
  "CNC",
  "Laser",
  "Raspberry Pi",
  "Framer Motion",
  "Techta",
  "FPV",
  "Node.js",
  "Vercel",
];

function KineticLine({
  text,
  delay,
  drift,
  className = "",
}: {
  text: string;
  delay: number;
  drift: MotionValue<number>;
  className?: string;
}) {
  const chars = Array.from(text);

  return (
    <motion.span style={{ x: drift }} className={`block ${className}`}>
      {chars.map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          className="inline-block will-change-transform"
          initial={{ y: "108%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 1.1,
            delay: delay + i * 0.035,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Deformation on scroll — the name compresses, skews and drifts apart.
  const y = useTransform(scrollYProgress, [0, 1], [0, 190]);
  const skewY = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [1, 0.78]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const driftLeft = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const driftRight = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const metaY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section
      id="index"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-14"
    >
      <GuideLines />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

      <div className="shell relative z-10 flex flex-1 flex-col justify-center py-16">
        <motion.div
          style={{ y: metaY }}
          className="mb-10 flex flex-wrap items-center gap-x-8 gap-y-3"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="eyebrow"
          >
            [00] — Index
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wide2 text-electric"
          >
            <span className="h-1.5 w-1.5 animate-pulse bg-electric" />
            Available — {PROFILE.location}
          </motion.span>
        </motion.div>

        <motion.h1
          style={{ y, skewY, scaleY, opacity }}
          className="display select-none text-[13vw] leading-[1.02] text-bone will-change-transform sm:text-[min(13.5vw,11rem)]"
        >
          <span className="sr-only">{PROFILE.name}</span>
          {/* pt/-mt pair: the padding widens the clip box so Czech diacritics
              (Á, Š, Ř, Í) survive the 0.8 line-height, the negative margin
              keeps the layout as tight as before. */}
          <span aria-hidden className="-mt-[0.24em] block overflow-hidden pt-[0.24em]">
            <KineticLine text={PROFILE.displayName[0]} delay={0.15} drift={driftLeft} />
          </span>
          <span aria-hidden className="-mt-[0.24em] block overflow-hidden pt-[0.24em]">
            <KineticLine
              text={PROFILE.displayName[1]}
              delay={0.3}
              drift={driftRight}
              className="text-transparent [-webkit-text-stroke:1px_#00E5FF]"
            />
          </span>
        </motion.h1>

        <motion.div
          style={{ y: metaY, opacity }}
          className="mt-12 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-end md:justify-between"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="display max-w-xl text-[min(5.4vw,1.6rem)] leading-[1.05] text-bone sm:text-[min(2.2vw,2rem)] lg:text-[min(1.55vw,1.9rem)]"
          >
            Lead Developer <span className="text-electric">&</span> Hardware Engineer
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="max-w-sm space-y-3"
          >
            <p className="text-sm leading-relaxed text-ash">
              Stavím produkty na webu i stroje z oceli. Stejný přístup na obou
              stranách — přesnost, tolerance, hotový výsledek.
            </p>
            <a
              href="#hope-to-see"
              data-magnetic
              data-cursor="SCROLL"
              className="inline-flex items-center gap-3 border border-line px-5 py-3 font-mono text-[10px] uppercase tracking-wide2 text-bone transition-colors duration-500 ease-brutal hover:border-electric hover:bg-electric hover:text-void"
            >
              Flagship Project
              <span aria-hidden>↓</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10">
        <Marquee items={TICKER} />
      </div>
    </section>
  );
}
