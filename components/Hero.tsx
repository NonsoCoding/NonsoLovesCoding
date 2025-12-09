"use client";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="w-full mt-10">
      <div className="mx-auto w-[80%] flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        <div className="w-[100%] text-[#D9D9D9] font-bold">
          <p className="text-5xl">Hi,</p>
          <p className="text-5xl">My name is Chukwunonso obi</p>
          <p className="text-xl">I am a </p>
          <TypeAnimation
            sequence={[
              "Mobile application developer", // Text
              2000, // Wait 2s
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
        </div>
        <div className="w-full md:w-[40%]">
          <img
            className="h-full p-[4px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
            src="./pfp.jpeg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
