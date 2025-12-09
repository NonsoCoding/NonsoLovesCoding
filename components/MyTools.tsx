"use client";

import { motion, Variants } from "framer-motion";

const MyTools = () => {
  const TechStacksIcon = [
    { icon: "./vscodeIcon.svg", name: "VS Code" },
    { icon: "./expoIcon.png", name: "Expo" },
    { icon: "./androidStudioIcon.png", name: "Android Studio" },
    { icon: "./xcodeIcon.png", name: "Xcode" },
  ];

  // Container animation - for staggering children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Individual card animation
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
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

  // Header animations
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

  return (
    <section className="w-full pb-20 md:pb-40 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D3D3D3]/5 to-transparent pointer-events-none" />

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center mb-16 space-y-3"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-block">
            <p className="text-4xl md:text-5xl text-[#D3D3D3] font-bold tracking-tight">
              My Tools
            </p>
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-[#D3D3D3] to-transparent mt-2 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <p className="text-[#A7A7A7] text-lg text-center max-w-2xl">
            Technologies I&#39;ve been working with recently
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {TechStacksIcon.map((items, index) => {
            return (
              <motion.div
                key={index}
                className="group relative"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Card */}
                <div
                  className="relative bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl p-8 
                              border border-[#D3D3D3]/10 
                              transition-all duration-300 ease-out
                              hover:border-[#D3D3D3]/30
                              hover:shadow-[0_0_30px_rgba(211,211,211,0.1)]
                              hover:-translate-y-2
                              aspect-square flex flex-col items-center justify-center"
                >
                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D3D3D3]/0 to-[#D3D3D3]/0 
                                group-hover:from-[#D3D3D3]/5 group-hover:to-transparent 
                                transition-all duration-300"
                  />

                  {/* Icon container */}
                  <motion.div
                    className="relative z-10 w-full h-full flex items-center justify-center"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      className="w-16 h-16 md:w-20 md:h-20 object-contain filter drop-shadow-lg"
                      src={items.icon}
                      alt={items.name}
                    />
                  </motion.div>

                  {/* Tool name - appears on hover */}
                  <div
                    className="absolute bottom-4 left-0 right-0 text-center
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-300"
                  >
                    <p className="text-[#D3D3D3] text-sm font-medium">
                      {items.name}
                    </p>
                  </div>
                </div>

                {/* Decorative corner accents */}
                <div
                  className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#D3D3D3]/0 
                              group-hover:border-[#D3D3D3]/50 transition-all duration-300 rounded-tl-lg"
                />
                <div
                  className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#D3D3D3]/0 
                              group-hover:border-[#D3D3D3]/50 transition-all duration-300 rounded-br-lg"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MyTools;
