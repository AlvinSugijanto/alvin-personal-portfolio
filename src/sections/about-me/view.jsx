import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { skills } from "@/constants/skills";
import SkillsCard from "./components/SkillsCard";

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-12 sm:py-16 md:py-20"
    >
      <div className="container mx-auto px-6 xs:px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Text Content */}
          <motion.div
            className="text-white z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-white"
              variants={itemVariants}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg md:text-3xl mb-4 sm:mb-6 leading-relaxed text-gray-300"
              variants={itemVariants}
            >
              Hi! I'm a{" "}
              <span className="text-primary font-semibold">
                Full Stack Developer!
              </span>{" "}
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed text-gray-300"
              variants={itemVariants}
            >
              I enjoy turning ideas into real digital products, building
              applications that are not only functional but also intuitive and
              enjoyable to use.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed text-gray-300"
              variants={itemVariants}
            >
              From crafting clean and responsive user interfaces to designing
              reliable systems behind the scenes, I aim to create applications
              that are scalable, maintainable, and built with attention to
              detail.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8"
              variants={itemVariants}
            >
              <div className="flex-1 min-w-[100px] px-4 sm:px-6 py-2 sm:py-3 bg-primary-500/20 border border-primary-500/50 rounded-lg backdrop-blur-sm hover:bg-primary-500/30 transition-all duration-300 text-center">
                <p className="text-primary font-semibold text-sm sm:text-base">
                  2+ Years
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Work Experience
                </p>
              </div>
              <div className="flex-1 min-w-[100px] px-4 sm:px-6 py-2 sm:py-3 bg-primary-500/20 border border-primary-500/50 rounded-lg backdrop-blur-sm hover:bg-primary-500/30 transition-all duration-300 text-center">
                <p className="text-primary font-semibold text-sm sm:text-base">
                  50+ Projects
                </p>
                <p className="text-xs sm:text-sm text-gray-400">Completed</p>
              </div>
              <div className="flex-1 min-w-[100px] px-4 sm:px-6 py-2 sm:py-3 bg-primary-500/20 border border-primary-500/50 rounded-lg backdrop-blur-sm hover:bg-primary-500/30 transition-all duration-300 text-center">
                <p className="text-primary font-semibold text-sm sm:text-base">
                  10+ Clients
                </p>
                <p className="text-xs sm:text-sm text-gray-400">Worldwide</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Animated Skills Grid */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8"
              variants={itemVariants}
            >
              Skills & Expertise
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 perspective-1000">
              {skills.map((skill, index) => (
                <SkillsCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"
              animate={{
                y: [0, 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
