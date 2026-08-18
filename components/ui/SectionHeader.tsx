import Reveal from "./Reveal";

type Props = {
  num: string;
  eyebrow: string;
  title: string;
  lead?: string;
  accent?: boolean;
};

export default function SectionHeader({
  num,
  eyebrow,
  title,
  lead,
  accent = false,
}: Props) {
  return (
    <header className="border-b border-line pb-8">
      <Reveal>
        <div className="flex items-baseline gap-5">
          <span className="font-mono text-[11px] text-electric">[{num}]</span>
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <h2
          className={`display mt-6 text-[13vw] leading-[0.85] sm:text-[9vw] lg:text-[min(6.4vw,8rem)] ${
            accent ? "text-electric glow-electric" : "text-bone"
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {lead ? (
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-2xl text-sm leading-relaxed text-ash sm:text-base">
            {lead}
          </p>
        </Reveal>
      ) : null}
    </header>
  );
}
