export default function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="noise pointer-events-none fixed inset-0 z-[90] mix-blend-overlay"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent animate-scanline" />
    </div>
  );
}
