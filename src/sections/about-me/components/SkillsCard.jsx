import React from "react";
import { motion } from "framer-motion";

const SkillsCard = ({ skill, index }) => {
  const skillCardVariants = {
    hidden: {
      opacity: 0,
      rotateY: -90,
      y: 20,
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={skillCardVariants}
      whileHover={{
        z: 20,
        rotateX: 10,
        rotateY: -10,
        transition: { duration: 0.3 },
      }}
      className="group relative p-4 sm:p-5 bg-gradient-to-l from-black/20 to-transparent border border-white/10 rounded-xl hover:border-primary/50 transition-all duration-300"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 shadow-[0_20px_50px_rgba(0,0,0,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Decorative Accent */}
      <div className="absolute bottom-2 right-2 text-[10px] uppercase tracking-widest text-white/20 group-hover:text-primary/50 transition-colors">
        SKILL_NODE
      </div>

      <div className="relative z-10 flex items-center gap-4">
        <div className="p-3 bg-white/10 rounded-full border border-white/10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
          />
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-bold text-white">
            {skill.name}
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsCard;
