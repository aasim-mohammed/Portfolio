import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="border-b border-neutral-900 pb-4 pt-16 lg:mb-35">
      <motion.h2
        className="my-4 text-center text-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        <motion.div
          className="w-full lg:w-1/2 p-16 sm:p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="w-full">
            <div className="flex justify-center sm:justify-center">
              <p className="my-2 max-w-xl py-6 font-light sm:text-left">
                As a dedicated and enthusiastic individual, I am seeking
                opportunities where I can excel and continually learn. With a
                strong foundation in technology and a passion for
                problem-solving, I am eager to contribute to innovative projects
                and grow my skills in a dynamic and challenging environment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
