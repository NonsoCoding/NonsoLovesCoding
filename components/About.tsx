"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, Smartphone } from "lucide-react";

const experience = [
  {
    period: "2024 — Present",
    current: true,
    role: "Cross-Platform Mobile App Developer",
    company: "Hasob Integrated Services",
    points: [
      "Architected cross-platform mobile apps using React Native, Expo and TypeScript, leading cross-functional teams from system design through production releases.",
      "Configured automated build pipelines with EAS Build and managed distribution on Google Play Console and App Store Connect.",
    ],
    tags: ["React Native", "Expo", "TypeScript", "EAS Build"],
  },
  {
    period: "2025 — 2026",
    current: false,
    role: "Frontend & Mobile Software Engineer",
    company: "LAS Mobile App",
    points: [
      "Engineered real-time logistics and delivery tracking interfaces using React Native, Next.js and Tailwind CSS.",
      "Integrated RESTful APIs for live package location updates and route optimisation, improving overall client-side app performance.",
    ],
    tags: ["React Native", "Next.js", "Tailwind CSS", "REST APIs"],
  },
  {
    period: "2025 — 2026",
    current: false,
    role: "Software Engineer",
    company: "MDB & Learnlift Apps",
    points: [
      "Authored multi-tenant application architecture and developed core mobile components for Learnlift, an educational platform.",
      "Engineered and deployed cross-platform features and responsive UI for MDB using React Native, Expo and Next.js.",
    ],
    tags: ["Multi-Tenant SaaS", "React Native", "Expo", "Next.js"],
  },
];

const education = [
  {
    period: "2024 — Present",
    school: "University of the People",
    credential: "B.Sc. Computer Science",
  },
  {
    period: "2026",
    school: "AWS Skill Builder",
    credential: "AWS Cloud Practitioner Essentials",
  },
  {
    period: "2023 — 2024",
    school: "Early Code",
    credential: "Android and iOS Development",
  },
];

const architecture = [
  "Systems Design & PRDs",
  "Cross-Functional Leadership",
  "CI/CD & EAS Pipelines",
  "Multi-Tenant SaaS Design",
  "App Store & Play Console Publishing",
  "Firebase (Auth, Firestore, FCM)",
  "REST & GraphQL APIs",
  "AWS Cloud & EAS Build",
];

