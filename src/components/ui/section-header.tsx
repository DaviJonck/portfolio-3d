type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      <p className="text-[11px] uppercase tracking-[0.28em] text-emerald-400/80">
        {label}
      </p>
      <h2 className="text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-xs text-zinc-400 sm:text-sm">
          {description}
        </p>
      ) : null}
    </div>
  );
}


