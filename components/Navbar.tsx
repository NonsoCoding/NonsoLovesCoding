"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FileText, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

// Served straight from /public, so the browser renders it inline in its own
// PDF viewer. Visitors can still save it from there.
const RESUME_URL = "/Chukwunonso-Obi-CV.pdf";

const NavItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Tech Stack", link: "#tech-stack" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

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

  // Highlight whichever section is actually on screen, so the pill stays
  // correct when the visitor scrolls rather than clicks.
  useEffect(() => {
    const sections = NavItems.map((item) => ({
      name: item.name,
      el: document.querySelector(item.link),
    })).filter((entry): entry is { name: string; el: Element } =>
      Boolean(entry.el),
    );

    if (sections.length === 0) return;

    // The last section whose top has passed under the navbar is the one being
    // read. Ratio-based matching gets this wrong, because a short section fully
    // in view outranks the tall one the visitor is actually looking at.
    const onScroll = () => {
      const offset = 140;
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;

      if (atBottom) {
        setActiveLink(sections[sections.length - 1].name);
        return;
      }

      let current = sections[0].name;
      for (const entry of sections) {
        if (entry.el.getBoundingClientRect().top <= offset) {
          current = entry.name;
        }
      }
      setActiveLink(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

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

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <section className="py-4 w-full sticky top-0 z-50 backdrop-blur-md bg-canvas/80 border-b border-ink/10">
        {/* Subtle top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ink/30 to-transparent" />

        <div className="flex justify-between items-center mx-auto w-[90%]">
          {/* Logo */}
          <div className="group cursor-pointer">
            <p
              className="text-xl md:text-2xl lg:text-3xl text-ink font-bold tracking-tight 
                       transition-all duration-300 group-hover:text-bright"
            >
              Nonso
              <span className="text-ink-3 group-hover:text-ink transition-colors duration-300">
                LovesCoding
              </span>
            </p>
            <div
              className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-ink to-ink-3 
                         transition-all duration-300 rounded-full mt-1"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {/* Navigation Links */}
            <nav className="flex gap-1 bg-elevated/50 rounded-full px-2 py-2 backdrop-blur-sm border border-ink/5">
              {NavItems.map((items, index) => {
                const isActive = activeLink === items.name;
                return (
                  <Link
                    key={index}
                    className={`relative px-5 py-2 text-sm font-medium rounded-full
                            transition-all duration-300 ease-out
                            ${
                              isActive
                                ? "text-accent-ink bg-accent shadow-md shadow-accent/25"
                                : "text-ink-3 hover:text-bright hover:bg-ink/10"
                            }`}
                    href={items.link}
                    onClick={() => setActiveLink(items.name)}
                  >
                    {items.name}
                    {!isActive && (
                      <div
                        className="absolute inset-0 rounded-full bg-ink/0 
                                  group-hover:bg-ink/5 transition-all duration-300"
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
                           rounded-full bg-elevated border border-ink/10
                           transition-all duration-300 ease-out
                           hover:bg-ink hover:border-ink
                           hover:scale-110 hover:shadow-[0_0_20px_var(--glow-strong)]"
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
                                 px-3 py-1 bg-elevated border border-ink/20
                                 rounded-lg text-xs text-ink whitespace-nowrap
                                 opacity-0 group-hover:opacity-100 pointer-events-none
                                 transition-opacity duration-300"
                    >
                      {items.label}
                    </span>
                  </a>
                );
              })}
              <ThemeToggle />
            </nav>

            {/* Resume */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold
                         bg-accent text-accent-ink whitespace-nowrap
                         transition-all duration-300 ease-out
                         hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>

          {/* Mobile: theme toggle sits outside the drawer so it's always reachable */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5
                           rounded-lg bg-elevated border border-ink/10
                           hover:bg-ink/10 transition-all duration-300 relative z-50"
              aria-label="Toggle Menu"
            >
              <span
                className={`w-5 h-0.5 bg-ink rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-ink rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-ink rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
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
        className={`fixed top-0 right-0 h-full w-[280px] bg-canvas border-l border-ink/10 
                   z-50 lg:hidden transition-transform duration-300 ease-out shadow-2xl ${
                     isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                   }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-ink/10">
          <h2 className="text-xl font-bold text-ink">Menu</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-lg
                     bg-elevated border border-ink/10
                     hover:bg-ink/10 transition-all duration-300"
            aria-label="Close Menu"
          >
            <X className="w-5 h-5 text-ink" />
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
                             ? "bg-accent text-accent-ink"
                             : "text-ink-3 hover:bg-elevated hover:text-ink"
                         }`}
              >
                <span
                  className={`w-1 h-6 rounded-full transition-all duration-300 ${
                    isActive ? "bg-canvas" : "bg-transparent group-hover:bg-ink"
                  }`}
                />
                <span className="font-medium">{items.name}</span>
              </Link>
            );
          })}

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="group mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-lg
                       bg-accent text-accent-ink font-semibold
                       transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
          >
            <FileText size={17} />
            Resume
          </a>
        </nav>

        {/* Mobile Social Links */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-ink/10">
          <p className="text-sm text-ink-3 mb-4 font-medium">Connect with me</p>
          <div className="flex gap-4">
            {SocialsIcon.map((items, index) => (
              <a
                key={index}
                href={items.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex flex-col items-center gap-2 p-3 rounded-lg
                         bg-elevated border border-ink/10
                         hover:bg-ink hover:border-ink
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
                  className="text-xs text-ink-3 group-hover:text-canvas 
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
