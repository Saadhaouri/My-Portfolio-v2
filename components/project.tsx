"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Icon } from "@iconify/react";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import type { Project as ProjectType } from "@/lib/data";
import { fadeUp } from "./reveal";

export default function Project({
  title,
  subtitle,
  description,
  icons,
  tags,
  imageUrl,
  placeholderIcon,
  githubLink,
  urlLink,
  className = "",
}: ProjectType & { className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mx}px ${my}px, rgba(227,176,75,0.14), transparent 70%)`;

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      onMouseLeave={() => {
        mx.set(-200);
        my.set(-200);
      }}
      className={`card group relative flex h-full flex-col overflow-hidden ${className}`}
    >
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10" style={{ background: spotlight }} />

      {/* Visual */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`Screenshot of ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(circle,black,transparent_75%)]" />
            <div className="relative grid h-20 w-20 place-items-center rounded-2xl bg-white/10 text-gold-300 ring-1 ring-white/[0.15] backdrop-blur transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
              <Icon icon={placeholderIcon ?? "ph:code-duotone"} className="text-4xl" aria-hidden="true" />
            </div>
          </div>
        )}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white">{title}</h3>
            <p className="text-sm font-medium text-gold-500 dark:text-gold-300">{subtitle}</p>
          </div>
          <ul className="flex shrink-0 items-center -space-x-1.5" aria-label="Built with">
            {icons.map((icon) => (
              <li
                key={icon}
                className="grid h-8 w-8 place-items-center rounded-full border border-navy-100 bg-white dark:border-white/10 dark:bg-navy-800"
              >
                <Icon icon={icon} className="text-base text-[#714B67] dark:text-[#c79bbd]" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600 dark:text-navy-200">{description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        {(urlLink || githubLink) && (
          <div className="relative z-20 mt-5 flex gap-2 border-t border-navy-100 pt-4 dark:border-white/10">
            {urlLink && (
              <a
                href={urlLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo of ${title}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-navy-800 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy-700 dark:bg-gold-400 dark:text-navy-900 dark:hover:bg-gold-300"
              >
                <BiLinkExternal aria-hidden="true" /> Live demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Source code of ${title} on GitHub`}
                className="inline-flex items-center gap-1.5 rounded-full border border-navy-200 px-4 py-2 text-xs font-semibold text-navy-700 transition-colors hover:border-navy-400 dark:border-white/[0.15] dark:text-navy-100 dark:hover:border-white/40"
              >
                <AiFillGithub aria-hidden="true" /> Code
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
