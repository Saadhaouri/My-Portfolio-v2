"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, animate, motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMapPin } from "react-icons/hi2";
import personalPhoto from "@/public/personalphoto.jpg";
import { profile, stats } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { fadeUp, stagger } from "./reveal";

const orbit = [
  { icon: "logos:dotnet", className: "left-[-6%] top-[14%]", delay: 0 },
  { icon: "logos:react", className: "right-[-4%] top-[6%]", delay: 1.2 },
  { icon: "simple-icons:odoo", className: "right-[-8%] bottom-[22%] text-[#714B67] dark:text-[#c79bbd]", delay: 2.1 },
  { icon: "devicon:microsoftsqlserver", className: "left-[-2%] bottom-[8%]", delay: 0.7 },
];

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-flex h-[1.5em] items-center overflow-hidden align-bottom leading-[1.5]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={profile.roles[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="whitespace-nowrap bg-gradient-to-r from-gold-500 to-gold-300 bg-clip-text text-transparent"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="relative isolate scroll-mt-28 pb-20 pt-32 sm:pt-40 lg:pb-28">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
        <div className="animate-blob absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-gold-300/30 blur-3xl dark:bg-gold-400/10" />
        <div className="animate-blob absolute left-[-12%] top-40 h-[26rem] w-[26rem] rounded-full bg-navy-300/30 blur-3xl [animation-delay:-6s] dark:bg-navy-500/20" />
      </div>

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div initial="hidden" animate="show" variants={stagger(0.1, 0.15)} className="text-center lg:text-left">
          <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to new projects
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-100 bg-white/70 px-3 py-1 text-xs font-medium text-navy-600 dark:border-white/10 dark:bg-white/5 dark:text-navy-200">
              <HiOutlineMapPin aria-hidden="true" /> {profile.location}
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="font-display text-lg font-medium text-navy-500 dark:text-navy-200">
            Hi, I&apos;m Saad Haouri 👋
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-2 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            <span className="block">I build software</span>
            <span className="block">businesses run on.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 font-display text-xl font-semibold text-navy-700 dark:text-navy-100 sm:text-2xl"
          >
            <RotatingRole />
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-500 dark:text-navy-200 sm:text-lg lg:mx-0"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#projects"
                className="btn-primary group"
                onClick={() => {
                  setActiveSection("Projects");
                  setTimeOfLastClick(Date.now());
                }}
              >
                See my work
                <HiArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </motion.div>
            <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href={profile.cv} download="Saad-Haouri-Resume.pdf" className="btn-ghost group">
              Download CV
              <HiDownload className="transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </motion.a>
            <div className="flex items-center gap-2">
              {[
                { href: profile.github, label: "GitHub", icon: <FaGithub size={18} /> },
                { href: profile.linkedin, label: "LinkedIn", icon: <FaLinkedinIn size={17} /> },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, rotate: -6 }}
                  whileTap={{ scale: 0.92 }}
                  className="grid h-11 w-11 place-items-center rounded-full border border-navy-200 bg-white/70 text-navy-700 backdrop-blur transition-colors hover:border-gold-400 hover:text-navy-900 dark:border-white/[0.15] dark:bg-white/5 dark:text-navy-100 dark:hover:text-gold-300"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.dl variants={fadeUp} className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-4 lg:mx-0">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-gold-400 pl-3 text-left">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold text-navy-900 dark:text-white">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <dd className="mt-0.5 text-xs leading-snug text-navy-500 dark:text-navy-300">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.25 }}
          className="relative mx-auto aspect-square w-full max-w-[19rem] sm:max-w-[22rem]"
        >
          <div
            aria-hidden="true"
            className="animate-spin-slow absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#E3B04B,transparent_30%,#2C4D78_55%,transparent_75%,#E3B04B)] opacity-80"
          />
          <div className="absolute inset-[6px] overflow-hidden rounded-full border-[6px] border-[#F7F9FC] bg-navy-800 shadow-2xl shadow-navy-900/30 dark:border-navy-950">
            <Image
              src={personalPhoto}
              alt="Portrait of Saad Haouri"
              priority
              quality={95}
              sizes="(max-width: 640px) 19rem, 22rem"
              className="h-full w-full object-cover"
            />
          </div>

          {orbit.map((o) => (
            <motion.div
              key={o.icon}
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + o.delay * 0.15, type: "spring", stiffness: 200, damping: 14 }}
              className={`absolute ${o.className}`}
            >
              <div
                className="animate-float grid h-14 w-14 place-items-center rounded-2xl border border-navy-100 bg-white shadow-xl shadow-navy-900/10 dark:border-white/10 dark:bg-navy-800"
                style={{ animationDelay: `${o.delay}s` }}
              >
                <Icon icon={o.icon} className="text-[28px]" />
              </div>
            </motion.div>
          ))}

          {/* Centered by the wrapper so the animated transform can't override it */}
          <div className="absolute inset-x-0 -bottom-4 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="card flex items-center gap-3 whitespace-nowrap px-4 py-2.5"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-navy-800 text-gold-400">
              <Icon icon="ph:briefcase-duotone" className="text-lg" aria-hidden="true" />
            </span>
            <span className="text-left leading-tight">
              <span className="block text-xs text-navy-500 dark:text-navy-300">Now at</span>
              <span className="block text-sm font-semibold text-navy-900 dark:text-white">OB Consulting Group</span>
            </span>
          </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
