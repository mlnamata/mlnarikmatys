"use client";

import { motion } from "framer-motion";

type Props = {
  index: number;
  name: string;
  kind: string;
  note: string;
  year: string;
};

export default function AwardBadge({ index, name, kind, note, year }: Props) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      data-magnetic
      data-cursor={num}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group relative isolate overflow-hidden border border-line bg-concrete p-6 transition-colors duration-500 ease-brutal hover:border-electric sm:p-8"
    >
      {/* Fill wipe on hover — the badge flips to full electric. */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-electric transition-transform duration-500 ease-brutal group-hover:scale-y-100"
      />

      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[10px] tracking-wide2 text-electric transition-colors duration-500 group-hover:text-void">
          [{num}]
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wide2 text-ash transition-colors duration-500 group-hover:text-void/70">
          {year}
        </span>
      </div>

      <h3 className="display mt-10 text-[6.2vw] leading-[1.05] text-bone transition-colors duration-500 group-hover:text-void sm:text-[min(2.6vw,2.4rem)] lg:text-[min(1.7vw,2rem)]">
        {name}
      </h3>

      <p className="mt-4 font-mono text-[10px] uppercase tracking-wide2 text-electric transition-colors duration-500 group-hover:text-void">
        {kind}
      </p>

      <p className="mt-5 border-t border-line pt-5 text-xs leading-relaxed text-ash transition-colors duration-500 group-hover:border-void/25 group-hover:text-void/80">
        {note}
      </p>

      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rotate-45 bg-electric/10 transition-all duration-500 ease-brutal group-hover:bg-void/10"
      />
    </motion.article>
  );
}
