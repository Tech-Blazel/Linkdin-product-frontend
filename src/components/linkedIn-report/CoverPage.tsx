import React from "react";
import logoImage from "@/assets/images/logo-with-text.svg";
import linkedInLogo from "@/assets/images/linkedIn-logo.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import heroSlider from "@/assets/hero-slider-with-color.png";
import Bill from "@/assets/images/Bill.png";
import SmartImage from "../SmartImage";
import ProfileAvatar from "@/assets/images/profile-avatar.png";
import SmartBackground from "../SmartBackground";

const CoverPage: React.FC = () => {
  const { subtitle, clientInfo } = useSelector(
    (state: RootState) => state.auditReportSchema.reportMetadata
  );

  return (
    // <div
    //   className="w-full min-h-[80vh] md:min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-10 rounded-xl"
    //   style={{
    //     backgroundImage: `url(${heroSlider})`,
    //   }}
    // >
    <SmartBackground
      src={heroSlider}
      fallbackSrc={heroSlider}
      className="w-full min-h-[80vh] md:min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-10 rounded-xl"
    >
      <div className="bg-white rounded-xl p-6 sm:p-10 md:p-12 text-center shadow-md max-w-4xl w-[90%] md:w-full">
        <div className="flex items-center justify-center mb-4">
          <SmartImage
            src={logoImage}
            alt="Blazel Logo"
            className="h-14 md:h-16 w-auto mr-2"
          />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-bold text-linkedIn-primary flex flex-wrap justify-center items-center gap-2">
          <SmartImage
            src={linkedInLogo}
            alt="LinkedIn"
            className="h-10 md:h-12 w-auto"
          />
          Engagement Analysis
        </h2>

        <p className="text-lg sm:text-xl font-normal text-text-primary mt-4 mb-8">
          {subtitle}
        </p>

        <div className="mt-6 md:mt-10 bg-primary-light border-2 border-primary/20 rounded-xl p-4 sm:p-6 max-w-md mx-auto flex flex-col items-center">
          <SmartImage
            src={
              clientInfo?.name === "Bill Douglas"
                ? Bill
                : clientInfo?.profilePictureUrl || ""
            }
            alt={clientInfo?.name}
            fallbackSrc={ProfileAvatar}
            className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-full object-cover shadow-md mb-3"
          />
          <p className="text-primary font-bold text-2xl sm:text-3xl mt-3">
            {clientInfo?.name}
          </p>
          <p className="text-sm sm:text-base text-text-primary font-normal text-center">
            {clientInfo?.title}
          </p>
        </div>
      </div>
    </SmartBackground>
    // </div>
  );
};

export default CoverPage;
