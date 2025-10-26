import React from "react";
import ExperienceLayout from "./ExperienceLayout";
import { experienceData } from "@/app/data";

const ExperienceList = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center space-y-6 md:space-y-8">
      <h1 className="text-6xl lg:text-8xl font-bold text-accent pt-32">
        Tales from the Internship Tower
      </h1>

      <div className="w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:mx-0 pb-20 flex flex-col gap-6 md:gap-8">
        {experienceData.map((experience) => (
          <ExperienceLayout key={experience.id} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
