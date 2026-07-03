"use client";

import dynamic from "next/dynamic";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { highlights, profile, proofPoints, sectionKicker, stats } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const AccentOrbScene = dynamic(
  () => import("@/components/3d/AccentOrbScene").then((mod) => mod.AccentOrbScene),
  { ssr: false }
);

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      const formatted = Number.isInteger(value) ? Math.round(latest).toString() : latest.toFixed(1);
      if (ref.current) ref.current.textContent = `${formatted}${suffix}`;
    });
  }, [spring, suffix, value]);

  return <span ref={ref}>0{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          kicker={sectionKicker.about}
          title="I turn AI ambition into shipped, reliable product systems."
          copy="My work spans Agentic AI, RAG, LLMOps, MERN/Next.js platforms, PHP/Laravel services, mobile interfaces, and technical delivery leadership."
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="premium-card relative min-h-[420px] overflow-hidden rounded-[32px] p-6 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/70 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet">
                  Current Focus
                </p>
                <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                  Production AI systems with full-stack ownership.
                </h3>
                <p className="mt-4 leading-8 text-graphite/72">
                  Based in {profile.location}, I connect Python/FastAPI AI services, MERN product engineering,
                  PHP/Laravel foundations, and delivery governance into one practical engineering lane.
                </p>
              </div>
              <div className="relative mt-5 h-60 overflow-hidden rounded-[28px] sm:h-72">
                <Image
                  src="/visuals/aman-context.svg"
                  alt="Abstract profile visual for Aman Dixit's AI and full-stack work"
                  fill
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 opacity-85">
                  <AccentOrbScene />
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {proofPoints.slice(4).map((point) => (
                  <span key={point} className="rounded-full bg-white/68 px-3 py-1 text-xs font-bold text-graphite/72">
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.08}>
                  <motion.div
                    whileHover={{ y: -6, rotateX: 3, rotateY: -3 }}
                    className="premium-card rounded-[28px] p-6"
                  >
                    <div className="text-4xl font-bold text-ink sm:text-5xl">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-graphite/70">{stat.label}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={0.15 + index * 0.08}>
                  <div className="glass rounded-[28px] p-6">
                    <div className="flex gap-4">
                      <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink text-white">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="mt-2 leading-7 text-graphite/72">{item.copy}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
