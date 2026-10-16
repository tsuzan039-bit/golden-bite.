"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AnimatedHeroTitle() {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="font-display text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-[5rem]"
    >
      {/* السطر الأول */}
      <span className="block">
        {["Great", "Taste."].map((w) => (
          <motion.span
            key={w}
            variants={word}
            className="mr-4 inline-block"
          >
            {w}
          </motion.span>
        ))}
      </span>

      {/* السطر الثاني الذهبي + لمعة */}
      <span className="block">
        {["Golden", "Moments."].map((w) => (
          <motion.span
            key={w}
            variants={word}
            className="gold-shine mr-4 inline-block"
          >
            {w}
          </motion.span>
        ))}
      </span>
    </motion.h1>
  );
}