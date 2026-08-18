"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { STACK_TABS } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function TechStack() {
  const [activeId, setActiveId] = useState(STACK_TABS[0].id);
  const active = STACK_TABS.find((t) => t.id === activeId) ?? STACK_TABS[0];

  return (
    <section
      id="stack"
      className="relative border-t border-line bg-void py-24 sm:py-32"
    >
      <div className="shell">
        <SectionHeader
          num="02"
          eyebrow="Tech Stack & Workflow"
          title="Stack"
          lead="Prostředí, ve kterém se reálně pracuje: produkční stack, AI-driven workflow a vlastní infrastruktura, která běží nonstop."
        />

        {/* Full stack in the DOM for search engines and screen readers —
            the editor below only mounts the active tab. */}
        <div className="sr-only">
          {STACK_TABS.map((t) => (
            <section key={`sr-${t.id}`}>
              <h3>{t.title}</h3>
              <ul>
                {t.lines
                  .filter((l) => l.c === undefined)
                  .map((l, i) => (
                    <li key={i}>
                      {l.k}: {l.v}
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 overflow-hidden border border-line bg-concrete">
            {/* Window chrome */}
            <div className="flex items-center justify-between border-b border-line bg-steel px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 bg-line" />
                <span className="h-2.5 w-2.5 bg-line" />
                <span className="h-2.5 w-2.5 bg-electric" />
              </div>
              <span className="hidden truncate px-4 font-mono text-[10px] uppercase tracking-wide2 text-ash sm:block">
                ~/workspace/mlnarik — {active.file}
              </span>
              <span className="hidden font-mono text-[10px] text-ash sm:block">
                UTF-8 · LF
              </span>
            </div>

            <div className="grid lg:grid-cols-[220px_minmax(0,1fr)]">
              {/* Explorer */}
              <aside className="hidden border-r border-line bg-concrete p-4 lg:block">
                <p className="font-mono text-[10px] uppercase tracking-wide2 text-ash">
                  Explorer
                </p>
                <ul className="mt-4 space-y-1">
                  {STACK_TABS.map((t) => (
                    <li key={t.id}>
                      <button
                        type="button"
                        onClick={() => setActiveId(t.id)}
                        data-cursor="OPEN"
                        className={`flex w-full items-center gap-2 px-2 py-2 text-left font-mono text-[11px] transition-colors duration-300 ${
                          activeId === t.id
                            ? "bg-electric/10 text-electric"
                            : "text-ash hover:bg-iron hover:text-bone"
                        }`}
                      >
                        <span
                          className={`h-1 w-1 ${
                            activeId === t.id ? "bg-electric" : "bg-line"
                          }`}
                        />
                        {t.file}
                      </button>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 font-mono text-[10px] uppercase tracking-wide2 text-ash">
                  Problems
                </p>
                <p className="mt-3 font-mono text-[11px] text-electric">0 errors</p>
              </aside>

              <div className="min-w-0">
                {/* Tab bar */}
                <div className="flex overflow-x-auto border-b border-line bg-steel">
                  {STACK_TABS.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActiveId(t.id)}
                      data-cursor="TAB"
                      className={`relative shrink-0 border-r border-line px-5 py-3 font-mono text-[11px] transition-colors duration-300 ${
                        activeId === t.id
                          ? "bg-concrete text-bone"
                          : "text-ash hover:text-bone"
                      }`}
                    >
                      {t.file}
                      {activeId === t.id ? (
                        <motion.span
                          layoutId="tab-underline"
                          className="absolute inset-x-0 top-0 h-px bg-electric"
                        />
                      ) : null}
                    </button>
                  ))}
                </div>

                {/* Editor */}
                <div className="relative min-h-[420px] p-5 sm:p-7">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="mb-5 font-mono text-[10px] uppercase tracking-wide2 text-electric">
                        {active.title}
                      </p>

                      <ol className="space-y-1.5 font-mono text-[12px] leading-relaxed sm:text-[13px]">
                        {active.lines.map((line, i) => (
                          <li
                            key={i}
                            className="group flex gap-4 border-l-2 border-transparent pl-3 transition-colors duration-300 hover:border-electric hover:bg-electric/[0.04]"
                          >
                            <span className="w-6 shrink-0 select-none text-right text-line transition-colors group-hover:text-electric">
                              {String(i + 1).padStart(2, "0")}
                            </span>

                            {line.c !== undefined ? (
                              <span className="text-ash/70">{line.c}</span>
                            ) : (
                              <span className="min-w-0">
                                <span className="text-electric">{line.k}</span>
                                <span className="text-ash">: </span>
                                <span className="text-bone">
                                  &quot;{line.v}&quot;
                                </span>
                                <span className="text-ash">,</span>
                              </span>
                            )}
                          </li>
                        ))}
                        <li className="flex gap-4 pl-3">
                          <span className="w-6 shrink-0 text-right text-line">
                            {String(active.lines.length + 1).padStart(2, "0")}
                          </span>
                          <span className="inline-block h-4 w-2 animate-blink bg-electric align-middle" />
                        </li>
                      </ol>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Status bar */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line bg-steel px-5 py-2.5 font-mono text-[10px] uppercase tracking-wide2 text-ash">
                  <span className="text-electric">● main</span>
                  <span>{active.lang}</span>
                  <span>Ln {active.lines.length}, Col 1</span>
                  <span className="ml-auto">Prettier · ESLint · TS strict</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
