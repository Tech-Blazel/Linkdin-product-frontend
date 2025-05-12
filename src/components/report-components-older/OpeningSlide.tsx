import doodleBg from "@/assets/images/background.svg";
import logoImage from "@/assets/images/logo-with-text.svg";
import React from "react";

const OpeningSlide = () => {
  return (
    <div className="relative">
      <div className="relative">
        <div className="bg-white rounded-lg shadow overflow-hidden h-[77.5vh] w-[100%]">
          <img
            src={doodleBg}
            alt="doodle"
            className="w-[100%] h-[100%] object-cover absolute top-0 left-0"
          />
        </div>
        <div className="flex text-center flex-col gap-3 md:gap-5 items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src={logoImage} alt="Blazel Logo" className="h-25 min-w-48" />
          <p className="text-lg md:text-xl font-semibold">
            <span className="text-primary">Dive Sifry</span> - LinkedIn Audit
            Report
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpeningSlide;
