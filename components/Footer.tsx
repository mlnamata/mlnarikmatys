"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-void pt-24">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">[05] — Contact</p>
        </Reveal>

        <Reveal delay={0.08}>
          <a
            href={`mailto:${PROFILE.email}`}
            data-magnetic
            data-cursor="WRITE"
            className="group mt-8 block"
          >
            <span className="display block text-[9vw] leading-[1.02] text-bone transition-colors duration-500 ease-brutal group-hover:text-electric sm:text-[min(5vw,6rem)]">
              Pojďme něco
              <br />
              <span className="text-transparent [-webkit-text-stroke:1px_#00E5FF] transition-all duration-500 group-hover:text-electric">
                postavit
              </span>
            </span>
            <span className="mt-8 inline-block font-mono text-xs text-ash transition-colors duration-500 group-hover:text-electric">
              {PROFILE.email}
            </span>
          </a>
        </Reveal>

        <div className="mt-20 flex flex-col gap-6 border-t border-line py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-wide2 text-ash">
            © {new Date().getFullYear()} {PROFILE.name} — {PROFILE.role}
          </p>
          <a
            href="#index"
            data-cursor="TOP"
            className="link-underline inline-flex h-11 items-center font-mono text-[10px] uppercase tracking-wide2 text-electric"
          >
            Back to top ↑
          </a>
        </div>
      </div>

      {/* Oversized signature bleeding off the bottom edge. */}
      <motion.p
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden
        className="display -mb-[2.6vw] select-none whitespace-nowrap text-center text-[15vw] leading-none text-iron sm:text-[min(15vw,15rem)]"
      >
        MLNAŘÍK
      </motion.p>
    </footer>
  );
}
