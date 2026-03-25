import React from "react";

const Badge = ({ text, size = "sm" }) => {
  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };
  return (
    <span
      className={`${sizeClasses[size]} bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-colors rounded-md text-gray-300`}
    >
      {text}
    </span>
  );
};

export default Badge;
