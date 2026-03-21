import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import ParticleText from "@/sections/hero/components/ParticleText";

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
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* ParticleText Canvas for Hero Section Only */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ParticleText />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative w-full max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 z-10 flex items-center justify-center mt-32 sm:mt-40 md:mt-48">
        <motion.div
          className="text-white text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="font-grotesk text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed sm:leading-loose tracking-[0.1em] sm:tracking-[0.15em] font-semibold uppercase text-gray-200"
            variants={itemVariants}
          >
            FRONTEND DEVELOPER
          </motion.p>

          <motion.div
            className="flex gap-3 sm:gap-4 justify-center flex-col sm:flex-row w-full sm:w-auto mt-8"
            variants={itemVariants}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold border-none rounded-xl cursor-pointer bg-gradient-to-br from-primary to-primary-600 text-white shadow-[0_10px_30px_rgba(6,182,212,0.3)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.5)] relative overflow-hidden transition-shadow duration-300"
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
              className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold border-2 border-white/20 rounded-xl cursor-pointer bg-white/10 text-white backdrop-blur-md hover:border-white/30 transition-colors duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex justify-center items-center gap-2 text-white/60 text-xs sm:text-sm animate-bounce-slow">
        <div className="w-[22px] sm:w-[26px] h-[34px] sm:h-[40px] border-2 border-white/40 rounded-[11px] sm:rounded-[13px] relative">
          <div className="w-1 h-2 bg-white/60 rounded-[2px] absolute top-2 left-1/2 -translate-x-1/2 animate-scroll"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
