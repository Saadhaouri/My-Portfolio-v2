"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[1100] h-[3px] origin-left bg-gradient-to-r from-gold-400 via-gold-300 to-navy-400"
      style={{ scaleX }}
    />
  );
}
