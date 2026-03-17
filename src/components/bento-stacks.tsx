'use client';

import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Sparkles,
  Palette,
  GitBranch,
  MousePointer2,
} from "lucide-react";
import { CodeWindow } from "./ui/code-window";
import { SectionHeader } from "./ui/section-header";

const stacks = [
  {
    title: "Frontend Core",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Vite", "CSS", "Tailwind CSS", "Zod"],
    accent: "from-emerald-500/20 to-sky-500/10",
  },
  {
    title: "Quality & Testing",
    icon: Sparkles,
    items: ["Jest", "React Testing Library", "Testes de integração", "Coverage & TDD"],
    accent: "from-violet-500/20 to-rose-500/10",
  },
  {
    title: "APIs & Backend",
    icon: Cpu,
    items: ["REST APIs", "Node.js", "Java", "Oracle DB", "MongoDB", "Autenticação"],
    accent: "from-amber-500/20 to-emerald-500/10",
  },
  {
    title: "Styling",
    icon: Palette,
    items: ["Styled Components", "Design systems", "Dark themes dev-friendly"],
    accent: "from-emerald-500/16 to-zinc-900/0",
  },
  {
    title: "DevOps & Observabilidade",
    icon: Cpu,
    items: ["Argo CD", "Datadog", "Monitoramento", "Alertas & dashboards"],
    accent: "from-sky-400/20 to-emerald-500/10",
  },
  {
    title: "Dev Workflow",
    icon: Sparkles,
    items: ["Git & GitHub", "Vercel", "Supabase", "Code Review", "Automação de tarefas"],
    accent: "from-emerald-500/20 to-violet-500/10",
  },
];

export function BentoStacks() {
  return (
    <section className="space-y-4">
      <SectionHeader
        label="Stacks"
        title="Bento grid de tecnologias"
        description="Uma visão rápida do ecossistema que uso no dia a dia para construir experiências ricas e performáticas."
      />

      <CodeWindow
        title="stacks.config.json"
        subtitle="tech-bento-grid"
        className="border-dashed border-zinc-800/80"
        rightSlot={
          <span className="hidden items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-400 sm:inline-flex">
            <GitBranch className="h-3 w-3" />
            <span>main</span>
          </span>
        }
      >
        <div className="grid gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3">
          {stacks.map((stack, index) => {
            const Icon = stack.icon;

            return (
              <motion.article
                key={stack.title}
                className="relative overflow-hidden rounded-lg border border-zinc-800/80 bg-zinc-900/60 p-3 text-xs text-zinc-300 shadow-[0_0_0_1px_rgba(24,24,27,0.7)] backdrop-blur-xl"
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.04, duration: 0.4, ease: "easeOut" }}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${stack.accent} opacity-60`}
                />

                <div className="relative flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded border border-emerald-500/40 bg-black/40 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.35)]">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-100">
                        {stack.title}
                      </p>
                      <p className="text-[10px] text-emerald-300/80">
                        {index === 0
                          ? "core"
                          : index === 1
                          ? "testing"
                          : index === 2
                          ? "apis"
                          : index === 3
                          ? "ui"
                          : index === 4
                          ? "devops"
                          : "workflow"}
                      </p>
                    </div>
                  </div>
                  <MousePointer2 className="h-3.5 w-3.5 text-zinc-500" />
                </div>

                <ul className="relative mt-3 space-y-1.5 text-[11px] leading-relaxed text-zinc-200">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-start gap-1.5">
                      <span className="mt-[5px] h-1 w-1 rounded-full bg-emerald-400/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </CodeWindow>
    </section>
  );
}


