"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { projects, sectionKicker, testimonials } from "@/data/portfolio";

type Project = (typeof projects)[number];

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          kicker={sectionKicker.projects}
          title="AI systems, product platforms, and delivery programs with measurable outcomes."
          copy="Selected work from healthcare AI, document intelligence, learning personalization, LLMOps, finance, commerce, and technical delivery leadership."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -10, rotateX: 2, rotateY: index % 2 ? 2 : -2 }}
                className="premium-card group flex h-full flex-col overflow-hidden rounded-[32px]"
              >
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="relative h-56 overflow-hidden text-left sm:h-64"
                  aria-label={`Open details for ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} project visual`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-white/10" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/76 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-ink backdrop-blur">
                    {project.accent}
                  </div>
                  <motion.div
                    className="absolute bottom-6 right-7 size-28 rounded-full border border-white/62 bg-white/24 backdrop-blur-xl"
                    animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </button>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold leading-tight sm:text-2xl">{project.title}</h3>
                  <p className="mt-3 flex-1 leading-7 text-graphite/72">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold">
                        {item}
                      </span>
                    ))}
                  </div>
                  {/* <div className="mt-6 flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-graphite"
                    >
                      <Github size={16} /> GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="glass inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div> */}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.author} delay={0.12 + index * 0.06}>
              <motion.figure
                whileHover={{ y: -6 }}
                className="glass relative overflow-hidden rounded-[30px] p-6 sm:p-8"
              >
                <div className="absolute right-6 top-5 text-7xl font-bold text-violet/10">“</div>
                <blockquote className="relative text-xl font-semibold leading-8 text-ink">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-violet">
                  {item.author}
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-ink/42 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 28, scale: 0.96, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 28, scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="premium-card max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[32px] p-6 sm:p-8"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.title} project details`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet">
                    {selected.accent}
                  </p>
                  <h3 className="mt-3 text-3xl font-bold sm:text-4xl">{selected.title}</h3>
                </div>
                <button
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-ink"
                  onClick={() => setSelected(null)}
                  aria-label="Close project details"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="relative mt-6 h-64 overflow-hidden rounded-[24px]">
                <Image
                  src={selected.image}
                  alt={`${selected.title} project visual`}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-6 text-lg leading-8 text-graphite/78">{selected.description}</p>
              <p className="mt-4 leading-8 text-graphite/72">{selected.detail}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {selected.stack.map((item) => (
                  <span key={item} className="rounded-full bg-white/70 px-3 py-1.5 text-sm font-semibold">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
