import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { ParallaxScroll } from "./ParallaxScroll";
import { skills } from "@/data";

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
  return (
    <div
      className={cn(
        "relative overflow-hidden row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-10 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 h-full",
        className
      )}
      style={{
        background: `rgb(16,14,40)`,
        backgroundColor: `linear-gradient(90deg, rgba(16,14,40,1) 0%, rgba(6,6,142,1) 100%)`,
      }}
    >
      {/* Optional gradient overlay for the container */}
      {id === 5 && (
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
      )}
      {id === 6 && (
        <div className="">
          <BackgroundGradientAnimation />
        </div>
      )}

      <div className="group-hover/bento:translate-x-2 transition duration-200 flex h-full z-0">
        <div className="flex flex-col items-center justify-center">
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
          <div className="font-sans font-bold text-2xl text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
        </div>
        <div className="">
          {/* Additional content or actions can be added here */}
          {/* For example, a button or a link */}
          {id === 5 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute  lg:-right-2">
              <ParallaxScroll
               skills={skills} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
