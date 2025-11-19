import React from "react";
import proPic from "../assets/propicSq.JPG";
import { motion } from "motion/react";

const Hero = () => {
  const container = (delay) => ({
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className="h-[70vh] border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col item-center lg:items-start mx-16 ">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Mohammed Aasim
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-3xl text-transparent"
            >
              Front-End Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight "
            >
              "I am a passionate Front-End Developer with a proven track record
              in building user-centric web applications using React.js. With
              strong problem-solving skills and a commitment to clean,
              maintainable code, I thrive in dynamic and challenging
              environments. My goal is to contribute to impactful projects while
              continually enhancing my technical expertise."
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              variants={container(0)}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="h-1/2 w-1/2 rounded-3xl"
              src={proPic}
              alt="profile picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
