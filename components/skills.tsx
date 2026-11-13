"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { skillGroups } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";

const ALL = "All";
const tabs = [ALL, ...skillGroups.map((g) => g.category)];

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.3);
  const [active, setActive] = useState(ALL);

  const skills = useMemo(() => {
    const groups = active === ALL ? skillGroups : skillGroups.filter((g) => g.category === active);
    return groups.flatMap((g) => g.skills.map((s) => ({ ...s, category: g.category })));
  }, [active]);

  return (
    <section ref={ref} id="skills" className="scroll-mt-24 bg-white/60 py-20 dark:bg-white/[0.015] sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills & tools"
          description="The stack I use day to day, from APIs and databases to ERP and the AI tools that speed up my work."
        />

        <Reveal className="mb-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-navy-100 bg-white p-1 shadow-sm [scrollbar-width:none] dark:border-white/10 dark:bg-white/5"
          >
            {tabs.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={active === t}
                onClick={() => setActive(t)}
                className={clsx(
                  "relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === t ? "text-white dark:text-navy-950" : "text-navy-500 hover:text-navy-900 dark:text-navy-200 dark:hover:text-white"
                )}
              >
                {active === t && (
                  <motion.span
                    layoutId="skills-tab"
                    className="absolute inset-0 -z-0 rounded-full bg-navy-800 dark:bg-gold-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{t}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.ul layout className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <AnimatePresence mode="popLayout" initial={false}>
            {skills.map((s, i) => (
              <motion.li
                layout
                key={s.category + s.name}
                initial={{ opacity: 0, scale: 0.85, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.025, 0.4) }}
                whileHover={{ y: -4 }}
                className="card group flex flex-col items-center gap-3 px-3 py-5 text-center"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 transition-transform duration-300 group-hover:scale-110 dark:bg-white/90">
                  <Icon
                    icon={s.icon}
                    className="text-[28px] text-navy-800"
                    style={s.color ? { color: s.color } : undefined}
                    aria-hidden="true"
                  />
                </span>
                <span className="text-sm font-medium leading-tight text-navy-800 dark:text-navy-100">{s.name}</span>
                <span className="text-[11px] uppercase tracking-wider text-navy-400 dark:text-navy-300">{s.category}</span>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
