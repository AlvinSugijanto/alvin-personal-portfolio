import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./components/ExperienceCard";
import { experienceData } from "@/constants/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full py-12 xs:py-24 bg-transparent overflow-hidden"
    >
      <div className="container mx-auto px-4 xs:px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
          >
            Experience
          </motion.h2>
        </div>

        <div className="relative pt-6 md:pt-12">
          {/* Horizontal Line Background */}
          <div className="absolute top-[34px] md:top-[58px] left-4 right-4 md:left-0 md:right-0 h-[2px] bg-white/10" />

          {/* Scrolling Container */}
          <div className="flex flex-row gap-6 md:gap-8 pb-12 pt-4 px-4 overflow-x-auto sm:px-0 hide-scrollbar -mx-4 sm:mx-0">
            {experienceData.map((experience, index) => (
              <div
                key={index}
                className="flex-none w-[85vw] sm:w-[400px] md:w-[450px] snap-center relative flex flex-col pt-12 md:pt-16"
              >
                {/* Timeline Node (Dot) */}
                <div className="absolute top-[-2px] md:top-[4px] left-1/2 -ml-[8px] flex flex-col items-center z-20">
                  <div className="flex items-center justify-center w-4 h-4 rounded-full bg-black border-2 border-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)]">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-primary"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  {/* Vertical Connector Line (Node to Card) */}
                  {/* <div className="w-[2px] h-10 md:h-14 bg-gradient-to-b from-primary to-transparent" /> */}
                </div>

                <div className="h-full">
                  <ExperienceCard experience={experience} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
