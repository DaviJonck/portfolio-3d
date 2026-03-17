'use client';

import { motion } from "framer-motion";
import {
  FolderTree,
  FileJson2,
  ExternalLink,
  GitBranch,
  Sparkle,
} from "lucide-react";
import { CodeWindow } from "./ui/code-window";
import { SectionHeader } from "./ui/section-header";

const projects = [
  {
    name: "portfolio-3d.json",
    label: "Este site",
    description:
      "Portfólio single page inspirado em IDE/Terminal, com Canvas 3D, animações suaves e layout responsivo.",
    stack: ["Next.js 14", "React Three Fiber", "Framer Motion", "Tailwind CSS"],
  },
  {
    name: "questr.json",
    label: "Questr – RPG Social Hub",
    description:
      "Plataforma completa para jogadores de RPG: chat, sistema de amizades, campanhas de role-playing e autenticação.",
    stack: ["Vite", "React", "TypeScript", "Node.js", "Vercel", "Supabase"],
  },
  {
    name: "lungo.json",
    label: "Lungo – HealthTech SaaS",
    description:
      "SaaS de reabilitação pulmonar e autogestão de doenças respiratórias. Conecta profissionais de saúde e pacientes com planos de treino personalizados e monitoramento remoto. Arquitetura de banco de dados e integração de pagamentos via webhooks.",
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Supabase"],
  },
  {
    name: "doedog.json",
    label: "DoeDog",
    description:
      "Site para apoio e divulgação de ações em prol de cães de rua.",
    stack: ["React"],
  },
];

export function ProjectsSection() {
  return (
    <section className="space-y-4">
      <SectionHeader
        label="Projetos"
        title="Repositório de projetos"
        description="Projetos em que trabalhei ou que mantenho."
      />

      <CodeWindow
        title="projects.tree.json"
        subtitle="src/projects"
        rightSlot={
          <span className="inline-flex items-center gap-1 text-[11px] text-zinc-500">
            <Sparkle className="h-3 w-3 text-emerald-400" />
            <span>hover para detalhes</span>
          </span>
        }
      >
        <div className="flex flex-col gap-1.5 border-t border-zinc-800/80 bg-black/40 px-3 py-2 text-[11px] text-zinc-400">
          <div className="flex items-center gap-2 text-[11px] text-zinc-500">
            <FolderTree className="h-3.5 w-3.5 text-emerald-400" />
            <span>src/projects</span>
            <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-zinc-700/80 bg-zinc-900/80 px-2 py-0.5 text-[10px] text-zinc-400">
              <GitBranch className="h-3 w-3" />
              main
            </span>
          </div>
        </div>

        <div className="divide-y divide-zinc-800/60">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className="group relative flex flex-col gap-2 bg-zinc-950/40 px-3 py-3 text-xs transition-colors hover:bg-zinc-900/60"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.06, duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2">
                <FileJson2 className="h-3.5 w-3.5 text-emerald-400/90" />
                <span className="font-medium text-zinc-100">
                  {project.name}
                </span>
                <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-emerald-300 group-hover:bg-emerald-500/20">
                  {project.label}
                </span>
                <div className="ml-auto flex items-center gap-1 text-[10px] text-emerald-300/80 opacity-0 transition-opacity group-hover:opacity-100">
                  <span>abrir</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </div>

              <p className="max-w-2xl text-[11px] text-zinc-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 text-[10px] text-zinc-400">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-800/80 bg-zinc-900/70 px-2 py-0.5 text-[10px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </CodeWindow>
    </section>
  );
}


