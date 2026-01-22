import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-tighter cursor-pointer">
        <span className="text-white">Alvin</span>
        <span className="text-cyan-400">.</span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-8 items-center">
        {["Home", "About", "Work", "Contact"].map((item) => (
          <li key={item} className="relative group">
            <a
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-300 tracking-wide uppercase"
            >
              {item}
            </a>
            <span className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 bg-cyan-400 group-hover:w-full w-0"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button (Simple) */}
      <button className="sm:hidden text-white focus:outline-none">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
