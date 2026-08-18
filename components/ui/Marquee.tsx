type Props = {
  items: string[];
  className?: string;
};

/** Infinite ticker. The list is duplicated so the -50% translate loops seamlessly. */
export default function Marquee({ items, className = "" }: Props) {
  const row = [...items, ...items];

  return (
    <div
      className={`relative flex overflow-hidden border-y border-line bg-concrete py-3 ${className}`}
      aria-hidden
    >
      <div className="flex min-w-max animate-marquee">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-6 px-6 font-mono text-[11px] uppercase tracking-wide2 text-ash"
          >
            <span className="h-1 w-1 bg-electric" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
