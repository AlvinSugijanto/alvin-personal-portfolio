import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, index, onClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
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
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      onClick={() => onClick(project)}
      className="group relative flex flex-col cursor-pointer bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 w-full h-full"
    >
      {/* 3D Drop Shadow on Hover */}
      <div className="absolute inset-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Image Container */}
      <div className="w-full h-48 sm:h-56 relative overflow-hidden bg-white/5">
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
        {/* Decorative Overlay Icon */}
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
             <div className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white group-hover:text-primary">
                 <ArrowUpRight size={20} />
             </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow relative z-20">
        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 mb-2">
          {project.title}
        </h3>
        
        <p className="text-sm text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies Grid */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-md text-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-md text-gray-300">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
