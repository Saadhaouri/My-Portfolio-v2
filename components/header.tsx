"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[1000] flex justify-center px-4 pt-3 sm:pt-5">
      <motion.nav
        aria-label="Main"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className={clsx(
          "relative flex w-full max-w-6xl items-center justify-between rounded-full border px-3 py-2 backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-300 sm:px-4",
          scrolled
            ? "border-navy-100 bg-white/80 shadow-lg shadow-navy-900/[0.06] dark:border-white/10 dark:bg-navy-900/75"
            : "border-transparent bg-transparent"
        )}
      >
        <Link
          href="#home"
          onClick={() => go("Home")}
          className="flex items-center gap-2.5 rounded-full pl-1 pr-2"
          aria-label="Saad Haouri, back to top"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-navy-800 font-display text-sm font-bold text-gold-400 dark:bg-gold-400 dark:text-navy-900">
            SH
          </span>
          <span className="hidden font-display text-sm font-semibold text-navy-900 dark:text-white sm:block">
            Saad Haouri
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links
            .filter((l) => l.name !== "Home")
            .map((link) => (
              <li key={link.hash} className="relative">
                <Link
                  href={link.hash}
                  onClick={() => go(link.name)}
                  className={clsx(
                    "relative block rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    activeSection === link.name
                      ? "text-navy-900 dark:text-navy-950"
                      : "text-navy-500 hover:text-navy-900 dark:text-navy-200 dark:hover:text-white"
                  )}
                >
                  {activeSection === link.name && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gold-100 dark:bg-gold-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              </li>
            ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link href="#contact" onClick={() => go("Contact")} className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            Hire me
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full text-navy-800 hover:bg-navy-50 dark:text-white dark:hover:bg-white/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="card absolute inset-x-0 top-[calc(100%+0.5rem)] origin-top p-2 lg:hidden"
            >
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    onClick={() => go(link.name)}
                    className={clsx(
                      "block rounded-xl px-4 py-3 text-sm font-medium",
                      activeSection === link.name
                        ? "bg-gold-100 text-navy-900 dark:bg-gold-400/[0.15] dark:text-gold-300"
                        : "text-navy-600 hover:bg-navy-50 dark:text-navy-100 dark:hover:bg-white/5"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
