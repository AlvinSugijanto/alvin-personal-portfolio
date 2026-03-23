import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({ experience, index }) => {
  // Animation variants for the card sliding up
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        z: 30,
        rotateX: 5,
        rotateY: -5,
        transition: { duration: 0.3 },
      }}
      className="group relative p-6 sm:p-8 bg-gradient-to-br from-black/40 to-transparent border border-white/10 rounded-2xl hover:border-primary/50 transition-all duration-300 w-full xs:h-full flex flex-col"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* 3D Drop Shadow on Hover */}
      <div className="absolute inset-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

      {/* Decorative Cyber Accent */}
      {/* <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-2xl pointer-events-none" /> */}

      <div className="relative z-10 flex-grow flex flex-col">
        <div className="flex flex-col xl:flex-row xl:items-start justify-between mb-4 gap-3">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
              {experience.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-400 font-medium mt-1">
              {experience.company}
            </p>
          </div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-primary font-mono select-none self-start flex-shrink-0">
            {experience.period}
          </div>
        </div>

        <div className="text-sm text-gray-300 leading-relaxed mb-6 flex-grow">
          {experience.description}
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-md text-gray-300 group-hover:border-primary/30 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
