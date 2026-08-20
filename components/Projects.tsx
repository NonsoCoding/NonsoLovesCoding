"use client";
import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Terminal,
} from "lucide-react";
import { aiProjects, backendProjects } from "@/data/profile";
import SectionHeading from "./SectionHeading";

interface ProjectImageSliderProps {
  images: string[];
  alt: string;
}

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 250 : -250,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 250 : -250,
    opacity: 0,
    scale: 0.95,
  }),
};

const ProjectImageSlider: React.FC<ProjectImageSliderProps> = ({
  images,
  alt,
}) => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  if (!images || images.length === 0) return null;

  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const jumpToPage = (index: number) => {
    const dir = index > imageIndex ? 1 : -1;
    setPage([index, dir]);
  };

  const swipeThreshold = 50;

  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-4 pb-2 px-4">
      {/* Main Slider Display */}
      <div className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center overflow-hidden rounded-xl bg-[#282828] border border-white/5 shadow-inner">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={page}
            src={images[imageIndex]}
            alt={`${alt} screenshot ${imageIndex + 1}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.25 },
              scale: { duration: 0.25 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (offset.x < -swipeThreshold || swipe < -1000) {
                paginate(1);
              } else if (offset.x > swipeThreshold || swipe > 1000) {
                paginate(-1);
              }
            }}
            className="absolute max-h-[90%] max-w-[85%] object-contain rounded-lg drop-shadow-2xl cursor-grab active:cursor-grabbing select-none"
          />
        </AnimatePresence>

        {/* Counter Badge */}
        {images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-white/90 font-mono border border-white/10 z-10 select-none shadow-md">
            {imageIndex + 1} / {images.length}
          </div>
        )}

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <motion.button
              type="button"
              aria-label="Previous image"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.85)" }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                paginate(-1);
              }}
              className="absolute left-3 p-2.5 rounded-full bg-black/60 text-white border border-white/20 backdrop-blur-md cursor-pointer z-10 shadow-lg hover:border-white/50 transition-colors"
            >
              <ChevronLeft size={20} />
            </motion.button>

            <motion.button
              type="button"
              aria-label="Next image"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.85)" }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                paginate(1);
              }}
              className="absolute right-3 p-2.5 rounded-full bg-black/60 text-white border border-white/20 backdrop-blur-md cursor-pointer z-10 shadow-lg hover:border-white/50 transition-colors"
            >
              <ChevronRight size={20} />
            </motion.button>
          </>
        )}
      </div>

      {/* Pagination Indicators */}
      {images.length > 1 && (
        <div className="flex items-center gap-2 mt-4 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to image ${idx + 1}`}
              onClick={() => jumpToPage(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === imageIndex
                  ? "w-6 bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/** Status chip shared by the AI and backend cards. */
const StatusBadge = ({ status }: { status: string }) => {
  const map: Record<string, { label: string; className: string }> = {
    live: {
      label: "Live in production",
      className: "border-[#7DD3C0]/30 bg-[#7DD3C0]/[0.08] text-[#7DD3C0]",
    },
    building: {
      label: "In development",
      className: "border-[#5B9DF9]/30 bg-[#5B9DF9]/[0.08] text-[#5B9DF9]",
    },
    shipped: {
      label: "Shipped",
      className: "border-[#D3D3D3]/15 bg-[#282828] text-[#A7A7A7]",
    },
    prototype: {
      label: "Prototype",
      className: "border-[#D3D3D3]/15 bg-[#282828] text-[#8A8A8A]",
    },
  };

  const meta = map[status] ?? map.shipped;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] whitespace-nowrap ${meta.className}`}
    >
      {status === "live" && (
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7DD3C0]" />
      )}
      {meta.label}
    </span>
  );
};

const Projects = () => {
  const MobileAppProjectList = [
    {
      image: "./LasMobileImages/Las1.png",
      images: [
        "./LasMobileImages/Las1.png",
        "./LasMobileImages/Las2.png",
        "./LasMobileImages/Las3.png",
        "./LasMobileImages/Las4.png",
        "./LasMobileImages/Las5.png",
      ],
      name: "Las Mobile App",
      info: "An enterprise-grade logistics and delivery management application built for real-time shipment visibility, automated routing, and reliable field operation tracking.",
      stack: "JavaScript, ReactNative, Expo, Tailwind",
      githubLink: "https://github.com/NonsoCoding/LAS-MOBILE",
      githubApk: "https://github.com/NonsoCoding/LAS-MOBILE",
      appstore: "https://apps.apple.com/ng/app/las-mobile/id6785944990",
      playstore: "https://play.google.com/store/apps/details?id=com.nonsolovescoding.lastechnologiesmobileapp&pcampaignid=web_share"
    },
    {
      image: "./MDBImages/MDBImages/Las1.png",
      images: [
        "./MDBImages/MDB3.png",
        "./MDBImages/MDB2.png",
        "./MDBImages/MDB1.png",
        "./MDBImages/MDB4.png",
        "./MDBImages/MDB5.png",
      ],
      name: "Mydevotionalbook",
      info: "A feature-rich spiritual companion application designed to provide users with daily devotional content, structured reading plans, offline access, and audio streaming capabilities.",
      stack: "JavaScript, ReactNative, Expo, Tailwind",
      githubLink: "",
      githubApk: "https://github.com/NonsoCoding/Mydevotionalbook",
      appstore: "https://apps.apple.com/ng/app/my-devotional-app/id6740229712",
      playstore: "https://play.google.com/store/apps/details?id=com.mydevotionalbook.app&hl=en"
    },
    {
      image: "./LearnliftImages/learnlift1.png",
      images: [
        "./LearnliftImages/learnlift1.png",
        "./LearnliftImages/learnlift2.png",
        "./LearnliftImages/learnlift3.png",
        "./LearnliftImages/learnlift5.png",
        "./LearnliftImages/learnlift4.png",
      ],
      name: "Learnlift",
      info: "An educational application designed to enhance learning outcomes for primary, secondary, and tertiary students through video courses, AI-driven study recommendations, and interactive CBT (Computer-Based Test) practice modules.",
      stack: "JavaScript, ReactNative, Expo, Tailwind",
      githubLink: "",
      githubApk: "https://github.com/NonsoCoding/Giftincash",
      appstore: "https://apps.apple.com/ng/app/learnlift/id6743348693",
      playstore: "https://play.google.com/store/apps/details?id=com.imoh.learnlift&pcampaignid=web_share"
    },
     {
      image: "./GiftincashImages/Giftincash4.png",
      images: [
        "./GiftincashImages/Giftincash1.png",
        "./GiftincashImages/Giftincash2.png",
        "./GiftincashImages/Giftincash3.png",
        "./GiftincashImages/Giftincash4.png",
        "./GiftincashImages/Giftincash5.png",
      ],
      name: "Giftincash",
      info: "A feature-rich digital gifting and financial rewards application offering seamless user authentication, personalized user notifications, and instant transactional updates.",
      stack: "JavaScript, ReactNative, Expo, Tailwind",
      githubLink: "",
      githubApk: "https://github.com/404Enterprise/gift-in-cash",
      appstore: "",
      playstore: ""
    },
  ];

  const tabs = [
    { key: "ai", label: "AI & LLM Systems", count: aiProjects.length },
    { key: "backend", label: "Backend & APIs", count: backendProjects.length },
    { key: "apps", label: "Live Apps", count: MobileAppProjectList.length },
  ] as const;

  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["key"]>("ai");

  // Container for staggered cards
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Individual card animation
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="projects" className="relative w-full py-20 md:py-28">
      <div className="mx-auto flex w-[90%] max-w-7xl flex-col gap-12">
        <SectionHeading
          eyebrow="04 / Selected work"
          title="Key projects"
          subtitle="AI systems, the production APIs behind them, and the apps they power — live on iOS, Google Play, and the web."
        />

        {/* ---------- Tabs ---------- */}
        <div className="flex flex-wrap gap-2 rounded-2xl border border-[#D3D3D3]/10 bg-[#202020] p-2 md:w-fit">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`relative flex-1 cursor-pointer rounded-xl px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-300 md:flex-none
                  ${
                    isActive
                      ? "text-[#191919]"
                      : "text-[#8A8A8A] hover:bg-[#D3D3D3]/[0.06] hover:text-[#D3D3D3]"
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-tab"
                    className="absolute inset-0 rounded-xl bg-[#EDEDED]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {tab.label}
                  <span
                    className={`font-mono text-[10px] ${
                      isActive ? "text-[#191919]/60" : "text-[#575757]"
                    }`}
                  >
                    {tab.count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* ---------- Panels ---------- */}
        <AnimatePresence mode="wait">
          {/* AI & LLM Systems */}
          {activeTab === "ai" && (
            <motion.div
              key="ai"
              className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -12 }}
            >
              {aiProjects.map((project) => (
                <motion.article
                  key={project.name}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#D3D3D3]/10 bg-[#202020]
                             transition-colors duration-300 hover:border-[#5B9DF9]/30
                             hover:shadow-[0_24px_60px_-32px_rgba(91,157,249,0.55)]"
                >
                  {/* Terminal-ish header instead of a screenshot */}
                  <div className="dot-bg relative border-b border-[#D3D3D3]/10 bg-[#1a1a1a] px-6 py-7">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#5B9DF9]/[0.07] to-transparent" />
                    <div className="relative flex items-start justify-between gap-4">
                      <Terminal className="h-5 w-5 shrink-0 text-[#5B9DF9]" />
                      <StatusBadge status={project.status} />
                    </div>
                    <h3 className="relative mt-5 text-lg leading-snug font-bold text-[#EDEDED]">
                      {project.name}
                    </h3>
                    <p className="relative mt-1.5 font-mono text-[11px] text-[#7DD3C0]">
                      {project.role}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col gap-5 p-6">
                    <p className="text-[13.5px] leading-relaxed text-[#9A9A9A]">
                      {project.info}
                    </p>

                    <ul className="space-y-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2.5 text-[12.5px] text-[#A7A7A7]"
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-[#5B9DF9]" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap gap-1.5 border-t border-[#D3D3D3]/[0.08] pt-5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-[#282828] px-2 py-1 font-mono text-[10.5px] text-[#8A8A8A]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}

          {/* Backend & APIs */}
          {activeTab === "backend" && (
            <motion.div
              key="backend"
              className="grid grid-cols-1 gap-6 lg:grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -12 }}
            >
              {backendProjects.map((project) => (
                <motion.article
                  key={project.name}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  className="group flex flex-col rounded-2xl border border-[#D3D3D3]/10 bg-[#202020] p-6
                             transition-colors duration-300 hover:border-[#7DD3C0]/30
                             hover:shadow-[0_24px_60px_-32px_rgba(125,211,192,0.45)] sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg leading-snug font-bold text-[#EDEDED]">
                        {project.name}
                      </h3>
                      <p className="mt-1.5 font-mono text-[11px] text-[#5B9DF9]">
                        {project.role}
                      </p>
                    </div>
                    <StatusBadge status={project.status} />
                  </div>

                  <p className="mt-5 text-[13.5px] leading-relaxed text-[#9A9A9A]">
                    {project.info}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-[#282828] px-2 py-1 font-mono text-[10.5px] text-[#8A8A8A]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <div className="mt-6 border-t border-[#D3D3D3]/[0.08] pt-5">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs text-[#A7A7A7]
                                   transition-colors duration-200 hover:text-[#7DD3C0]"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        {project.linkLabel || "Visit"}
                      </a>
                    </div>
                  )}
                </motion.article>
              ))}
            </motion.div>
          )}

          {/* Live Apps — the mobile products these backends power */}
          {activeTab === "apps" && (
            <motion.div
              key="apps"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <p className="mb-8 max-w-3xl rounded-xl border border-[#D3D3D3]/10 bg-[#1d1d1d] px-5 py-4 text-[13px] leading-relaxed text-[#8A8A8A]">
                <span className="text-[#D3D3D3]">Note:</span> these are the shipped
                products the APIs above run behind — backend, payments, and infrastructure
                work, live on the App Store and Google Play.
              </p>

              <motion.div
                className="mx-auto grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:w-[92%]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {MobileAppProjectList.map((items, index) => {
                  const projectImages =
                    items.images && items.images.length > 0
                      ? items.images
                      : [items.image];
                  const codeLink = items.githubLink || items.githubApk;

                  return (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover={{
                        y: -10,
                        transition: { duration: 0.3 },
                      }}
                      className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#D3D3D3]/10 bg-[#202020] pt-4 shadow-2xl
                                 transition-all duration-300 hover:border-[#5B9DF9]/25 hover:shadow-[0_24px_60px_-30px_rgba(91,157,249,0.45)]"
                    >
                      <ProjectImageSlider
                        images={projectImages}
                        alt={items.name}
                      />

                      <div className="flex flex-col gap-4 p-6 text-[#CCCCCC]">
                        <p className="text-xl font-semibold text-[#EDEDED]">{items.name}</p>
                        <p className="text-[13.5px] leading-relaxed font-light text-[#9A9A9A]">
                          {items.info}
                        </p>
                        <p className="font-mono text-[11px] text-[#8A8A8A]">
                          <span className="text-[#5B9DF9]">stack:</span> {items.stack}
                        </p>

                        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#D3D3D3]/[0.08] pt-4">
                          {codeLink && (
                            <motion.a
                              className="flex items-center gap-2 font-mono text-[11px] text-[#A7A7A7] transition-colors hover:text-[#EDEDED]"
                              whileHover={{ x: 3 }}
                              transition={{ duration: 0.2 }}
                              target="_blank"
                              rel="noopener noreferrer"
                              href={codeLink}
                            >
                              <Github className="h-4 w-4" />
                              View Code
                            </motion.a>
                          )}

                          <div className="flex items-center gap-5">
                            {items.appstore && (
                              <motion.a
                                className="flex items-center gap-2 font-mono text-[11px] text-[#A7A7A7] transition-colors hover:text-[#EDEDED]"
                                whileHover={{ x: 3 }}
                                transition={{ duration: 0.2 }}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={items.appstore}
                              >
                                <img
                                  className="h-4"
                                  src="./Stores/appstore.png"
                                  alt="App Store"
                                />
                                App Store
                              </motion.a>
                            )}
                            {items.playstore && (
                              <motion.a
                                className="flex items-center gap-2 font-mono text-[11px] text-[#A7A7A7] transition-colors hover:text-[#EDEDED]"
                                whileHover={{ x: 3 }}
                                transition={{ duration: 0.2 }}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={items.playstore}
                              >
                                <img
                                  className="h-4"
                                  src="./Stores/google-play.png"
                                  alt="Play Store"
                                />
                                Play Store
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
