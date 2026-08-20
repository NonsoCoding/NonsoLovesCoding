"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, X } from "lucide-react";
import { profile } from "@/data/profile";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#D3D3D3]/[0.08] bg-[#191919]/85 py-3.5 backdrop-blur-xl">
        <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-[#5B9DF9]/40 to-transparent" />

        <div className="mx-auto flex w-[90%] max-w-7xl items-center justify-between">
          {/* Logo — monogram + name */}
          <Link href="#home" className="group flex items-center gap-3">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#5B9DF9]/30
                         bg-gradient-to-br from-[#5B9DF9]/20 to-[#7DD3C0]/10 font-mono text-sm font-bold text-[#9FC7FF]
                         transition-all duration-300 group-hover:border-[#5B9DF9]/60"
            >
              JS
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-bold tracking-tight text-[#EDEDED] transition-colors group-hover:text-white sm:text-base">
                Johnson<span className="text-[#5B9DF9]">Samuel</span>
              </span>
              <span className="hidden font-mono text-[10px] tracking-wider text-[#757575] sm:block">
                AI Engineer &amp; Backend Architect
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            <nav className="flex gap-1 rounded-full border border-[#D3D3D3]/[0.06] bg-[#2A2A2A]/50 px-2 py-2 backdrop-blur-sm">
              {NavItems.map((items) => {
                const isActive = activeLink === items.name;
                return (
                  <Link
                    key={items.name}
                    className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 ease-out
                            ${
                              isActive
                                ? "bg-[#EDEDED] text-[#191919]"
                                : "text-[#8A8A8A] hover:bg-[#D3D3D3]/10 hover:text-white"
                            }`}
                    href={items.link}
                    onClick={() => setActiveLink(items.name)}
                  >
                    {items.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Social Icons */}
            <nav className="flex gap-2.5">
              {SocialsIcon.map((items) => {
                const Icon = items.icon;
                return (
                  <a
                    key={items.label}
                    className="group relative flex h-9 w-9 items-center justify-center rounded-lg border border-[#D3D3D3]/10
                           bg-[#2A2A2A] transition-all duration-300 ease-out
                           hover:border-[#5B9DF9]/50 hover:bg-[#5B9DF9]/10 hover:scale-105"
                    href={items.link}
                    target={items.link.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={items.label}
                  >
                    <Icon className="h-4 w-4 text-[#A7A7A7] transition-colors duration-300 group-hover:text-[#9FC7FF]" />
                    <span
                      className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 rounded-md border
                                 border-[#D3D3D3]/15 bg-[#2A2A2A] px-2.5 py-1 font-mono text-[10px] whitespace-nowrap
                                 text-[#D3D3D3] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      {items.label}
                    </span>
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg
                           border border-[#D3D3D3]/10 bg-[#2A2A2A] transition-all duration-300
                           hover:bg-[#D3D3D3]/10 lg:hidden"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-[#D3D3D3] transition-all duration-300 ${
                isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-[#D3D3D3] transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-[#D3D3D3] transition-all duration-300 ${
                isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] border-l border-[#D3D3D3]/10 bg-[#191919]
                   shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
                     isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                   }`}
      >
        <div className="flex items-center justify-between border-b border-[#D3D3D3]/10 p-6">
          <h2 className="font-mono text-xs tracking-widest text-[#5B9DF9] uppercase">
            Navigate
          </h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border
                     border-[#D3D3D3]/10 bg-[#2A2A2A] transition-all duration-300 hover:bg-[#D3D3D3]/10"
            aria-label="Close Menu"
          >
            <X className="h-5 w-5 text-[#D3D3D3]" />
          </button>
        </div>

        <nav className="flex flex-col space-y-2 p-6">
          {NavItems.map((items) => {
            const isActive = activeLink === items.name;
            return (
              <Link
                key={items.name}
                href={items.link}
                onClick={() => handleLinkClick(items.name)}
                className={`group flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-300 ${
                  isActive
                    ? "bg-[#EDEDED] text-[#191919]"
                    : "text-[#8A8A8A] hover:bg-[#2A2A2A] hover:text-[#D3D3D3]"
                }`}
              >
                <span
                  className={`h-6 w-1 rounded-full transition-all duration-300 ${
                    isActive ? "bg-[#5B9DF9]" : "bg-transparent group-hover:bg-[#5B9DF9]"
                  }`}
                />
                <span className="font-medium">{items.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Social Links */}
        <div className="absolute right-0 bottom-0 left-0 border-t border-[#D3D3D3]/10 p-6">
          <p className="mb-4 font-mono text-[10px] tracking-widest text-[#757575] uppercase">
            Connect
          </p>
          <div className="flex gap-3">
            {SocialsIcon.map((items) => {
              const Icon = items.icon;
              return (
                <a
                  key={items.label}
                  href={items.link}
                  target={items.link.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex flex-1 flex-col items-center gap-2 rounded-lg border border-[#D3D3D3]/10
                         bg-[#2A2A2A] p-3 transition-all duration-300
                         hover:border-[#5B9DF9]/40 hover:bg-[#5B9DF9]/10"
                  aria-label={items.label}
                >
                  <Icon className="h-5 w-5 text-[#A7A7A7] transition-colors duration-300 group-hover:text-[#9FC7FF]" />
                  <span className="font-mono text-[10px] text-[#757575] transition-colors duration-300 group-hover:text-[#D3D3D3]">
                    {items.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
