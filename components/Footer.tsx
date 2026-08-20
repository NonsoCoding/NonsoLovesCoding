"use client";
import { Mail, MapPin, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const NavItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Tech Stack", link: "#tech-stack" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const SocialsIcon = [
    {
      socialIcon: "/github.svg",
      link: "https://github.com/NonsoCoding",
      label: "GitHub",
    },
    {
      socialIcon: "/linkdln.svg",
      link: "https://www.linkedin.com/in/chukwunonso-obi-b19b22244/",
      label: "LinkedIn",
    },
  ];

  const contactInfo = [
    { icon: PhoneIcon, text: "+234 9163440787", link: "tel:+2349163440787" },
    {
      icon: Mail,
      text: "timothyobi494@gmail.com",
      link: "mailto:timothyobi494@gmail.com",
    },
    {
      icon: MapPin,
      text: "Abuja, Nigeria",
      link: "https://www.google.com/maps/search/?api=1&query=Abuja,+Nigeria",
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const socialIconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const dividerVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <footer
      id="contact"
      className="w-full scroll-mt-24 relative overflow-hidden mt-32"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-canvas-2 via-canvas to-canvas-2" />

      {/* Decorative top wave */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" as const }}
      />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--dot) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-[90%] max-w-7xl mx-auto pt-8 pb-16">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Brand Section */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="group cursor-pointer inline-block">
              <h2 className="text-3xl font-bold text-ink group-hover:text-bright transition-colors duration-300">
                Nonso<span className="text-ink-3">LovesCoding</span>
              </h2>
              <div
                className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-ink to-ink-3 
                            transition-all duration-500 rounded-full mt-2"
              />
            </div>
            <p className="text-ink-3 text-sm leading-relaxed max-w-xs">
              Mobile Engineer &amp; Solutions Architect. I build cross-platform
              apps with React Native, Expo and TypeScript — from system design
              through to a live App Store and Play Console release.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {SocialsIcon.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 flex items-center justify-center
                           rounded-xl bg-elevated border border-ink/10
                           transition-all duration-300 ease-out
                           hover:bg-ink hover:border-ink
                           hover:scale-110 hover:rotate-6
                           hover:shadow-[0_0_30px_var(--glow-strong)]"
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  aria-label={item.label}
                  variants={socialIconVariants}
                  custom={index}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div
                    className="w-6 h-6 transition-all duration-300 
                                group-hover:brightness-0 group-hover:invert group-hover:scale-110"
                  >
                    <img
                      src={item.socialIcon}
                      alt={item.label}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Animated tooltip */}
                  <span
                    className={`absolute -top-10 left-1/2 -translate-x-1/2
                                   px-3 py-1.5 bg-ink text-canvas font-medium
                                   rounded-lg text-xs whitespace-nowrap
                                   transition-all duration-300 pointer-events-none
                                   ${
                                     hoveredSocial === index
                                       ? "opacity-100 translate-y-0"
                                       : "opacity-0 translate-y-2"
                                   }`}
                  >
                    {item.label}
                    <div
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 
                                  bg-ink rotate-45"
                    />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-lg font-bold text-ink tracking-wide">
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 gap-4">
              {NavItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.link}
                    className="group flex items-center gap-2 text-ink-3 hover:text-ink
                           transition-all duration-300"
                  >
                    <span
                      className="w-0 group-hover:w-2 h-px bg-ink 
                                 transition-all duration-300"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-lg font-bold text-ink tracking-wide">
              Get In Touch
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.link}
                    className="group flex items-start gap-3 text-ink-3 hover:text-ink
                             transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <IconComponent className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300 break-all">
                      {item.text}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.a
              href="mailto:timothyobi494@gmail.com?subject=Project%20Inquiry"
              className="group inline-flex items-center gap-2 px-6 py-3 
                       bg-gradient-to-r from-accent to-accent-2
                       text-accent-ink font-bold rounded-lg
                       hover:shadow-[0_0_30px_var(--glow-strong)]
                       hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a Project</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Divider with gradient */}
        <motion.div
          className="relative h-px my-12"
          variants={dividerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ink/30 to-transparent" />
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-ink-3 text-sm text-center md:text-left">
            © {new Date().getFullYear()} NonsoLovesCoding. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-ink-3 text-sm">
            <span>Designed and built with</span>
            <motion.span
              className="inline-block text-red-400"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              love
            </motion.span>
            <span>and</span>
            <motion.span
              className="inline-block"
              whileHover={{ rotate: 12 }}
              transition={{ duration: 0.3 }}
            >
              coffee
            </motion.span>
          </div>
        </motion.div>

        {/* Floating particles effect */}
        <motion.div
          className="absolute top-10 left-10 w-2 h-2 bg-ink/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-3 h-3 bg-ink-3/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 1,
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
