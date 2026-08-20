"use client";

import { motion, Variants } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/profile";
import SectionHeading from "./SectionHeading";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="relative w-full py-20 md:py-28">
      <div className="mx-auto w-[90%] max-w-7xl">
        <SectionHeading
          eyebrow="03 / Experience"
          title="Professional experience"
          subtitle="Production systems with real users, real payments, and real uptime pressure."
        />

        <div className="relative mt-14">
          {/* Timeline rail */}
          <div className="absolute top-2 bottom-2 left-[11px] hidden w-px bg-gradient-to-b from-[#5B9DF9]/50 via-[#D3D3D3]/10 to-transparent md:block" />

          <div className="flex flex-col gap-6">
            {experience.map((job, index) => (
              <motion.article
                key={`${job.company}-${index}`}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="relative md:pl-14"
              >
                {/* Timeline node */}
                <span className="absolute top-8 left-0 hidden md:block">
                  <span
                    className={`relative flex h-6 w-6 items-center justify-center rounded-full border
                      ${
                        job.current
                          ? "border-[#5B9DF9]/50 bg-[#5B9DF9]/15"
                          : "border-[#D3D3D3]/15 bg-[#202020]"
                      }`}
                  >
                    {job.current && (
                      <span className="absolute h-6 w-6 animate-ping rounded-full bg-[#5B9DF9]/20" />
                    )}
                    <Briefcase
                      className={`h-3 w-3 ${job.current ? "text-[#5B9DF9]" : "text-[#757575]"}`}
                    />
                  </span>
                </span>

                <div
                  className="group rounded-2xl border border-[#D3D3D3]/10 bg-[#202020] p-6 transition-all
                             duration-300 hover:border-[#5B9DF9]/25 hover:bg-[#232323] sm:p-8"
                >
                  {/* Header */}
                  <div className="flex flex-col gap-3 border-b border-[#D3D3D3]/[0.08] pb-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#EDEDED] sm:text-xl">
                        {job.role}
                        {job.employment && (
                          <span className="ml-2 font-mono text-xs font-normal text-[#757575]">
                            ({job.employment})
                          </span>
                        )}
                      </h3>
                      <p className="mt-1.5 flex flex-wrap items-center gap-2 text-sm">
                        <span className="font-semibold text-[#5B9DF9]">{job.company}</span>
                        {job.meta && (
                          <>
                            <span className="text-[#4a4a4a]">·</span>
                            <span className="font-mono text-[11px] text-[#8A8A8A]">
                              {job.meta}
                            </span>
                          </>
                        )}
                      </p>
                    </div>

                    <span
                      className={`inline-flex shrink-0 items-center gap-2 self-start rounded-full border px-3 py-1.5 font-mono text-[11px]
                        ${
                          job.current
                            ? "border-[#7DD3C0]/30 bg-[#7DD3C0]/[0.08] text-[#7DD3C0]"
                            : "border-[#D3D3D3]/10 bg-[#282828] text-[#8A8A8A]"
                        }`}
                    >
                      {job.current && (
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7DD3C0]" />
                      )}
                      {job.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="mt-5 space-y-3.5">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3.5">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-[#5B9DF9]/60" />
                        <p className="text-[13.5px] leading-relaxed text-[#A2A2A2] sm:text-sm">
                          {bullet}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-[#D3D3D3]/[0.08] pt-5">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[#282828] px-2.5 py-1 font-mono text-[10.5px] text-[#8A8A8A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
