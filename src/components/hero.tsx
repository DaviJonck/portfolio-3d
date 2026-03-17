"use client";

import { motion } from "framer-motion";
import { FaceScene } from "./face-scene";
import { TerminalIntro } from "./terminal-intro";

export function Hero() {
  return (
    <section className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] lg:gap-8">
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <FaceScene />
      </motion.div>

      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
      >
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.28em] text-emerald-400/80">
            Front-end Developer • React • Next.js • TypeScript
          </p>
          <h1 className="text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl md:text-3xl">
            Front-end: React, Next.js, TypeScript.
          </h1>
          <p className="max-w-xl text-xs text-zinc-400 sm:text-sm">
            Desde 2020 em produtos de alto volume (HealthTech). Migração de
            legado para Next.js + React + TypeScript; Datadog, Argo CD, Jest e
            React Testing Library no dia a dia.
          </p>
        </div>

        <TerminalIntro />
      </motion.div>
    </section>
  );
}
