import React from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import ParticleText from "./ParticleText";
import PointsExample from "./Points";
import { OrbitControls } from "@react-three/drei";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.5, // Delay until particle text forms
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* ParticleText Canvas for Hero Section Only */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ParticleText />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative w-full max-w-[900px] mx-auto px-8 z-10 flex items-center justify-center lg:px-8 sm:px-6 mt-48">
        <motion.div
          className="text-white text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="font-[Righteous] text-5xl leading-loose tracking-tight uppercase text-gray-300"
            variants={itemVariants}
          >
            FRONTEND DEVELOPER
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center sm:flex-row flex-col sm:w-full"
            variants={itemVariants}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-base font-semibold border-none rounded-xl cursor-pointer bg-gradient-to-br from-cyan-400 to-cyan-600 text-white shadow-[0_10px_30px_rgba(6,182,212,0.3)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.5)] relative overflow-hidden sm:w-full transition-shadow duration-300"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-base font-semibold border-2 border-white/20 rounded-xl cursor-pointer bg-white/10 text-white backdrop-blur-md hover:border-white/30 sm:w-full transition-colors duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 flex justify-center items-center gap-2 text-white/60 text-sm animate-bounce-slow">
        <div className="w-[26px] h-[40px] border-2 border-white/40 rounded-[13px] relative">
          <div className="w-1 h-2 bg-white/60 rounded-[2px] absolute top-2 left-1/2 -translate-x-1/2 animate-scroll"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