const quickFacts = [
  { icon: MapPin, label: "Abuja, Nigeria" },
  { icon: Briefcase, label: "Mobile Engineer & Solutions Architect" },
  { icon: Smartphone, label: "Apps live on iOS & Google Play" },
  { icon: GraduationCap, label: "B.Sc. Computer Science, in progress" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const SectionHeading = ({
  eyebrow,
  title,
  blurb,
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
}) => (
  <motion.div
    className="flex flex-col items-center text-center gap-3 mb-14"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <span className="font-mono text-xs tracking-[0.25em] uppercase text-accent">
      {eyebrow}
    </span>
    <div className="inline-block">
      <p className="text-4xl md:text-5xl text-ink font-bold tracking-tight">
        {title}
      </p>
      <motion.div
        className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mt-2 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </div>
    {blurb && (
      <p className="text-ink-3 text-lg max-w-2xl leading-relaxed">{blurb}</p>
    )}
  </motion.div>
);

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full scroll-mt-24 py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 dot-bg opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto w-[90%] max-w-6xl">
        <SectionHeading
          eyebrow="Who I am"
          title="About Me"
          blurb="Mobile Engineer and Solutions Architect with a track record of building robust, user-friendly and scalable software."
        />

        {/* Narrative + quick facts */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="lg:col-span-3 rounded-2xl border border-line/10 bg-surface p-8 card-shadow"
            variants={fadeUp}
          >
            <p className="text-ink-2 text-base md:text-lg leading-relaxed">
              I&#39;m an innovative Mobile Engineer and Solutions Architect with a
              proven track record of building robust, user-friendly and scalable
              software solutions. I drive successful project outcomes through
              deep problem-solving, strong system design and cross-functional
              team leadership.
            </p>
            <p className="text-ink-2 text-base md:text-lg leading-relaxed mt-5">
              What I enjoy most is translating complex business requirements
              into high-performing mobile and web applications — then owning
              them all the way through the build pipeline to a live listing on
              the App Store and Google Play.
            </p>
          </motion.div>

          <motion.ul className="lg:col-span-2 flex flex-col gap-4" variants={fadeUp}>
            {quickFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <li
                  key={fact.label}
                  className="group flex items-center gap-4 rounded-xl border border-line/10 bg-surface px-5 py-4
                             transition-all duration-300 hover:border-accent/40 hover:-translate-y-0.5 card-shadow"
                >
                  <span
                    className="shrink-0 w-10 h-10 grid place-items-center rounded-lg
                               bg-accent/10 text-accent transition-colors duration-300
                               group-hover:bg-accent group-hover:text-accent-ink"
                  >
                    <Icon size={18} />
                  </span>
                  <span className="text-ink-2 text-sm font-medium">
                    {fact.label}
                  </span>
                </li>
              );
            })}
          </motion.ul>
        </motion.div>

        {/* Experience timeline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-ink tracking-tight mb-10">
            Work Experience
          </h3>

          <ol className="relative border-l border-line/15 ml-3 space-y-10">
            {experience.map((job) => (
              <motion.li
                key={`${job.company}-${job.period}`}
                className="relative pl-8 md:pl-10"
                variants={fadeUp}
              >
                <span
                  className={`absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full border-2 border-canvas
                              ${job.current ? "bg-accent" : "bg-ink-3"}`}
                />
                {job.current && (
                  <span className="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full bg-accent animate-ping opacity-60" />
                )}

                <div className="rounded-2xl border border-line/10 bg-surface p-6 md:p-7 transition-all duration-300 hover:border-accent/40 card-shadow">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-mono text-xs tracking-wider text-accent">
                      {job.period}
                    </span>
                    {job.current && (
                      <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent">
                        Current
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg md:text-xl font-bold text-ink">
                    {job.role}
                  </h4>
                  <p className="text-ink-3 text-sm font-medium mb-4">
                    {job.company}
                  </p>

                  <ul className="space-y-2.5 mb-5">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-ink-2 text-sm leading-relaxed"
                      >
                        <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-accent/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-elevated border border-line/10 text-ink-3"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>

        {/* Education */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20"
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-ink tracking-tight mb-10"
            variants={fadeUp}
          >
            Education
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((item) => (
              <motion.div
                key={item.school}
                variants={fadeUp}
                className="group relative rounded-2xl border border-line/10 bg-surface p-6
                           transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 card-shadow"
              >
                <span className="inline-grid place-items-center w-10 h-10 rounded-lg bg-accent/10 text-accent mb-4 transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-ink">
                  <GraduationCap size={18} />
                </span>
                <p className="font-mono text-xs tracking-wider text-accent mb-2">
                  {item.period}
                </p>
                <h4 className="text-base font-bold text-ink uppercase tracking-wide">
                  {item.school}
                </h4>
                <p className="text-ink-3 text-sm mt-1">{item.credential}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Systems & architecture */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-ink tracking-tight mb-3"
            variants={fadeUp}
          >
            Systems &amp; Architecture
          </motion.h3>
          <motion.p className="text-ink-3 mb-8 max-w-2xl" variants={fadeUp}>
            The parts of the job that happen outside the editor.
          </motion.p>

          <motion.div className="flex flex-wrap gap-3" variants={fadeUp}>
            {architecture.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full text-sm font-medium
                           border border-line/15 bg-surface text-ink-2
                           transition-all duration-300
                           hover:border-accent hover:text-accent hover:-translate-y-0.5"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
