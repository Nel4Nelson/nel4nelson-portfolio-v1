/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import NelAvatar from "@/public/images/Nel-in-business.svg";

export function ScrollingBanner() {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  // Start animation on component mount
  useEffect(() => {
    controls.start({
      x: "-50%",
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls]);

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.stop();
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({
      x: "-50%",
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Collaboration Banner"
      role="region"
    >
      <div className="absolute top-0 w-full h-2 bg-custom-lime" />

      <div className="w-full bg-custom-purple">
        <div
          className="flex relative"
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
        >
          <motion.div
            className="flex items-center gap-[95.94px] py-4"
            animate={controls}
            initial={{ x: "0%" }}
            whileHover={{ cursor: "grab" }}
            whileTap={{ cursor: "grabbing" }}
            drag={isHovered ? "x" : false}
            dragConstraints={{ left: -1000, right: 1000 }}
            dragElastic={0.1}
          >
            {/* Double the items for seamless looping */}
            {[...Array(12)].map((_, index) => (
              <BannerItem key={index} />
            ))}
            {[...Array(12)].map((_, index) => (
              <BannerItem key={`duplicate-${index}`} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-2 bg-custom-lime" />
    </section>
  );
}

function BannerItem() {
  return (
    <div className="flex items-center gap-4 px-4 bg-custom-purple select-none">
      <Image
        src={NelAvatar}
        alt="Nel's avatar"
        width={32}
        height={32}
        className="rounded-full w-8 h-8"
        priority
      />
      <span className="text-white font-raleway text-xl sm:text-2xl md:text-[32px] font-bold whitespace-nowrap leading-none">
        LET'S WORK TOGETHER!
      </span>
    </div>
  );
}
