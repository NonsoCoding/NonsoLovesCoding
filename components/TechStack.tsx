"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { skillGroups } from "@/data/profile";
import SectionHeading from "./SectionHeading";

// Marquee row — the headline technologies, always moving.
const tickerItems = [
  "OpenAI",
  "Claude",
  "LangGraph",
  "RAG",
  "FastAPI",
  "Django REST",
  "PostgreSQL",
  "Docker",
  "Celery",
  "PyTorch",
  "Stable Diffusion",
  "Pinecone",
  "Cloud Run",
  "Redis",
  "TypeScript",
  "Python",
  "YOLO",
  "Firestore",
  "n8n",
  "Paystack",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

const TechStack = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="tech-stack" className="relative w-full py-20 md:py-28">
      {/* Band background so the section separates from About */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#1d1d1d]/60 to-transparent" />

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        <SectionHeading
          eyebrow="02 / Capabilities"
          title="Core skills & technologies"
          subtitle="Ten disciplines, from model training and generative pipelines down to the infrastructure that keeps them online."
        />

        {/* ---------- Ticker ---------- */}
        <div className="marquee-mask relative mt-12 overflow-hidden py-1">
          <div className="animate-marquee flex w-max gap-3">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="shrink-0 rounded-full border border-[#D3D3D3]/10 bg-[#202020] px-4 py-2 font-mono text-xs whitespace-nowrap text-[#A7A7A7]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ---------- Capability matrix ---------- */}
        <motion.div
          className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillGroups.map((group, index) => {
            const isAccent = group.accent === "accent";
            const dot = isAccent ? "bg-[#5B9DF9]" : "bg-[#7DD3C0]";
            const ring = isAccent
              ? "hover:border-[#5B9DF9]/35 hover:shadow-[0_18px_50px_-24px_rgba(91,157,249,0.5)]"
              : "hover:border-[#7DD3C0]/35 hover:shadow-[0_18px_50px_-24px_rgba(125,211,192,0.45)]";

            const isOpen = expanded === group.key;
            const visible = isOpen ? group.items : group.items.slice(0, 8);
            const hidden = group.items.length - visible.length;

            return (
              <motion.div
                key={group.key}
                variants={cardVariants}
                className={`group flex flex-col rounded-2xl border border-[#D3D3D3]/10 bg-[#202020] p-6
                            transition-all duration-300 hover:-translate-y-1 ${ring}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                    <h3 className="text-[15px] font-semibold tracking-tight text-[#EDEDED]">
                      {group.label}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-[#575757]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {visible.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-[#D3D3D3]/[0.07] bg-[#282828] px-2.5 py-1.5
                                 font-mono text-[11px] leading-none text-[#A7A7A7]
                                 transition-colors duration-200 hover:border-[#D3D3D3]/20 hover:text-[#EDEDED]"
                    >
                      {item}
                    </span>
                  ))}

                  {hidden > 0 && (
                    <button
                      type="button"
                      onClick={() => setExpanded(group.key)}
                      className="cursor-pointer rounded-md border border-dashed border-[#D3D3D3]/15 px-2.5 py-1.5
                                 font-mono text-[11px] leading-none text-[#757575]
                                 transition-colors duration-200 hover:border-[#5B9DF9]/40 hover:text-[#5B9DF9]"
                    >
                      +{hidden} more
                    </button>
                  )}

                  {isOpen && (
                    <button
                      type="button"
                      onClick={() => setExpanded(null)}
                      className="cursor-pointer rounded-md border border-dashed border-[#D3D3D3]/15 px-2.5 py-1.5
                                 font-mono text-[11px] leading-none text-[#757575]
                                 transition-colors duration-200 hover:border-[#5B9DF9]/40 hover:text-[#5B9DF9]"
                    >
                      show less
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
