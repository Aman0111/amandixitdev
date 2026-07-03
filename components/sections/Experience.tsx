"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { experiences, sectionKicker } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          kicker={sectionKicker.experience}
          title="A timeline of product judgment, technical range, and delivery discipline."
          copy="Each role sharpened a different layer of the craft: systems thinking, frontend polish, AI workflows, and the operating rhythm needed to ship."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-violet/38 to-transparent sm:left-1/2" />
          {experiences.map((item, index) => (
            <Reveal key={`${item.role}-${item.period}`} delay={index * 0.08}>
              <div className="relative grid gap-6 pb-8 sm:grid-cols-2">
                <div className={index % 2 === 0 ? "sm:text-right" : "sm:col-start-2"}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="premium-card ml-11 rounded-[28px] p-6 sm:ml-0"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet">
                      {item.period}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold">{item.role}</h3>
                    <p className="mt-1 font-semibold text-graphite/70">
                      {item.company} | {item.location}
                    </p>
                    <p className="mt-4 leading-7 text-graphite/72">{item.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2 sm:justify-inherit">
                      {item.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full bg-white/68 px-3 py-1 text-xs font-semibold text-graphite/72"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                <div
                  className="absolute left-4 top-7 grid size-8 -translate-x-1/2 place-items-center rounded-full border border-white bg-violet shadow-ambient sm:left-1/2"
                  aria-hidden="true"
                >
                  <span className="size-2.5 rounded-full bg-white" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
