"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full mt-10">
      <div className="mx-auto w-[80%] flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        <motion.div
          className="w-[100%] text-[#D9D9D9] font-bold"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi,
          </motion.p>
          <motion.p
            className="text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My name is Chukwunonso obi
          </motion.p>
          <motion.p
            className="text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I am a{" "}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <TypeAnimation
              sequence={[
                "Mobile application developer",
                2000,
                "Full Stack Developer",
                2000,
                "Frontend developer",
                2000,
              ]}
              wrapper="span"
              className="text-xl"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full md:w-[40%]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <img
            className="h-full p-[4px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
            src="./pfp.jpeg"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
