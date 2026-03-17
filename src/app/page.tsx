import { Hero } from "../components/hero";
import { BentoStacks } from "../components/bento-stacks";
import { ProjectsSection } from "../components/projects-section";
import { ContactZone } from "../components/contact-zone";
import { StatusBar } from "../components/ui/status-bar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050505] text-zinc-100">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 pb-4 pt-6 sm:px-6 lg:px-8 lg:pb-6 lg:pt-8">
        {/* Top bar estilo IDE */}
        <header className="flex items-center justify-between border-b border-zinc-800/80 pb-3 text-xs text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-400">
              portfolio
            </span>
            <span className="hidden text-zinc-600 sm:inline">
              início
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Next.js 14 • App Router</span>
            <span className="rounded-full border border-zinc-800/80 bg-zinc-900/60 px-2 py-0.5 text-[11px] text-zinc-400">
              TS
            </span>
          </div>
        </header>

        {/* Conteúdo principal */}
        <div className="flex flex-1 flex-col gap-10 pb-4">
          <Hero />
          <BentoStacks />
          <ProjectsSection />
          <ContactZone />
        </div>

        <div className="mt-2">
          <StatusBar />
        </div>
      </div>
    </main>
  );
}

