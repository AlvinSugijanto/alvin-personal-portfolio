import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import ParticleText from "@/sections/hero/components/ParticleText";
import { Github, Linkedin, Mail } from "lucide-react";

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

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV_ALVIN_SUGIJANTO_2025.pdf";
    link.download = "CV_ALVIN_SUGIJANTO_2025.pdf";
    link.click();
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
            className="font-grotesk text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed sm:leading-loose tracking-[0.1em] sm:tracking-[0.15em] font-semibold uppercase text-gray-200 mt-12"
            variants={itemVariants}
          >
            FULLSTACK DEVELOPER
          </motion.p>

          <motion.div
            className="flex gap-3 sm:gap-4 justify-center flex-col sm:flex-row w-full sm:w-auto mt-8"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold border-none rounded-xl cursor-pointer bg-gradient-to-br from-primary to-primary-600 text-white relative overflow-hidden transition-shadow duration-300"
            >
              View My Work
            </motion.a>
            <motion.button
              onClick={handleDownloadCV}
              className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold  bg-primary-500/20 border-2 border-primary-500/50 rounded-xl cursor-pointer  text-white backdrop-blur-md hover:border-white/30 transition-colors duration-300"
            >
              View My Resume
            </motion.button>
          </motion.div>
          <motion.div className="flex gap-3 justify-center mt-8">
            <motion.a
              variants={itemVariants}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-500/20 border border-primary-500/50 hover:cursor-pointer hover:bg-primary/10 hover:text-primary/80 transition-all duration-300"
              href="https://github.com/AlvinSugijanto"
              target="_blank"
            >
              <Github size={24} />
            </motion.a>

            <motion.a
              variants={itemVariants}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-500/20 border border-primary-500/50 hover:cursor-pointer hover:bg-primary/10 hover:text-primary/80 transition-all duration-300"
              href="https://www.linkedin.com/in/alvinsugijanto/"
              target="_blank"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              variants={itemVariants}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-500/20 border border-primary-500/50 hover:cursor-pointer hover:bg-primary/10 hover:text-primary/80 transition-all duration-300"
              href="mailto:alvinsugijanto123@gmail.com"
              target="_blank"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
          {/* <div className=" px-4 sm:px-6 py-2 sm:py-3 bg-primary-500/20 border border-primary-500/50 rounded-lg backdrop-blur-sm hover:bg-primary-500/30 transition-all duration-300 text-center">
            <p className="text-primary font-semibold text-sm sm:text-base">
              2+ Years
            </p>
            <p className="text-xs sm:text-sm text-gray-400">Work Experience</p>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
