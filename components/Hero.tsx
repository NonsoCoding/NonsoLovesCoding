"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, MapPin, Terminal } from "lucide-react";
import { profile, stats } from "@/data/profile";

const Hero = () => {
  // "Role", 2000, "Next role", 2000, ... for the type animation
  const roleSequence = profile.roles.flatMap((role) => [role, 2000]);

  return (
    <section id="home" className="relative w-full overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28">
      {/* Blueprint grid + accent bloom */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#5B9DF9]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[380px] w-[380px] rounded-full bg-[#7DD3C0]/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#191919]" />

      <div className="relative z-10 mx-auto flex w-[90%] max-w-7xl flex-col items-center gap-14 lg:flex-row lg:gap-16">
        {/* ---------- Copy ---------- */}
        <motion.div
          className="w-full lg:w-[58%]"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Availability pill */}
          <motion.div
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#5B9DF9]/25 bg-[#5B9DF9]/[0.07] px-4 py-1.5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7DD3C0] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7DD3C0]" />
            </span>
            <span className="font-mono text-[11px] tracking-wider text-[#9FC7FF] uppercase">
              Shipping AI systems in production
            </span>
          </motion.div>

          <motion.p
            className="mb-2 font-mono text-sm text-[#A7A7A7]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            className="text-4xl font-bold leading-[1.05] tracking-tight text-[#EDEDED] sm:text-5xl lg:text-[4.25rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Johnson Samuel
            <br />
            <span className="bg-gradient-to-r from-[#5B9DF9] via-[#7DD3C0] to-[#5B9DF9] bg-clip-text text-transparent">
              Oluwatoyosi
            </span>
          </motion.h1>

          {/* Typed role line */}
          <motion.div
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Terminal className="h-5 w-5 shrink-0 text-[#5B9DF9]" />
            <span className="font-mono text-[#757575]">~$</span>
            <TypeAnimation
              sequence={roleSequence}
              wrapper="span"
              className="font-mono font-medium text-[#EDEDED]"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#A7A7A7] sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I build and ship intelligent systems end to end — from{" "}
            <span className="text-[#D3D3D3]">LLM agents and RAG pipelines</span> to the{" "}
            <span className="text-[#D3D3D3]">production backends</span> that power them.
            Deep AI knowledge with the backend discipline to take models from prototype to
            production.
          </motion.p>

          {/* Meta row */}
          <motion.div
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-[#757575]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.68 }}
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              {profile.locationShort}
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-[#D3D3D3]"
            >
              <Github className="h-3.5 w-3.5" />
              {profile.githubHandle}
            </a>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7DD3C0]" />
              {profile.upwork}
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.78 }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#EDEDED] px-6 py-3.5 text-sm font-semibold text-[#191919]
                         transition-all duration-300 hover:shadow-[0_0_36px_rgba(91,157,249,0.35)]"
            >
              View my work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[#D3D3D3]/15 bg-[#2A2A2A]/60 px-6 py-3.5 text-sm font-semibold text-[#D3D3D3]
                         transition-all duration-300 hover:border-[#5B9DF9]/40 hover:bg-[#5B9DF9]/[0.08] hover:text-white"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        {/* ---------- Portrait ---------- */}
        <motion.div
          className="w-full max-w-sm lg:w-[42%] lg:max-w-none"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative mx-auto max-w-md">
            {/* Glow behind the frame */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#5B9DF9]/20 via-transparent to-[#7DD3C0]/20 blur-2xl" />

            {/* Terminal-style frame */}
            <div className="relative overflow-hidden rounded-2xl border border-[#D3D3D3]/10 bg-[#202020] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-[#D3D3D3]/10 bg-[#282828] px-4 py-2.5">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                <span className="ml-2 font-mono text-[11px] text-[#757575]">
                  samuel@production ~ %
                </span>
              </div>
              <img
                className="w-full object-cover"
                src="./pfp.jpeg"
                alt="Johnson Samuel Oluwatoyosi"
              />
              <div className="border-t border-[#D3D3D3]/10 bg-[#1c1c1c] px-4 py-3 font-mono text-[11px] leading-relaxed">
                <p className="text-[#757575]">
                  <span className="text-[#7DD3C0]">$</span> whoami
                </p>
                <p className="text-[#D3D3D3]">{profile.title}</p>
                <p className="text-[#5B9DF9]">{profile.tagline}</p>
              </div>
            </div>

            {/* Corner accents */}
            <div className="pointer-events-none absolute -top-2 -left-2 h-8 w-8 rounded-tl-xl border-t-2 border-l-2 border-[#5B9DF9]/50" />
            <div className="pointer-events-none absolute -right-2 -bottom-2 h-8 w-8 rounded-br-xl border-r-2 border-b-2 border-[#7DD3C0]/50" />
          </div>
        </motion.div>
      </div>

      {/* ---------- Stat strip ---------- */}
      <motion.div
        className="relative z-10 mx-auto mt-16 w-[90%] max-w-7xl md:mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        <div className="grid grid-cols-2 divide-[#D3D3D3]/10 overflow-hidden rounded-2xl border border-[#D3D3D3]/10 bg-[#202020]/70 backdrop-blur-sm sm:grid-cols-4 sm:divide-x">
          {stats.map((stat) => (
            <div key={stat.label} className="px-5 py-6 text-center sm:px-6">
              <p className="text-2xl font-bold text-[#EDEDED] sm:text-3xl">{stat.value}</p>
              <p className="mt-1.5 text-[11px] leading-snug text-[#757575] sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
