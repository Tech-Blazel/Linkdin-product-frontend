import React from "react";
import doodleBg from "@/assets/images/background.svg";
import logoImage from "@/assets/images/logo-with-text.svg";
import linkedInLogo from "@/assets/images/linkedIn-logo.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const CoverPage: React.FC = () => {
  const { subtitle, reportDate, clientInfo } = useSelector(
    (state: RootState) => state.auditReportSchema.reportMetadata
  );

  return (
    <div
      className="bg-white rounded-lg shadow overflow-hidden w-[100%] relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${doodleBg})`,
      }}
    >
      <div className="flex w-full text-center flex-col gap-3 md:gap-5 items-center justify-center">
        <div className="w-full rounded-xl px-6 py-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <img src={logoImage} alt="Blazel Logo" className="h-16 w-40 mr-2" />
          </div>

          <h2 className="text-5xl leading-15 flex flex-row flex-wrap justify-center items-center font-bold text-linkedIn-primary">
            <img
              src={linkedInLogo}
              alt="Blazel Logo"
              className="h-14 w-50 mr-1"
            />
            Engagement Analysis
          </h2>
          <p className="text-2xl font-normal text-text-primary mt-4 mb-8">
            {subtitle}
          </p>

          <div className="mt-8 bg-primary-light border-2 border-primary/20 rounded-xl p-5 max-w-[600px] mx-auto flex flex-col items-center">
            <img
              src={clientInfo?.profileUrl || ""}
              alt="Nick Cooney"
              className="w-30 h-30 bg-white rounded-full object-cover shadow-md mb-3"
            />
            <p className="text-primary font-bold text-4xl mt-3">
              {clientInfo?.name}
            </p>
            <p className="text-lg text-text-primary font-normal text-center">
              {clientInfo?.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
