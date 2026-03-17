import { Cpu, Network, Timer } from "lucide-react";

export function StatusBar() {
  return (
    <footer className="flex items-center gap-4 border-t border-zinc-800/80 bg-black/60 px-3 py-2 text-[11px] text-zinc-500 sm:px-4">
      <div className="flex items-center gap-1.5">
        <Cpu className="h-3.5 w-3.5 text-emerald-400" />
        <span>Next.js 14</span>
        <span className="h-1 w-1 rounded-full bg-zinc-700" />
        <span>React 19</span>
      </div>
      <div className="hidden items-center gap-1.5 sm:flex">
        <Network className="h-3.5 w-3.5 text-emerald-400" />
        <span>portfolio</span>
      </div>
      <div className="ml-auto flex items-center gap-1.5">
        <Timer className="h-3.5 w-3.5 text-emerald-400" />
        <span className="hidden sm:inline">READY</span>
        <span className="h-1 w-1 rounded-full bg-emerald-400" />
      </div>
    </footer>
  );
}


