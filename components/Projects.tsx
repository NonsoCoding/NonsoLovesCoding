"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const Projects = () => {
  const WebProjectsList = [
    {
      image: "./GiftincashImages/GiftincashWeb.png",
      name: "Giftincash",
      info: "A feature-rich digital gifting and financial rewards application offering seamless user authentication, personalized user notifications, and instant transactional updates.",
      stack: "HTML , JavaScript, SASS, React",
      projectLink: "https://giftincash.com/",
      githubLink: "https://github.com/404Enterprise/gift-in-cash",
    },
    {
      image: "./LasMobileImages/LasWeb.png",
      name: "Las Mobile",
      info: "An enterprise-grade logistics and delivery management application built for real-time shipment visibility, automated routing, and reliable field operation tracking.",
      stack: "HTML , JavaScript, SASS, React",
      projectLink: "https://www.lastechnologiesltd.com/",
      githubLink: "https://github.com/NonsoCoding/Las-Mobile-Website",
    },
    {
      image: "./RuthEgbeImages/ruthegbe.png",
      name: "RuthEgbe",
      info: "A professional thought-leadership and consultation platform designed for a development catalyst, change engineer, and leadership coach, built to showcase programs, mentorship ecosystems, and insights.",
      stack: "HTML , JavaScript, SASS, React",
      projectLink: "https://ruthegbe.com/",
      githubLink: "https://github.com/NonsoCoding/Homez",
    },
    {
      image: "./404enterprise/404image.png",
      name: "404Enterprise",
      info: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      stack: "HTML , JavaScript, SASS, React",
      projectLink: "https://404enterprise.com/",
      githubLink: "https://github.com/NonsoCoding/Homez",
    },
    {
      image: "./anhelina/anhelinaImage.png",
      name: "Anhelina",
      info: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      stack: "HTML , JavaScript, SASS, React",
      projectLink: "https://anhelina.vercel.app/",
      githubLink: "https://github.com/NonsoCoding/anhelina-front",
    },
    {
      image: "./CapitalGadgetz/capitalImage.png",
      name: "CapitalGadgetz",
      info: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      stack: "HTML , JavaScript, SASS, React",
      projectLink: "https://capital-gadgetz.vercel.app/",
      githubLink: "https://github.com/NonsoCoding/CapitalGadgetz",
    },
  ];

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

  // Header animation
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  // Section title animation
  const sectionTitleVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  // Container for staggered cards
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Individual card animation
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="w-full">
      <div className="w-[90%] mx-auto flex flex-col gap-15">
        {/* Main Header */}
        <motion.div
          className="items-center flex flex-col gap-4"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-block">
            <p className="text-4xl md:text-5xl text-[#D3D3D3] font-bold tracking-tight">
              My Projects
            </p>
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-[#D3D3D3] to-transparent mt-2 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <motion.p
            className="text-[#A7A7A7]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Things I&apos;ve built so far
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-25">
          {/* Website Projects Section */}
          <div className="flex flex-col gap-10">
            <motion.div
              className="flex justify-between items-center"
              variants={sectionTitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-3xl text-[#A7A7A7] font-semibold">
                Website Projects
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {WebProjectsList.map((items, index) => {
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3 },
                    }}
                    className="bg-[#363636] rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(211,211,211,0.15)] transition-shadow duration-300"
                  >
                    {/* Image with zoom effect on hover */}
                    <div className="overflow-hidden">
                      <motion.img
                        className="w-full"
                        src={items.image}
                        alt={items.name}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        width={500}
                        height={300}
                      />
                    </div>

                    <div className="p-6 text-[#CCCCCC] flex flex-col gap-4">
                      <p className="text-xl font-semibold">{items.name}</p>
                      <p className="font-light">{items.info}</p>
                      <p className="font-light">
                        <span className="font-semibold">Tech stack :</span>{" "}
                        {items.stack}
                      </p>
                      <div className="flex justify-between">
                        <motion.div
                          className="flex items-center gap-4"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <img className="h-5" src="./link.svg" alt="" />
                          <a
                            className="border-b-2 text-xs hover:border-b-white hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={items.projectLink}
                          >
                            Live Preview
                          </a>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-4"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <img className="h-5" src="./github.svg" alt="" />
                          <a
                            className="border-b-2 text-xs hover:border-b-white hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={items.githubLink}
                          >
                            View Code
                          </a>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Mobile App Projects Section */}
          <div className="flex flex-col gap-10">
            <motion.div
              variants={sectionTitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Link
                href={"../projects/websites"}
                className="flex items-center justify-between"
              >
                <p className="text-3xl text-[#A7A7A7] font-semibold">
                  Mobile Application Projects
                </p>
              </Link>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 w-[100%] md:w-[100%] lg:w-[85%] mx-auto gap-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {MobileAppProjectList.map((items, index) => {
                const projectImages =
                  items.images && items.images.length > 0
                    ? items.images
                    : [items.image];

                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3 },
                    }}
                    className="bg-[#363636] pt-4 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(211,211,211,0.15)] transition-shadow duration-300 flex flex-col justify-between"
                  >
                    <ProjectImageSlider
                      images={projectImages}
                      alt={items.name}
                    />

                    <div className="p-6 text-[#CCCCCC] flex flex-col gap-4">
                      <p className="text-xl font-semibold">{items.name}</p>
                      <p className="font-light">{items.info}</p>
                      <p className="font-light">
                        <span className="font-semibold">Tech stack :</span>{" "}
                        {items.stack}
                      </p>
                      <div className="flex justify-between">
                        <motion.div
                          className="flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <img className="h-5" src="./github.svg" alt="" />
                          <a
                            className="border-b-2 text-xs hover:border-b-white hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={items.githubLink || items.githubApk}
                          >
                            View Code
                          </a>
                        </motion.div>
                        <div className="flex items-center gap-5">
                        <motion.div
                          className="flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <img className="h-5" src="./Stores/appstore.png" alt="" />
                          <a
                            className="border-b-2 text-xs hover:border-b-white hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={items.appstore}
                          >
                            App Store
                          </a>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <img className="h-5" src="./Stores/google-play.png" alt="" />
                          <a
                            className="border-b-2 text-xs hover:border-b-white hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={items.githubLink || items.githubApk}
                          >
                            Play Store
                          </a>
                        </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

