"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";

export const ParallaxScroll = ({
  skills,
  className,
}: {
  skills: { title: string; type: string }[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(skills.length / 3);

  const firstPart = skills.slice(0, third);
  const secondPart = skills.slice(third, 2 * third);
  const thirdPart = skills.slice(2 * third);

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-1"
        ref={gridRef}
      >
        <div className="grid gap-5 md:gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <p className="w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0">
                {el.title}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-5 md:gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <p className="w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0">
                {el.title}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-5 md:gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <p className="w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0">
                {el.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
