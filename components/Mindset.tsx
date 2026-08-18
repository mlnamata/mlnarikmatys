"use client";

import { motion } from "framer-motion";
import { MANIFESTO, PASSIONS } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function Mindset() {
  return (
    <section
      id="mindset"
      className="relative border-t border-line bg-void py-24 sm:py-32"
    >
      <div className="shell">
        <SectionHeader
          num="04"
          eyebrow="Mindset · Passions · Team"
          title="Operating System"
        />

        {/* Manifesto */}
        <div className="mt-14 border-b border-line pb-14">
          {MANIFESTO.map((line, i) => (
            <Reveal key={line.text} delay={i * 0.12}>
              <p
                className={`display text-[6.6vw] leading-[1.12] sm:text-[3.2vw] lg:text-[min(2.2vw,2.8rem)] ${
                  line.accent ? "text-electric" : "text-bone"
                }`}
              >
                {line.text}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Passions — terminal grid */}
        <div className="mt-14">
          <Reveal>
            <h3 className="eyebrow mb-6">Passions — runtime processes</h3>
          </Reveal>

          <div className="grid gap-px bg-line md:grid-cols-2">
            {PASSIONS.map((p, i) => (
              <motion.article
                key={p.title}
                data-magnetic
                data-cursor="RUN"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-concrete transition-colors duration-500 hover:bg-steel"
              >
                <div className="flex items-center gap-3 border-b border-line px-5 py-3">
                  <span className="h-2 w-2 bg-electric" />
                  <span className="font-mono text-[10px] uppercase tracking-wide2 text-ash">
                    {p.title.toLowerCase().replace(/[^a-z]+/g, "-")}
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="font-mono text-[12px] text-electric">
                    <span className="text-ash">$ </span>
                    {p.cmd}
                    <span className="ml-1 inline-block h-3 w-1.5 animate-blink bg-electric align-middle" />
                  </p>

                  <h4 className="display mt-7 text-[6.6vw] leading-[1.02] text-bone sm:text-[min(2.4vw,2.2rem)] lg:text-[min(1.5vw,1.9rem)]">
                    {p.title}
                  </h4>

                  <p className="mt-3 font-mono text-[10px] uppercase tracking-wide2 text-electric">
                    {p.meta}
                  </p>

                  <p className="mt-5 text-sm leading-relaxed text-ash">{p.body}</p>

                  <dl className="mt-7 grid grid-cols-3 gap-px border-t border-line pt-6">
                    {p.metrics.map((m) => (
                      <div key={m.k}>
                        <dt className="font-mono text-[9px] uppercase tracking-wide2 text-ash">
                          {m.k}
                        </dt>
                        <dd className="mt-1.5 font-mono text-[11px] text-bone transition-colors duration-300 group-hover:text-electric">
                          {m.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Team */}
        <Reveal className="mt-14">
          <div className="grid gap-8 border border-electric/40 bg-electric/[0.04] p-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] sm:p-12">
            <div>
              <p className="eyebrow">Team</p>
              <p className="display mt-4 text-[8vw] leading-[0.9] text-electric sm:text-[min(3vw,2.8rem)] lg:text-[min(2vw,2.6rem)]">
                Two-man
                <br />
                delivery
              </p>
            </div>
            <div className="space-y-5">
              <p className="text-base leading-relaxed text-bone sm:text-lg">
                Webové projekty dotahuji ve dvou — v úzké spolupráci s bratrem.
                Rozdělené role, sdílený standard: projekt se nepovažuje za hotový
                na devadesáti procentech.
              </p>
              <p className="text-sm leading-relaxed text-ash">
                Ta poslední desetina — edge case, výkon, přístupnost, deploy
                pipeline — je přesně ta část, která odděluje demo od produktu.
              </p>
              <div className="inline-flex flex-wrap gap-px bg-line">
                {["100% completion", "code review", "shared standard", "no loose ends"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-void px-4 py-2 font-mono text-[10px] uppercase tracking-wide2 text-electric"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
