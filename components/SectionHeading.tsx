"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

/** Shared section header so every band on the page reads the same. */
const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) => {
  const centered = align === "center";

  return (
    <motion.div
      className={`flex flex-col gap-3 ${centered ? "items-center text-center" : "items-start"}`}
      initial={{ opacity: 0, y: -24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-[#5B9DF9]" />
        <p className="font-mono text-[11px] tracking-[0.2em] text-[#5B9DF9] uppercase">
          {eyebrow}
        </p>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-[#EDEDED] sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>

      {subtitle && (
        <p className={`text-[15px] text-[#8A8A8A] ${centered ? "max-w-2xl" : "max-w-xl"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
