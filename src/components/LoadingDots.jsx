import React, { useEffect, useState } from "react";

const LoadingDots = () => {
  const [currentDot, setCurrentDot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDot((prev) => (prev + 1) % 4);
    }, 300); // Change the interval time to speed up or slow down the animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex">
      <span
        className={`transition-opacity duration-300 ${
          currentDot !== 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        .
      </span>
      <span
        className={`transition-opacity duration-300 ${
          currentDot === 2 || currentDot === 3 ? "opacity-100" : "opacity-0"
        }`}
      >
        .
      </span>
      <span
        className={`transition-opacity duration-300 ${
          currentDot === 3 ? "opacity-100" : "opacity-0"
        }`}
      >
        .
      </span>
    </div>
  );
};

export default LoadingDots;
