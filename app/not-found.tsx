"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, FolderGit2, Mail, Terminal } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.08 * i, ease: "easeOut" as const },
  }),
};

const NotFound = () => {
  // Echoing the path the visitor actually asked for makes the trace read as
  // real instead of decorative. Null during the server render of a 404.
  const pathname = usePathname() ?? "/unknown";

  const trace = [
    { prompt: "$", text: "npx expo start --route", muted: false },
    { prompt: "›", text: `Resolving ${pathname}`, muted: true },
    { prompt: "✖", text: `Unable to resolve route "${pathname}"`, muted: false },
    { prompt: " ", text: "at Router.match (app/router.ts:404:1)", muted: true },
    { prompt: " ", text: "at renderPage (app/page.tsx:1:1)", muted: true },
  ];

  return (
    <main className="relative flex min-h-screen w-full items-center overflow-hidden bg-canvas py-20">
      {/* Backdrop — same treatment as the hero, so this still feels like the site. */}
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-48 -left-32 h-[460px] w-[460px] rounded-full bg-accent-2/10 blur-[130px]" />

      <div className="relative z-10 mx-auto w-[90%] max-w-3xl text-center">
        <motion.div
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
          </span>
          <span className="font-mono text-xs font-medium tracking-wide text-accent">
            HTTP 404 — route not found
          </span>
        </motion.div>

        <motion.h1
          className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-[6.5rem] leading-[0.85] font-bold tracking-tight text-transparent md:text-[10rem]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          404
        </motion.h1>

        <motion.p
          className="mt-6 text-2xl font-semibold text-ink md:text-3xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          This route never made it into the bundle.
        </motion.p>

        <motion.p
          className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink-3"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          The page you&apos;re after was moved, renamed, or never shipped. No
          crash report filed — let&apos;s get you back to something that works.
        </motion.p>

        {/* Stack trace */}
        <motion.div
          className="card-shadow mt-10 overflow-hidden rounded-xl border border-line/15 bg-surface text-left"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <div className="flex items-center gap-2 border-b border-line/10 bg-elevated px-4 py-2.5">
            <Terminal size={14} className="text-accent" />
            <span className="font-mono text-[11px] tracking-wider text-ink-3">
              metro-bundler
            </span>
            <span className="ml-auto flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-3/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-3/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-3/30" />
            </span>
          </div>
          <div className="overflow-x-auto px-4 py-4">
            <pre className="font-mono text-[12px] leading-relaxed md:text-[13px]">
              {trace.map((line, i) => (
                <motion.div
                  key={i}
                  className="whitespace-pre"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 + i * 0.12, duration: 0.3 }}
                >
                  <span className="text-accent-2">{line.prompt} </span>
                  <span className={line.muted ? "text-ink-3" : "text-ink"}>
                    {line.text}
                  </span>
                </motion.div>
              ))}
            </pre>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold
                       text-accent-ink transition-all duration-300
                       hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            Back to home
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-line/20 bg-surface px-6 py-3
                       font-semibold text-ink transition-all duration-300
                       hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <FolderGit2 size={17} />
            View projects
          </Link>
          <a
            href="mailto:timothyobi494@gmail.com?subject=Broken%20link%20on%20your%20site"
            className="inline-flex items-center gap-2 rounded-lg border border-line/20 bg-surface px-6 py-3
                       font-semibold text-ink transition-all duration-300
                       hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <Mail size={17} />
            Report it
          </a>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
