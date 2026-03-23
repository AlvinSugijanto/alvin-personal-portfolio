import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const Modal = ({ open, onClose, children }) => {
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
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Modal;
