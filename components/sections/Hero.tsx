"use client";

import dynamic from "next/dynamic";
import { ArrowDown, Send, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { profile, proofPoints } from "@/data/portfolio";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene").then((mod) => mod.HeroScene), {
  ssr: false
});

export function Hero() {
  const { scrollYProgress } = useScroll();
  const sceneY = useTransform(scrollYProgress, [0, 0.25], [0, -90]);
  const copyY = useTransform(scrollYProgress, [0, 0.25], [0, 70]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <motion.div
        style={{ y: sceneY }}
        className="pointer-events-none absolute inset-x-0 top-[12%] h-[52vh] opacity-95 sm:inset-y-0 sm:left-[42%] sm:right-[-8%] sm:h-auto"
        aria-hidden="true"
      >
        <HeroScene />
      </motion.div>

      <div className="section-shell relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-10 pb-20 lg:grid-cols-[0.96fr_1.04fr]">
        <motion.div
          style={{ y: copyY }}
          initial={false}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl pt-[38vh] sm:pt-0"
        >
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-graphite/80">
            <Sparkles size={16} className="text-violet" />
            50K+ daily requests | 4 agentic AI systems | 99.5% uptime
          </div>
          <h1 className="text-balance text-5xl font-bold leading-[0.95] tracking-normal text-ink sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-semibold text-violet sm:text-2xl">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-graphite/78 sm:text-xl sm:leading-9">
            {profile.intro}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href="#projects">View Projects</MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              <Send size={17} className="mr-2" />
              Contact Me
            </MagneticButton>
          </div>
          <div className="mt-8 flex max-w-2xl flex-wrap gap-2">
            {proofPoints.slice(0, 4).map((point) => (
              <span
                key={point}
                className="rounded-full border border-white/70 bg-white/60 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-graphite/72 shadow-sm backdrop-blur"
              >
                {point}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="hidden lg:block" />
      </div>

      <motion.a
        href="#about"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="glass absolute bottom-6 left-1/2 z-20 grid size-12 -translate-x-1/2 place-items-center rounded-full text-ink"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
