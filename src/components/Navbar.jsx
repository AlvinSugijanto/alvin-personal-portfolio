import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/constants/navItems";
import useActiveSection from "@/hooks/useActiveSection";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navItems);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 py-4 transition-colors duration-500 ${
          isScrolled
            ? "bg-transparent backdrop-blur-xl shadow-lg shadow-white/5 border-b border-white/5"
            : "bg-transparent "
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 ">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold tracking-tighter cursor-pointer z-40"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-white">Alvin</span>
            <span className="text-white">.</span>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden sm:flex gap-8 items-center">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <a
                  href={`#${item.id}`}
                  className={`text-sm font-medium transition-colors duration-300 tracking-wide uppercase ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
                {/* Underline: always full-width when active, animates on hover otherwise */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 bg-white ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.li>
            ))}
          </ul>

          {/* Hamburger Button */}

          <button
            className={"lg:hidden text-xl text-white z-40"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Hamburger
              toggled={mobileMenuOpen}
              toggle={setMobileMenuOpen}
              size={26}
              color="white"
            />
          </button>
        </div>
      </motion.nav>
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-30 bg-[#0a0f1e] flex flex-col items-center justify-center sm:hidden"
          >
            <motion.ul
              className="flex flex-col gap-8 items-center"
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.2 } },
                closed: {},
              }}
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-2xl font-semibold transition-colors duration-300 tracking-widest uppercase ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
