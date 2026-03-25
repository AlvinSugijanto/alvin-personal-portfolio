import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import Modal from "@/components/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Badge from "@/components/Badge";

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
    <Modal open={isOpen} onClose={onClose}>
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black text-gray-400 hover:text-white rounded-full transition-colors backdrop-blur-md"
      >
        <X size={24} />
      </button>

      {/* Image Slider */}
      <div className="w-full h-64 sm:h-80 md:h-[400px] bg-black/20">
        {project.images && project.images.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="w-full h-full"
          >
            {project.images.map((media, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center h-full"
              >
                {media.endsWith(".mkv") || media.endsWith(".mp4") ? (
                  <video
                    src={media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={media}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            No images available
          </div>
        )}
      </div>

      {/* Details Area */}
      <div className="p-6 sm:p-8 md:p-10 relative z-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-white drop-shadow-lg tracking-tight">
            {project.title}
          </h2>

          <div className="flex flex-shrink-0 items-center gap-4 relative z-30">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all border border-white/10 flex items-center justify-center cursor-pointer"
                title="View Source on GitHub"
              >
                <Github size={18} />
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary hover:bg-primary/90 rounded-lg text-sm font-semibold transition-all flex items-center gap-2"
                title="View Live Demo"
              >
                <span>Live Demo</span>
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {/* Main Description */}
          <div className=" space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              Description
            </h3>
            <p className="text-gray-300  leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.technologies.map((item) => (
                <Badge key={item} text={item} size="md" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
