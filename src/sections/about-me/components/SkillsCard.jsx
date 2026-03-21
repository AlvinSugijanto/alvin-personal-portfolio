import React from "react";
import { motion } from "framer-motion";

const SkillsCard = ({ skill, index }) => {
  const skillCardVariants = {
    hidden: {
      opacity: 0,
      rotateY: -90,
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const Icon = skill.icon;

  return (
    <motion.div
      key={skill.name}
      style={{ transformStyle: "preserve-3d" }}
      variants={skillCardVariants}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.3 },
      }}
      className="group relative p-4 sm:p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-2xl sm:text-3xl text-primary flex items-center justify-center">
              <img src={skill.icon} className="w-6 h-6" />
            </span>
            <h4 className="text-base sm:text-lg font-semibold text-white">
              {skill.name}
            </h4>
          </div>
          <span className="text-white font-bold text-sm">{skill.level}%</span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          />
        </div>
      </div>

      {/* Animated corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
      />
    </motion.div>
  );
};

export default SkillsCard;
