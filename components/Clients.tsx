import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>
      {/* Reviews Container */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md
        flex flex-col antialiased items-center relative overflow-hidden
        
        "
        >
          <InfiniteMovingCards items={testimonials} speed="slow" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
