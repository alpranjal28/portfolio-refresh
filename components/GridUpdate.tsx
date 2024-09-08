import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/Bento-Grid";

export default function GridUpdate() {
  return (
    <section id="about">
      <BentoGrid className="max-w-full mx-5 my-10">
        {items.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.gridClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const items = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "Experience the thrill of bringing ideas to life.",
    gridClassName: "md:col-span-3 md:row-span-4",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description:
      "Always in sync, no matter Adapting to your time, no matter where in the world.",
    gridClassName: "md:col-span-2 md:row-span-2",
  },
  {
    id: 3,
    title: "Currently building a TS Portfolio",
    description: "The Inside Scoop",
    gridClassName: "md:col-span-2 md:row-span-2",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    gridClassName: "md:col-span-2 md:row-span-2",
  },
  {
    id: 5,
    title: "My tech stack",
    description: "I constantly try to improve",
    gridClassName: "md:col-span-3 md:row-span-4",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    gridClassName: "md:row-span-2 md:col-span-2",
  },
];
