"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, ReactNode } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { sectionKicker, skillGroups } from "@/data/portfolio";

function TiltCard({ children }: { children: ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 180, damping: 20 });

  function onMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ y: -8 }}
      className="premium-card h-full rounded-[28px] p-6"
    >
      {children}
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          kicker={sectionKicker.skills}
          title="A precise stack for designing, shipping, and scaling intelligent interfaces."
          copy="The stack changes when the problem asks for it. The principles stay steady: strong types, fast feedback, observable systems, and refined UI motion."
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={index * 0.05}>
                <TiltCard>
                  <div className="flex items-center gap-4">
                    <div className="grid size-12 place-items-center rounded-2xl bg-white text-violet shadow-sm">
                      <Icon size={21} />
                    </div>
                    <h3 className="text-2xl font-bold">{group.title}</h3>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/70 bg-white/58 px-3 py-1.5 text-sm font-medium text-graphite/78 shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
