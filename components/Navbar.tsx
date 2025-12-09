"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

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

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <section className="py-4 w-full sticky top-0 z-50 backdrop-blur-md bg-[#191919]/80 border-b border-[#D3D3D3]/10">
        {/* Subtle top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D3D3D3]/30 to-transparent" />

        <div className="flex justify-between items-center mx-auto w-[90%] max-w-7xl">
          {/* Logo */}
          <div className="group cursor-pointer">
            <p
              className="text-xl md:text-2xl lg:text-3xl text-[#D3D3D3] font-bold tracking-tight 
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {/* Navigation Links */}
            <nav className="flex gap-1 bg-[#2A2A2A]/50 rounded-full px-2 py-2 backdrop-blur-sm border border-[#D3D3D3]/5">
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

            {/* Desktop Social Icons */}
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
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5
                           rounded-lg bg-[#2A2A2A] border border-[#D3D3D3]/10
                           hover:bg-[#D3D3D3]/10 transition-all duration-300 relative z-50"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-5 h-0.5 bg-[#D3D3D3] rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[#D3D3D3] rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[#D3D3D3] rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#191919] border-l border-[#D3D3D3]/10 
                   z-50 lg:hidden transition-transform duration-300 ease-out shadow-2xl ${
                     isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                   }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-[#D3D3D3]/10">
          <h2 className="text-xl font-bold text-[#D3D3D3]">Menu</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-lg
                     bg-[#2A2A2A] border border-[#D3D3D3]/10
                     hover:bg-[#D3D3D3]/10 transition-all duration-300"
            aria-label="Close Menu"
          >
            <X className="w-5 h-5 text-[#D3D3D3]" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col p-6 space-y-2">
          {NavItems.map((items, index) => {
            const isActive = activeLink === items.name;
            return (
              <Link
                key={index}
                href={items.link}
                onClick={() => handleLinkClick(items.name)}
                className={`group flex items-center gap-3 px-4 py-3 rounded-lg
                         transition-all duration-300 ${
                           isActive
                             ? "bg-[#D3D3D3] text-[#191919]"
                             : "text-[#A7A7A7] hover:bg-[#2A2A2A] hover:text-[#D3D3D3]"
                         }`}
              >
                <span
                  className={`w-1 h-6 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-[#191919]"
                      : "bg-transparent group-hover:bg-[#D3D3D3]"
                  }`}
                />
                <span className="font-medium">{items.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Social Links */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#D3D3D3]/10">
          <p className="text-sm text-[#A7A7A7] mb-4 font-medium">
            Connect with me
          </p>
          <div className="flex gap-4">
            {SocialsIcon.map((items, index) => (
              <a
                key={index}
                href={items.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex flex-col items-center gap-2 p-3 rounded-lg
                         bg-[#2A2A2A] border border-[#D3D3D3]/10
                         hover:bg-[#D3D3D3] hover:border-[#D3D3D3]
                         transition-all duration-300"
                aria-label={items.label}
              >
                <div
                  className="w-6 h-6 transition-all duration-300 
                            group-hover:brightness-0 group-hover:invert group-hover:scale-110"
                >
                  <img
                    src={items.socialIcon}
                    alt={items.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span
                  className="text-xs text-[#A7A7A7] group-hover:text-[#191919] 
                               transition-colors duration-300 font-medium"
                >
                  {items.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
