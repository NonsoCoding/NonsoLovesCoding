"use client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  PhoneIcon,
} from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { profile } from "@/data/profile";

const Footer = () => {
  const NavItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#tech-stack" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const SocialsIcon = [
    { icon: Github, link: profile.github, label: "GitHub" },
    { icon: Linkedin, link: "https://www.linkedin.com/", label: "LinkedIn" },
    { icon: Mail, link: `mailto:${profile.email}`, label: "Email" },
  ];

  const contactInfo = [
    { icon: PhoneIcon, text: profile.phone, link: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: Mail, text: profile.email, link: `mailto:${profile.email}` },
    { icon: MapPin, text: profile.location, link: "" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <footer id="contact" className="relative mt-20 w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#161616] to-[#0d0d0d]" />
      <div className="dot-bg absolute inset-0 opacity-30" />
      <motion.div
        className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-[#5B9DF9]/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" as const }}
      />
      <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-[#5B9DF9]/[0.08] blur-[110px]" />

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl pt-20 pb-14">
        {/* ---------- CTA band ---------- */}
        <motion.div
          className="mb-16 flex flex-col items-start gap-7 rounded-2xl border border-[#D3D3D3]/10
                     bg-gradient-to-br from-[#202020] to-[#1a1a1a] p-8 sm:p-11 lg:flex-row lg:items-center lg:justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] tracking-[0.2em] text-[#5B9DF9] uppercase">
              05 / Contact
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#EDEDED] sm:text-3xl md:text-4xl">
              Got a model that needs to reach production?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#8A8A8A]">
              Available for AI engineering, agent ops, and backend architecture work — from
              LLM pipelines to the APIs and infrastructure that keep them running.
            </p>
          </div>

          <motion.a
            href={`mailto:${profile.email}?subject=Project%20Inquiry`}
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#EDEDED] px-7 py-4
                     text-sm font-bold text-[#191919] transition-all duration-300
                     hover:shadow-[0_0_40px_rgba(91,157,249,0.4)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>

        {/* ---------- Columns ---------- */}
        <motion.div
          className="mb-12 grid grid-cols-1 gap-12 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Brand */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#5B9DF9]/30
                           bg-gradient-to-br from-[#5B9DF9]/20 to-[#7DD3C0]/10 font-mono text-sm font-bold text-[#9FC7FF]"
              >
                JS
              </span>
              <div className="leading-tight">
                <h3 className="text-lg font-bold text-[#EDEDED]">
                  Johnson<span className="text-[#5B9DF9]">Samuel</span>
                </h3>
                <p className="font-mono text-[10px] tracking-wider text-[#757575]">
                  {profile.title}
                </p>
              </div>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-[#8A8A8A]">
              {profile.tagline} — taking models from prototype to production.
            </p>

            <div className="flex gap-3">
              {SocialsIcon.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.link}
                    target={item.link.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border
                             border-[#D3D3D3]/10 bg-[#2A2A2A] transition-all duration-300
                             hover:border-[#5B9DF9]/50 hover:bg-[#5B9DF9]/10"
                    aria-label={item.label}
                    whileHover={{ y: -3 }}
                  >
                    <Icon className="h-5 w-5 text-[#A7A7A7] transition-colors duration-300 group-hover:text-[#9FC7FF]" />
                  </motion.a>
                );
              })}
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#7DD3C0]/25 bg-[#7DD3C0]/[0.07] px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7DD3C0]" />
              <span className="font-mono text-[10px] tracking-wider text-[#7DD3C0]">
                {profile.upwork}
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="font-mono text-[11px] tracking-[0.2em] text-[#757575] uppercase">
              Navigate
            </h3>
            <nav className="grid grid-cols-2 gap-3.5">
              {NavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="group flex items-center gap-2 text-sm text-[#8A8A8A] transition-all duration-300 hover:text-[#EDEDED]"
                >
                  <span className="h-px w-0 bg-[#5B9DF9] transition-all duration-300 group-hover:w-3" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="font-mono text-[11px] tracking-[0.2em] text-[#757575] uppercase">
              Get in touch
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#5B9DF9]" />
                    <span className="text-sm leading-relaxed">{item.text}</span>
                  </>
                );

                return item.link ? (
                  <motion.a
                    key={item.text}
                    href={item.link}
                    className="group flex items-start gap-3 text-[#8A8A8A] transition-all duration-300 hover:text-[#EDEDED]"
                    whileHover={{ x: 4 }}
                  >
                    {content}
                  </motion.a>
                ) : (
                  <div key={item.text} className="flex items-start gap-3 text-[#8A8A8A]">
                    {content}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="relative my-10 h-px"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D3D3D3]/15 to-transparent" />
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-center font-mono text-xs text-[#575757] md:text-left">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          <p className="font-mono text-xs text-[#575757]">
            Built with Next.js, TypeScript &amp; Tailwind
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
