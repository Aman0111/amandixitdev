"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import { cn, scrollToSection } from "@/lib/utils";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => setScrolled(latest > 18));
  }, [scrollY]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function goTo(id: string) {
    setOpen(false);
    scrollToSection(id);
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <motion.nav
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mx-auto flex h-[64px] max-w-6xl items-center justify-between rounded-full px-4 transition-all duration-300 sm:px-5",
          scrolled ? "glass shadow-glass" : "border border-white/60 bg-white/42 backdrop-blur-xl"
        )}
      >
        <button
          onClick={() => goTo("home")}
          className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-violet/40"
          aria-label="Go to home"
        >
          <span className="grid size-10 place-items-center rounded-full bg-ink text-sm font-bold text-white">
            {profile.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)}
          </span>
          <span className="hidden text-sm font-semibold text-ink sm:block">{profile.name}</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium text-graphite/70 transition hover:text-ink focus:outline-none focus:ring-2 focus:ring-violet/30",
                active === item.id && "text-ink"
              )}
            >
              {active === item.id ? (
                <motion.span
                  layoutId="active-section"
                  className="absolute inset-0 rounded-full bg-white/82 shadow-sm"
                  transition={{ type: "spring", stiffness: 360, damping: 34 }}
                />
              ) : null}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(event) => {
            event.preventDefault();
            goTo("contact");
          }}
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-ambient transition hover:bg-graphite md:inline-flex"
        >
          Hire Me
        </a>

        <button
          className="grid size-11 place-items-center rounded-full bg-white/75 text-ink shadow-sm lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="glass mx-auto mt-3 grid max-w-6xl gap-1 rounded-[28px] p-3 lg:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-left text-sm font-semibold text-graphite/75",
                  active === item.id && "bg-white text-ink"
                )}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
