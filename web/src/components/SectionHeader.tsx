type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs sm:tracking-[0.26em]">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl leading-tight text-navy sm:text-4xl lg:text-5xl">{title}</h2>
      <div className="gold-line mt-4 h-px w-28 sm:w-40" />
      {description ? <p className="mt-4 text-base text-ink/70 sm:text-lg">{description}</p> : null}
    </div>
  );
}
