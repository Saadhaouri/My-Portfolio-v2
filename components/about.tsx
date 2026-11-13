"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { services } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { fadeUp, stagger } from "./reveal";

export default function About() {
  const { ref } = useSectionInView("About", 0.3);

  return (
    <section ref={ref} id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="What I do"
          title="From the first screen to the last migrated invoice"
          description="I work where software meets day-to-day business: building the tools teams use every day and moving their data safely from one system to the next."
        />

        <motion.ul
          className="grid gap-5 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger(0.12)}
        >
          {services.map((s, i) => (
            <motion.li
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="card group relative overflow-hidden p-7"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-400 to-gold-300 transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="mb-5 flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-800 text-gold-400 transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110 dark:bg-gold-400/10">
                  <Icon icon={s.icon} className="text-2xl" aria-hidden="true" />
                </span>
                <span className="font-display text-sm font-semibold text-navy-200 dark:text-white/20">0{i + 1}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-navy-200">{s.description}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-navy-700 dark:text-navy-100">
                    <Icon icon="ph:check-circle-fill" className="shrink-0 text-gold-400" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
