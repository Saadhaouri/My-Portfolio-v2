"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section ref={ref} id="experience" className="scroll-mt-24 bg-white/60 py-20 dark:bg-white/[0.015] sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          description="From an internship on WinForms apps to leading ERP migrations for French clients."
        />

        <ol ref={listRef} className="relative mx-auto max-w-3xl">
          {/* Track + scroll-linked fill */}
          <div aria-hidden="true" className="absolute bottom-2 left-[11px] top-2 w-0.5 rounded bg-navy-100 dark:bg-white/10 sm:left-[15px]" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute bottom-2 left-[11px] top-2 w-0.5 origin-top rounded bg-gradient-to-b from-gold-400 to-gold-300 sm:left-[15px]"
          />

          {experiencesData.map((item, i) => (
            <motion.li
              key={item.company + item.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
              className="relative pb-10 pl-10 last:pb-0 sm:pl-14"
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1.5 grid h-6 w-6 place-items-center rounded-full border-4 border-[#F7F9FC] dark:border-navy-950 sm:h-8 sm:w-8 ${
                  item.current ? "bg-gold-400" : "bg-navy-700 dark:bg-navy-400"
                }`}
              >
                {item.current && <span className="absolute inset-0 animate-ping rounded-full bg-gold-400/50" />}
              </span>

              <motion.article
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="card p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold leading-snug text-navy-900 dark:text-white">{item.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-navy-500 dark:text-gold-300">
                      {item.company} <span className="font-normal text-navy-400 dark:text-navy-300">· {item.place}</span>
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                      item.current
                        ? "bg-gold-100 text-gold-600 dark:bg-gold-400/[0.15] dark:text-gold-300"
                        : "bg-navy-50 text-navy-600 dark:bg-white/5 dark:text-navy-200"
                    }`}
                  >
                    {item.date}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {item.points.map((p) => (
                    <li key={p} className="relative pl-4 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
                      <span aria-hidden="true" className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-gold-400" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
