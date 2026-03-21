import { useState, useEffect } from "react";

/**
 * Custom hook to detect current device type based on screen width
 * @returns {'mobile' | 'tablet' | 'desktop'} Current device type
 */
const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const getDeviceType = () => {
      const width = window.innerWidth;

      if (width < 640) {
        return "mobile";
      } else if (width < 1024) {
        return "tablet";
      } else {
        return "desktop";
      }
    };

    // Set initial value
    setDeviceType(getDeviceType());

    // Update on resize
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
};

export default useDeviceType;
