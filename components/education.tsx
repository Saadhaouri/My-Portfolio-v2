"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { certificationsData, educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { fadeUp, stagger } from "./reveal";

export default function Education() {
  const { ref } = useSectionInView("Education", 0.3);

  return (
    <section ref={ref} id="education" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Learning" title="Education & certifications" />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger(0.1)}
            className="space-y-4"
          >
            {educationData.map((e, i) => (
              <motion.li key={e.title} variants={fadeUp} whileHover={{ x: 4 }} className="card flex gap-5 p-6">
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${
                    i === 0 ? "bg-gold-400 text-navy-900" : "bg-navy-800 text-gold-400 dark:bg-white/5"
                  }`}
                >
                  <Icon icon={i === 1 ? "ph:scales-duotone" : "ph:graduation-cap-duotone"} className="text-2xl" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-display text-base font-semibold text-navy-900 dark:text-white">{e.title}</h3>
                    {e.date && (
                      <span className="rounded-full bg-navy-50 px-3 py-0.5 text-xs font-semibold text-navy-600 dark:bg-white/5 dark:text-navy-200">
                        {e.date}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-gold-500 dark:text-gold-300">{e.school}</p>
                  <p className="mt-2 text-sm text-navy-500 dark:text-navy-200">{e.note}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger(0.12, 0.15)}
            className="relative overflow-hidden rounded-2xl bg-navy-800 p-7 text-white shadow-xl shadow-navy-900/20 dark:bg-navy-900 dark:ring-1 dark:ring-white/10"
          >
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-400/20 blur-2xl" />
            <motion.h3 variants={fadeUp} className="relative flex items-center gap-2 font-display text-lg font-semibold">
              <Icon icon="ph:seal-check-duotone" className="text-2xl text-gold-400" aria-hidden="true" />
              Certifications
            </motion.h3>
            <ul className="relative mt-6 space-y-4">
              {certificationsData.map((c) => (
                <motion.li
                  key={c.title}
                  variants={fadeUp}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/10 text-gold-300">
                    <Icon icon={c.icon} className="text-xl" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold leading-snug">{c.title}</p>
                    <p className="text-sm text-navy-200">{c.issuer}</p>
                  </div>
                  <span className="rounded-full bg-gold-400 px-2.5 py-0.5 text-xs font-bold text-navy-900">{c.date}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div variants={fadeUp} className="relative mt-8 border-t border-white/10 pt-6">
              <p className="text-sm font-semibold text-gold-300">Languages</p>
              <div className="mt-3 space-y-3">
                {[
                  { name: "Arabic", level: "Native", pct: 100 },
                  { name: "French", level: "Professional", pct: 85 },
                  { name: "English", level: "B2", pct: 72 },
                ].map((l) => (
                  <div key={l.name}>
                    <div className="flex justify-between text-sm">
                      <span>{l.name}</span>
                      <span className="text-navy-200">{l.level}</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-gold-400 to-gold-300"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
