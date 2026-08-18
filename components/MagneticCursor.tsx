"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor: a hard dot plus a magnetic ring that snaps onto the centre of
 * any element flagged with `data-magnetic`, and expands over interactive nodes.
 */
export default function MagneticCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 220, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 220, damping: 24, mass: 0.6 });

  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<"idle" | "hover" | "magnet">("idle");
  const [label, setLabel] = useState("");

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(fine.matches);
    const onChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    fine.addEventListener("change", onChange);
    return () => fine.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      const magnet = el?.closest<HTMLElement>("[data-magnetic]");

      if (magnet) {
        const r = magnet.getBoundingClientRect();
        // Pull the ring toward the element centre — the magnetic effect.
        x.set(r.left + r.width / 2);
        y.set(r.top + r.height / 2);
        setMode("magnet");
        setLabel(magnet.dataset.cursor ?? "");
        return;
      }

      x.set(e.clientX);
      y.set(e.clientY);
      const interactive = el?.closest("a, button, [data-hover]");
      setMode(interactive ? "hover" : "idle");
      setLabel(
        (interactive as HTMLElement | null)?.dataset?.cursor ?? ""
      );
    };

    const onLeave = () => {
      x.set(-100);
      y.set(-100);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = mode === "magnet" ? 84 : mode === "hover" ? 52 : 30;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      <motion.div
        className="absolute left-0 top-0 rounded-full border border-electric mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
          opacity: mode === "idle" ? 0.55 : 1,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
      >
        {label ? (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[9px] uppercase tracking-wide2 text-electric">
            {label}
          </span>
        ) : null}
      </motion.div>

      <motion.div
        className="absolute left-0 top-0 -ml-[2px] -mt-[2px] h-1 w-1 bg-electric"
        style={{ x, y }}
        animate={{ opacity: mode === "magnet" ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
