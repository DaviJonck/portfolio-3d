'use client';

import { useEffect, useState, Fragment } from "react";
import { motion } from "framer-motion";
import { TerminalSquare } from "lucide-react";
import { CodeWindow } from "./ui/code-window";

const LINES = [
  "// console pessoal em JavaScript",
  "",
  "const dev = {",
  '  name: "Davi Jonck",',
  '  role: "Front-end Developer",',
  '  location: "Florianópolis · SC",',
  "};",
  "",
  "const experience = {",
  "  years: 5,",
  '  stack: ["React", "Next.js", "TypeScript", "Jest", "Vite"],',
  '  domain: "HealthTech",',
  '  observability: "Datadog",',
  '  automation: "Argo CD",',
  "  highlight:",
  '    "Migração de sistemas legados para arquiteturas modernas que atendem milhões de usuários.",',
  "};",
];

const FULL_TEXT = LINES.join('\n');

function highlightLine(line: string) {
  const constMatch = line.match(/^(const )(\w+)( =.*)$/);
  if (constMatch) {
    const [, kw, name, rest] = constMatch;
    return (
      <Fragment>
        <span className="text-violet-400">{kw}</span>
        <span className="font-semibold text-amber-300/95">{name}</span>
        <span className="text-zinc-100">{rest}</span>
      </Fragment>
    );
  }
  return <span className="text-zinc-100">{line}</span>;
}

export function TerminalIntro() {
  const [text, setText] = useState("");

  useEffect(() => {
    let frame: number;
    let i = 0;

    const step = () => {
      setText(FULL_TEXT.slice(0, i));
      i += 2; // velocidade da digitação

      if (i <= FULL_TEXT.length) {
        frame = window.setTimeout(step, 28);
      }
    };

    step();

    return () => {
      window.clearTimeout(frame);
    };
  }, []);

  const lines = text.split('\n');

  return (
    <CodeWindow
      title="intro.ts"
      subtitle="pnpm dev --filter portfolio-3d"
      rightSlot={
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>running</span>
        </span>
      }
      className="h-76 md:h-86 lg:h-[26rem]"
    >
      <div className="relative flex h-full flex-col gap-3 bg-gradient-to-b from-black/40 to-black/5 px-4 pr-3 pb-4 pt-3 text-xs text-emerald-100 sm:text-sm overflow-hidden">
        <div className="flex items-center gap-2 text-[11px] text-zinc-500">
          <TerminalSquare className="h-3.5 w-3.5 text-emerald-400" />
          <span>/Users/you/dev/portfolio-3d</span>
        </div>
        <motion.pre
          className="mt-1 min-h-[8.5rem] whitespace-pre-wrap break-words font-mono text-[11px] leading-relaxed text-zinc-100 sm:text-[12px]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {lines.map((line, i) => (
            <Fragment key={i}>
              {i > 0 && '\n'}
              {highlightLine(line)}
            </Fragment>
          ))}
          <span className="inline-block w-2 animate-pulse rounded-sm bg-emerald-400/80 align-middle ml-1" />
        </motion.pre>
      </div>
    </CodeWindow>
  );
}


