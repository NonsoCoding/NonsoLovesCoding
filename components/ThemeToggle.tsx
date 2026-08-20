"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

type Theme = "light" | "dark";

/**
 * Reads the theme the inline script in app/layout.tsx already applied, so the
 * button never disagrees with what's on screen. Renders a neutral placeholder
 * until mounted to keep the server and client markup identical.
 */
const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* Private mode — the choice just won't persist. */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`group relative w-10 h-10 flex items-center justify-center overflow-hidden
                  rounded-full bg-elevated border border-line/10 cursor-pointer
                  transition-all duration-300 ease-out
                  hover:border-accent/50 hover:scale-110
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
                  ${className}`}
    >
      {mounted && (
        <motion.span
          key={theme}
          initial={{ y: 14, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="flex items-center justify-center text-ink group-hover:text-accent transition-colors duration-300"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      )}
    </button>
  );
};

export default ThemeToggle;
