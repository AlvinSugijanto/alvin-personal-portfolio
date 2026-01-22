import React from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { OrbitControls } from "@react-three/drei";
import SkillOrbs from "./SkillOrbs";

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-20">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            className="text-white z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
              variants={itemVariants}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl mb-6 leading-relaxed text-gray-300"
              variants={itemVariants}
            >
              Hi! I'm a passionate{" "}
              <span className="text-cyan-400 font-semibold">
                Full Stack Developer
              </span>{" "}
              with a love for creating beautiful and functional web experiences.
              I specialize in modern web technologies and 3D graphics.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl mb-6 leading-relaxed text-gray-300"
              variants={itemVariants}
            >
              With expertise in{" "}
              <span className="text-cyan-400 font-semibold">
                React, Three.js, and Node.js
              </span>
              , I build interactive applications that combine creativity with
              cutting-edge technology.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              variants={itemVariants}
            >
              <div className="px-6 py-3 bg-cyan-500/20 border border-cyan-500/50 rounded-lg backdrop-blur-sm">
                <p className="text-cyan-400 font-semibold">5+ Years</p>
                <p className="text-sm text-gray-400">Experience</p>
              </div>
              <div className="px-6 py-3 bg-cyan-500/20 border border-cyan-500/50 rounded-lg backdrop-blur-sm">
                <p className="text-cyan-400 font-semibold">50+ Projects</p>
                <p className="text-sm text-gray-400">Completed</p>
              </div>
              <div className="px-6 py-3 bg-cyan-500/20 border border-cyan-500/50 rounded-lg backdrop-blur-sm">
                <p className="text-cyan-400 font-semibold">10+ Clients</p>
                <p className="text-sm text-gray-400">Worldwide</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: 3D Skill Orbs */}
          <motion.div
            className="relative h-[500px] lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
              <SkillOrbs />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Canvas>

            {/* Instruction text */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-white/60 text-sm">
                Hover over the orbs to see skills
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
