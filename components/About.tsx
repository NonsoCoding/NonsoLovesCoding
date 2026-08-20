"use client";

import { motion, Variants } from "framer-motion";
import { Award, Brain, GraduationCap, Server, Workflow } from "lucide-react";
import { certifications, education, profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    icon: Brain,
    title: "AI that ships",
    body: "LLM agents, RAG pipelines, fine-tuning and generative workflows — built to survive real users, not just a demo notebook.",
  },
  {
    icon: Server,
    title: "Backend discipline",
    body: "FastAPI, Django REST, and TypeScript services with auth, payments, WebSockets, tests, and OpenAPI docs behind live apps.",
  },
  {
    icon: Workflow,
    title: "Production ops",
    body: "Docker, Celery, Nginx/TLS, Cloud Run, and kill-switch gated pipelines — safe live patching on systems that can't go down.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const About = () => {
  return (
    <section id="about" className="relative w-full py-20 md:py-28">
      <div className="mx-auto w-[90%] max-w-7xl">
        <SectionHeading
          eyebrow="01 / About"
          title="Profile"
          subtitle="Where the AI work and the backend work meet"
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* ---------- Summary ---------- */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl border border-[#D3D3D3]/10 bg-[#202020] p-7 sm:p-9">
              <span className="absolute top-0 left-8 h-px w-24 bg-gradient-to-r from-[#5B9DF9] to-transparent" />
              <p className="font-mono text-[11px] tracking-widest text-[#5B9DF9] uppercase">
                Professional summary
              </p>
              <p className="mt-5 text-[15px] leading-[1.85] text-[#B8B8B8] sm:text-base">
                {profile.summary}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 border-t border-[#D3D3D3]/10 pt-7 sm:grid-cols-3">
                {[
                  { k: "Focus", v: "LLMs · GenAI · APIs" },
                  { k: "Languages", v: profile.languages },
                  { k: "Based in", v: profile.locationShort },
                ].map((row) => (
                  <div key={row.k}>
                    <p className="font-mono text-[10px] tracking-widest text-[#757575] uppercase">
                      {row.k}
                    </p>
                    <p className="mt-1.5 text-sm text-[#D3D3D3]">{row.v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pillars */}
            <motion.div
              className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    variants={itemVariants}
                    className="group rounded-xl border border-[#D3D3D3]/10 bg-[#1d1d1d] p-5
                               transition-all duration-300 hover:-translate-y-1 hover:border-[#5B9DF9]/30"
                  >
                    <Icon className="h-5 w-5 text-[#5B9DF9] transition-transform duration-300 group-hover:scale-110" />
                    <p className="mt-4 text-sm font-semibold text-[#EDEDED]">{pillar.title}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#8A8A8A]">
                      {pillar.body}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ---------- Education + Certifications ---------- */}
          <motion.div
            className="flex flex-col gap-6 lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {/* Education */}
            <div className="rounded-2xl border border-[#D3D3D3]/10 bg-[#202020] p-7">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-[#7DD3C0]" />
                <p className="font-mono text-[11px] tracking-widest text-[#7DD3C0] uppercase">
                  Education
                </p>
              </div>
              <div className="mt-6 space-y-6">
                {education.map((item) => (
                  <div key={item.course} className="relative border-l border-[#D3D3D3]/10 pl-5">
                    <span className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-[#7DD3C0]" />
                    <p className="text-sm font-semibold text-[#EDEDED]">{item.course}</p>
                    <p className="mt-1 text-[13px] text-[#8A8A8A]">{item.school}</p>
                    <p className="mt-1 font-mono text-[11px] text-[#757575]">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-2xl border border-[#D3D3D3]/10 bg-[#202020] p-7">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-[#5B9DF9]" />
                <p className="font-mono text-[11px] tracking-widest text-[#5B9DF9] uppercase">
                  Certifications
                </p>
              </div>
              <div className="mt-6 space-y-6">
                {certifications.map((item) => (
                  <div key={item.name} className="relative border-l border-[#D3D3D3]/10 pl-5">
                    <span className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-[#5B9DF9]" />
                    <p className="text-sm font-semibold text-[#EDEDED]">{item.name}</p>
                    <p className="mt-1 text-[13px] text-[#8A8A8A]">{item.provider}</p>
                    <p className="mt-1 font-mono text-[11px] text-[#757575]">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
