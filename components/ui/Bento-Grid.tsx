"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { ParallaxScroll } from "./ParallaxScroll";
import { skills } from "@/data";
import { GridGlobe } from "./GridGlobe";
import { Copy } from "lucide-react";
import MagicButton from "./Button";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import { useState } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] md:grid-rows-8 grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}) => {
  // Copy to clipboard
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("alpranjal28@gmail.com");
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "relative h-full min-h-40 w-full px-1 overflow-hidden row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col",
        className
      )}
      style={{
        background: `rgb(16,14,40)`,
        backgroundColor: `linear-gradient(90deg, rgba(16,14,40,1) 0%, rgba(6,6,142,1) 100%)`,
      }}
    >
      {/* Optional gradient overlay for the container */}
      {id === 1 && (
        <img src="b4.svg" alt="" className="absolute right-0 bottom-0" />
      )}
      {id === 2 && <GridGlobe />}
      {id === 3 && (
        <img
          src="b5.svg"
          className="absolute -bottom-52 -right-24 opacity-80"
        />
      )}
      {id === 4 && (
        <img src="b4.svg" alt="" className="absolute right-0" />
      )}

      {id === 5 && (
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
      )}
      {id === 6 && (
        <>
          <BackgroundGradientAnimation />
          <div className="absolute inset-0">
            <Lottie
              options={{
                loop: copied,
                autoplay: copied,
                animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            />
          </div>
        </>
      )}

      <div
        className="
      relative group-hover/bento:translate-x-2 transition duration-200 flex h-full w-full z-10
      
      "
      >
        <div className="flex flex-col items-start justify-center p-5 md:p-10  gap-2">
          {/* Text content section */}
          <div className="relative">
            <div className="font-sans font-extralight text-[#c1c2d3] text-xm md:text-xs lg:text-base">
              {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96">
              {title}
            </div>
          </div>
          {/* Additional buttons or actions can be added here */}
          {id === 4 && <MagicButton title="Github" />}
          {id === 6 && (
            <MagicButton
              title={copied ? "Email copied" : "Copy email"}
              icon={<Copy />}
              position="left"
              otherClasses="!bg-[#161131]"
              handleClick={handleCopy}
            />
          )}
        </div>
        <div className="">
          {/* Additional content or actions can be added here */}
          {/* For example, a button or a link */}
          {id === 5 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <ParallaxScroll skills={skills} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
