"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const NavItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Tech Stack", link: "#tech-stack" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const SocialsIcon = [
    {
      socialIcon: "./github.svg",
      link: "https://github.com/NonsoCoding",
      label: "GitHub",
    },
    { socialIcon: "./twitter.svg", link: "/", label: "Twitter" },
    {
      socialIcon: "./linkdln.svg",
      link: "https://www.linkedin.com/in/chukwunonso-obi-b19b22244/",
      label: "LinkedIn",
    },
  ];

  return (
    <section className="py-4 w-full sticky top-0 z-50 backdrop-blur-md bg-[#191919]/80 border-b border-[#D3D3D3]/10">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D3D3D3]/30 to-transparent" />

      <div className="flex justify-between items-center mx-auto w-[80%]">
        {/* Logo */}
        <div className="group cursor-pointer">
          <p
            className="text-2xl md:text-3xl text-[#D3D3D3] font-bold tracking-tight 
                       transition-all duration-300 group-hover:text-white"
          >
            Nonso
            <span className="text-[#A7A7A7] group-hover:text-[#D3D3D3] transition-colors duration-300">
              LovesCoding
            </span>
          </p>
          <div
            className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#D3D3D3] to-[#A7A7A7] 
                         transition-all duration-300 rounded-full mt-1"
          />
        </div>

        {/* Navigation and Socials Container */}
        <div className="flex items-center gap-6 md:gap-12">
          {/* Navigation Links */}
          <nav className="hidden lg:flex gap-1 bg-[#2A2A2A]/50 rounded-full px-2 py-2 backdrop-blur-sm border border-[#D3D3D3]/5">
            {NavItems.map((items, index) => {
              const isActive = activeLink === items.name;
              return (
                <Link
                  key={index}
                  className={`relative px-5 py-2 text-sm font-medium rounded-full
                            transition-all duration-300 ease-out
                            ${
                              isActive
                                ? "text-[#191919] bg-[#D3D3D3]"
                                : "text-[#A7A7A7] hover:text-white hover:bg-[#D3D3D3]/10"
                            }`}
                  href={items.link}
                  onClick={() => setActiveLink(items.name)}
                >
                  {items.name}

                  {/* Subtle glow on hover */}
                  {!isActive && (
                    <div
                      className="absolute inset-0 rounded-full bg-[#D3D3D3]/0 
                                  group-hover:bg-[#D3D3D3]/5 transition-all duration-300"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Social Icons */}
          <nav className="flex gap-3">
            {SocialsIcon.map((items, index) => {
              return (
                <a
                  key={index}
                  className="group relative w-10 h-10 flex items-center justify-center
                           rounded-full bg-[#2A2A2A] border border-[#D3D3D3]/10
                           transition-all duration-300 ease-out
                           hover:bg-[#D3D3D3] hover:border-[#D3D3D3]
                           hover:scale-110 hover:shadow-[0_0_20px_rgba(211,211,211,0.3)]"
                  href={items.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={items.label}
                >
                  {/* Icon container with filter for color change */}
                  <div
                    className="w-5 h-5 transition-all duration-300 
                                group-hover:brightness-0 group-hover:invert"
                  >
                    <img
                      src={items.socialIcon}
                      alt={items.label}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Tooltip */}
                  <span
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2
                                 px-3 py-1 bg-[#2A2A2A] border border-[#D3D3D3]/20
                                 rounded-lg text-xs text-[#D3D3D3] whitespace-nowrap
                                 opacity-0 group-hover:opacity-100 pointer-events-none
                                 transition-opacity duration-300"
                  >
                    {items.label}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5
                           rounded-lg bg-[#2A2A2A] border border-[#D3D3D3]/10
                           hover:bg-[#D3D3D3]/10 transition-all duration-300"
            aria-label="Menu"
          >
            <span className="w-5 h-0.5 bg-[#D3D3D3] rounded-full transition-all duration-300" />
            <span className="w-5 h-0.5 bg-[#D3D3D3] rounded-full transition-all duration-300" />
            <span className="w-5 h-0.5 bg-[#D3D3D3] rounded-full transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
