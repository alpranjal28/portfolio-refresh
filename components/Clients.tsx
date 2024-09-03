import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>
      {/* Reviews Container */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 max-lg:mt-10">
        <InfiniteMovingCards items={testimonials} speed="slow" />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10" id="testimonials">
          {companies.map(({ id, img, name, nameImg }, idx) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={img} alt={name} className="md:w-10 w-5" />
              <img src={nameImg} alt={name} className="md:w-24 w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
