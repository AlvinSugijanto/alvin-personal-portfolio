import React from "react";

const Badge = ({ text }) => {
  return (
    <span className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-md text-gray-300">
      {text}
    </span>
  );
};

export default Badge;
