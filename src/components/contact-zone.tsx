"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, BugPlay } from "lucide-react";
import { CodeWindow } from "./ui/code-window";
import { SectionHeader } from "./ui/section-header";

export function ContactZone() {
  return (
    <section className="space-y-4">
      <SectionHeader
        label="Contato"
        title="Debug Console / .env"
        description="Se algo aqui chamou sua atenção, você pode abrir uma issue, mandar um e-mail ou só me pingar nas redes."
      />

      <CodeWindow
        title=".env.local"
        subtitle="debug console"
        rightSlot={
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300">
            <BugPlay className="h-3 w-3" />
            <span>attached</span>
          </span>
        }
      >
        <div className="space-y-3 bg-gradient-to-b from-black/60 via-black/40 to-black/20 px-4 py-4 text-[11px] text-emerald-200">
          <p className="text-[10px] text-emerald-400/90">
            {`// console de debug em JavaScript com os dados de contato`}
          </p>

          <motion.pre
            className="space-y-1 font-mono text-[11px] leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span className="text-violet-400">const</span>{" "}
            <span className="font-semibold text-amber-300/95">dev</span>
            {" = {"}
            {"\n  name: \"Davi Jonck\","}
            {"\n  role: \"Front-end Developer\","}
            {"\n  location: \"Florianópolis · SC\","}
            {"\n};"}
          </motion.pre>

          <motion.pre
            className="mt-2 space-y-1 font-mono text-[11px] leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.05, duration: 0.4, ease: "easeOut" }}
          >
            <span className="text-violet-400">const</span>{" "}
            <span className="font-semibold text-amber-300/95">contact</span>
            {" = {"}
            {"\n  email: \"contatodavij@gmail.com\","}
            {"\n  phone: \"+55 48 99139-0028\","}
            {"\n  github: \"github.com/DaviJonck\","}
            {"\n  linkedin: \"linkedin.com/in/davi-jonck-212301229/\","}
            {"\n};"}
          </motion.pre>

          <motion.pre
            className="mt-2 space-y-1 rounded-lg border border-amber-400/25 bg-amber-500/5 px-3 py-2 font-mono text-[11px] text-emerald-100 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
          >
            <span className="text-zinc-400">console.log(</span>
            <span className="text-amber-300/95">&quot;dev &gt;&quot;</span>
            <span className="text-zinc-400">, dev);</span>
            {"\n"}
            <span className="text-zinc-400">console.log(</span>
            <span className="text-amber-300/95">&quot;contact &gt;&quot;</span>
            <span className="text-zinc-400">, contact);</span>
          </motion.pre>

          <p className="mt-3 text-[10px] uppercase tracking-wider text-zinc-500">
            Clique para abrir
          </p>
          <div className="mt-1.5 flex flex-wrap gap-2 text-[11px] text-zinc-200">
            <a
              href="mailto:contatodavij@gmail.com"
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-emerald-500/50 bg-emerald-500/10 px-3.5 py-2 text-[11px] font-medium text-emerald-100 shadow-[0_0_20px_-5px_rgba(16,185,129,0.25)] transition-all hover:border-emerald-400/70 hover:bg-emerald-500/20 hover:text-emerald-50 hover:shadow-[0_0_24px_-4px_rgba(16,185,129,0.4)]"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Enviar e-mail</span>
            </a>
            <a
              href="tel:+5548991390028"
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-emerald-500/50 bg-emerald-500/10 px-3.5 py-2 text-[11px] font-medium text-emerald-100 shadow-[0_0_20px_-5px_rgba(16,185,129,0.25)] transition-all hover:border-emerald-400/70 hover:bg-emerald-500/20 hover:text-emerald-50 hover:shadow-[0_0_24px_-4px_rgba(16,185,129,0.4)]"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Ligar</span>
            </a>
            <a
              href="https://github.com/DaviJonck"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-emerald-500/50 bg-emerald-500/10 px-3.5 py-2 text-[11px] font-medium text-emerald-100 shadow-[0_0_20px_-5px_rgba(16,185,129,0.25)] transition-all hover:border-emerald-400/70 hover:bg-emerald-500/20 hover:text-emerald-50 hover:shadow-[0_0_24px_-4px_rgba(16,185,129,0.4)]"
            >
              <Github className="h-3.5 w-3.5" />
              <span>Abrir GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/davi-jonck-212301229/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-emerald-500/50 bg-emerald-500/10 px-3.5 py-2 text-[11px] font-medium text-emerald-100 shadow-[0_0_20px_-5px_rgba(16,185,129,0.25)] transition-all hover:border-emerald-400/70 hover:bg-emerald-500/20 hover:text-emerald-50 hover:shadow-[0_0_24px_-4px_rgba(16,185,129,0.4)]"
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span>Conectar no LinkedIn</span>
            </a>
          </div>
        </div>
      </CodeWindow>
    </section>
  );
}
