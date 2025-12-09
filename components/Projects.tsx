"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const Projects = () => {
  const WebProjectsList = [
    {
      image: "./Homez.png",
      name: "Homez Estates",
      info: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      stack: "HTML , JavaScript, SASS, React",
      projectLink: "https://homez-ivory.vercel.app/",
      githubLink: "https://github.com/NonsoCoding/Homez",
    },
    {
      image: "./anhelina.png",
      name: "Anhelina",
      info: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      stack: "HTML , JavaScript, SASS, React",
      projectLink: "https://anhelina.vercel.app/",
      githubLink: "https://github.com/NonsoCoding/anhelina-front",
    },
    {
      image: "./capitalgadget.png",
      name: "CapitalGadgetz",
      info: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      stack: "HTML , JavaScript, SASS, React",
      projectLink: "https://capital-gadgetz.vercel.app/",
      githubLink: "https://github.com/NonsoCoding/CapitalGadgetz",
    },
  ];

  const MobileAppProjectList = [
    {
      image: "./WishMe.png",
      name: "Wish Me",
      info: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      stack: "JavaScript, ReactNative, Expo, Tailwind",
      githubLink: "",
      githubApk: "https://github.com/NonsoCoding/WishMe",
    },
    {
      image: "./ConfyRecipePhone.png",
      name: "ComfyRecipe",
      info: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      stack: "JavaScript, ReactNative, Expo, Tailwind",
      githubLink: "https://homez-ivory.vercel.app/",
      githubApk: "https://github.com/NonsoCoding/ComfyRecipe-App",
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
      <div className="w-[80%] mx-auto flex flex-col gap-15">
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
                          className="flex items-center gap-2"
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
