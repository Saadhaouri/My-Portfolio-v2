"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger(0.1)}
    >
      <motion.p
        variants={fadeUp}
        className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 dark:text-gold-400"
      >
        <span className="h-px w-6 bg-gold-400" aria-hidden="true" />
        {eyebrow}
        <span className="h-px w-6 bg-gold-400" aria-hidden="true" />
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="font-display text-3xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-navy-500 dark:text-navy-200">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
