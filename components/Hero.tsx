"use client";

import { TypeAnimation } from "react-type-animation";
import { motion, Variants } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";

const stats = [
  { value: "3+", label: "Years shipping" },
  { value: "4", label: "Apps in stores" },
  { value: "10+", label: "Products built" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 * i, ease: "easeOut" as const },
  }),
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full scroll-mt-24 overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-accent/10 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-48 -left-32 w-[460px] h-[460px] rounded-full bg-accent-2/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-[90%] max-w-6xl flex flex-col lg:flex-row gap-14 lg:gap-16 items-center">
        {/* Copy */}
        <div className="w-full lg:w-[58%] text-center lg:text-left">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-accent-2 opacity-70 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-accent-2" />
            </span>
            <span className="text-xs font-medium tracking-wide text-accent">
              Available for new projects
            </span>
          </motion.div>

          <motion.p
            className="font-mono text-sm tracking-[0.2em] uppercase text-ink-3 mb-3"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight text-ink leading-[1.05]"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Chukwunonso{" "}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              Obi
            </span>
          </motion.h1>

          <motion.p
            className="mt-3 text-xl md:text-2xl font-semibold text-ink-2"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            Mobile Engineer &amp; Solutions Architect
          </motion.p>

          <motion.div
            className="mt-4 text-lg md:text-xl text-ink-3 min-h-[1.75rem]"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <span>I build </span>
            <TypeAnimation
              sequence={[
                "cross-platform mobile apps",
                2000,
                "real-time logistics interfaces",
                2000,
                "multi-tenant SaaS architecture",
                2000,
                "CI/CD pipelines with EAS Build",
                2000,
              ]}
              wrapper="span"
              className="text-accent font-medium"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            className="mt-6 text-base text-ink-3 leading-relaxed max-w-xl mx-auto lg:mx-0"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            I turn complex business requirements into high-performing mobile and
            web applications — React Native, Expo and TypeScript, taken from
            system design through to a live App Store and Play Console release.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold
                         bg-accent text-accent-ink
                         transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
            >
              View my work
              <ArrowDown
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="mailto:timothyobi494@gmail.com?subject=Project%20Inquiry"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold
                         border border-line/20 text-ink bg-surface
                         transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <Mail size={17} />
              Get in touch
            </a>
          </motion.div>

          {/* Location */}
          <motion.p
            className="mt-6 inline-flex items-center gap-2 text-sm text-ink-3"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={7}
          >
            <MapPin size={15} className="text-accent" />
            Abuja, Nigeria — open to remote
          </motion.p>

          {/* Stats */}
          <motion.dl
            className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={8}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-line/10 bg-surface px-4 py-4 text-center lg:text-left card-shadow"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl md:text-3xl font-bold text-ink">
                    {stat.value}
                  </span>
                  <span className="block text-xs text-ink-3 mt-1 leading-tight">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Portrait */}
        <motion.div
          className=" sm:w-[55%] lg:w-[42%] relative"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-accent/25 via-transparent to-accent-2/25 blur-2xl" />
          <div className="relative rounded-3xl border border-line/15 bg-surface p-2 card-shadow">
            <img
              className="w-full object-cover rounded-2xl"
              src="/pfp.jpeg"
              alt="Portrait of Chukwunonso Obi"
            />
          </div>
          <div className="absolute -bottom-4 -right-2 md:-right-5 rounded-xl border border-line/15 bg-surface px-4 py-3 card-shadow">
            <p className="font-mono text-[11px] tracking-wider text-accent">
              React Native · Expo
            </p>
            <p className="text-xs text-ink-3 mt-0.5">iOS &amp; Android</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
