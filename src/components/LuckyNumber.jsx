import { onValue, ref } from "firebase/database";
import React, { useEffect, useRef, useState } from "react";
import { database } from "../firebase";

const LuckyNumber = ({ result }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [goldenAnk, setGoldenAnk] = useState("");

  useEffect(() => {
    const dbRef = ref(database, "GOLDEN ANK");

    const unsub = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        setGoldenAnk(snapshot.val());
      }
    });

    return () => unsub();
  }, []);

  // Function to start animation on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Function to stop animation on leave
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className=" my-8 px-4  overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className=" font-playwrite text-3xl sm:text-5xl font-bold text-center">
        TODAY LUCKY NUMBER
      </div>
      <div className=" h-[8rem] flex gap-4 mt-4 border border-red-500 p-4 rounded-md shadow-lg bg-yellow-400">
        <div className=" flex-1 text-center">
          <div className=" font-playwrite font-bold text-lg xs:text-xl mb-5">
            Golden Ank
          </div>
          <div className=" text-xl xs:text-3xl font-bold text-blue-950">
            {goldenAnk
              ? `${goldenAnk[0]}-${goldenAnk[1]}-${goldenAnk[2]}-${goldenAnk[3]}`
              : "..."}
          </div>
        </div>
        <div className=" flex-1 flex flex-col items-center justify-center">
          <div className=" font-playwrite font-bold text-lg xs:text-xl">
            Final Ank
          </div>
          <div className="lucky-number-container text-center">
            <div className="scroll-animation  w-full" ref={containerRef}>
              {result &&
                result.map((data, index) => (
                  <div
                    key={index}
                    className="mb-2 flex items-center justify-center gap-2 text-xs xs:text-sm font-semibold text-blue-950"
                  >
                    <div className="">{data.NAME}</div>
                    <div>{data.LUCKY_NO ? data.LUCKY_NO : "..."}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuckyNumber;
