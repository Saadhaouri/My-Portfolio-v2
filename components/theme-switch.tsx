"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { useTheme } from "@/context/theme-context";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-5 right-5 z-[900] grid h-12 w-12 place-items-center overflow-hidden rounded-full border border-navy-100 bg-white/90 text-navy-800 shadow-xl shadow-navy-900/10 backdrop-blur dark:border-white/10 dark:bg-navy-800/90 dark:text-gold-300"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.25 }}
        >
          {theme === "light" ? <BsSun size={18} aria-hidden="true" /> : <BsMoonStars size={17} aria-hidden="true" />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
