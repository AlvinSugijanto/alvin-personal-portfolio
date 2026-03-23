import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 py-6 sm:py-12">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 300,
            duration: 0.4,
          }}
          className="relative w-full max-w-4xl max-h-full overflow-y-auto bg-gray-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col z-10 hide-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black text-gray-400 hover:text-white rounded-full transition-colors backdrop-blur-md"
          >
            <X size={24} />
          </button>

          {/* Header Image Area */}
          <div className="w-full h-48 sm:h-72 md:h-80 relative bg-black">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Area */}
          <div className="p-6 sm:p-8 md:p-10 relative z-20 -mt-16 sm:-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                {project.title}
              </h2>

              <div className="flex items-center gap-3 relative z-30">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 hover:bg-primary/20 text-white hover:text-primary rounded-xl transition-colors border border-white/10 hover:border-primary/50 flex items-center justify-center cursor-pointer"
                    title="View Source on GitHub"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-primary hover:bg-primary/90 text-black font-semibold rounded-xl transition-colors flex items-center gap-2"
                    title="View Live Demo"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Description */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Overview</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm bg-primary/10 border border-primary/20 rounded-lg text-primary font-medium shadow-[0_0_10px_rgba(255,255,255,0.05)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
