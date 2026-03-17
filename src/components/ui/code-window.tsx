import type { ReactNode } from "react";

type CodeWindowProps = {
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
  rightSlot?: ReactNode;
};

export function CodeWindow({
  title,
  subtitle,
  className,
  children,
  rightSlot,
}: CodeWindowProps) {
  const rootClass = [
    "relative rounded-xl border border-zinc-800/80 bg-zinc-900/60",
    "shadow-[0_0_0_1px_rgba(24,24,27,0.6)] backdrop-blur-xl",
    "overflow-hidden",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={rootClass}>
      <header className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/80 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex flex-1 items-center justify-center gap-2 text-xs text-zinc-400">
          {title && (
            <span className="truncate font-medium text-zinc-200">{title}</span>
          )}
          {subtitle && (
            <span className="hidden truncate text-[11px] text-zinc-500 sm:inline">
              {subtitle}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 text-[11px] text-zinc-500">
          {rightSlot}
        </div>
      </header>
      <div className="relative">{children}</div>
    </section>
  );
}


