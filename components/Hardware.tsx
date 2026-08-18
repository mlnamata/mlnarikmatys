"use client";

import { motion } from "framer-motion";
import { HARDWARE } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function Hardware() {
  return (
    <section
      id="hardware"
      className="relative border-t border-line bg-void py-24 sm:py-32"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-25" />

      <div className="shell relative">
        <SectionHeader
          num="03"
          eyebrow="Hardware · Manufacturing · Engineering"
          title="Machines"
          lead="Fyzická část práce: stavba strojů, výroba z oceli a dřeva, a datová analýza historických objektů."
        />

        <div className="mt-14 grid gap-px bg-line lg:grid-cols-3">
          {HARDWARE.map((block, i) => (
            <motion.article
              key={block.num}
              data-magnetic
              data-cursor={block.num}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col bg-concrete p-7 transition-colors duration-500 ease-brutal hover:bg-steel sm:p-9"
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 h-0 w-px bg-electric transition-all duration-700 ease-brutal group-hover:h-full"
              />

              <div className="flex items-baseline justify-between">
                <span className="display text-[13vw] leading-none text-line transition-colors duration-500 group-hover:text-electric/25 sm:text-[4vw] lg:text-[min(3vw,4rem)]">
                  {block.num}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wide2 text-electric">
                  {block.tag}
                </span>
              </div>

              <h3 className="display mt-10 text-[7vw] leading-[1.02] text-bone sm:text-[min(2.6vw,2.4rem)] lg:text-[min(1.5vw,1.9rem)]">
                {block.title}
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-ash">{block.body}</p>

              <ul className="mt-8 space-y-px border-t border-line pt-6">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 py-2 font-mono text-[11px] text-bone transition-colors duration-300 hover:text-electric"
                  >
                    <span className="h-0.5 w-4 bg-electric" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
