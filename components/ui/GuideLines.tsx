"use client";

import { motion } from "framer-motion";

/**
 * Abstract electric linear-motion guides: vertical rails plus travelling
 * carriages, echoing both code columns and linear-rail hardware.
 */
export default function GuideLines() {
  const rails = [12, 28, 44, 60, 76, 92];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        {rails.map((x, i) => (
          <g key={x}>
            <line
              x1={x}
              y1={0}
              x2={x}
              y2={100}
              stroke="#00E5FF"
              strokeWidth={0.06}
              opacity={0.18}
            />
            <motion.line
              x1={x}
              y1={0}
              x2={x}
              y2={100}
              stroke="#00E5FF"
              strokeWidth={0.16}
              strokeDasharray="6 94"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: [100, -100] }}
              transition={{
                duration: 6 + i * 1.4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.6,
              }}
            />
          </g>
        ))}

        <line x1="0" y1="50" x2="100" y2="50" stroke="#00E5FF" strokeWidth={0.05} opacity={0.12} />
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(0,229,255,0.10),transparent_62%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void to-transparent" />
    </div>
  );
}
