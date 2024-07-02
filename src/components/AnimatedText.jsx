import React, { useEffect, useState } from "react";

const AnimatedText = ({
  text,
  delayBetweenLoops = 1000,
  intervalTime = 100,
}) => {
  const [animatedText, setAnimatedText] = useState([]);

  useEffect(() => {
    const textArray = text.split("").map((char, index) => ({
      char,
      isActive: false,
    }));
    setAnimatedText(textArray);

    let index = 0;
    const animate = () => {
      setAnimatedText((prev) => {
        const newArray = [...prev].map((item, idx) => ({
          ...item,
          isActive: idx <= index,
        }));
        index = (index + 1) % newArray.length;
        return newArray;
      });

      if (index === 0) {
        clearInterval(interval);
        setTimeout(() => {
          interval = setInterval(animate, intervalTime);
        }, delayBetweenLoops);
      }
    };

    let interval = setInterval(animate, intervalTime);

    return () => clearInterval(interval);
  }, [text, delayBetweenLoops, intervalTime]);

  return (
    <div className="flex">
      {animatedText.map((item, index) => (
        <span
          key={index}
          className={`transition-colors duration-300 ${
            item.isActive ? "text-red-500" : "text-black"
          }`}
        >
          {item.char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
