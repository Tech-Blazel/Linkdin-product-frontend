import { FC } from "react";
import { FaChartLine, FaStar } from "react-icons/fa";
import LegendPieChart from "./sub-components/LegendPieChart";
import KeySummary from "./sub-components/KeySummary";
import ReportCard from "./sub-components/ReportCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { transformDataWithColors } from "@/utils/constants";
import { isEmpty } from "lodash";

const AudienceAnalysis: FC = () => {
  const {
    audienceCompositionByIndustry,
    audienceInsight,
    notableAudienceMembers,
  } = useSelector(
    (state: RootState) => state.auditReportSchema.audienceAnalysis
  );

  const industryData = transformDataWithColors(audienceCompositionByIndustry, [
    "#f4b6b0",
    "#f9df90",
    "#d3bdf4",
    "#a8dbf4",
    "#b0e9b4",
  ]);

  return (
    <ReportCard title="Audience Analysis" icon={FaChartLine}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          {!isEmpty(notableAudienceMembers) && (
            <>
              <h3 className="text-primary text-xl md:text-2xl font-bold mb-6 text-center">
                Notable Audience Members
              </h3>
              <ul className="text-lg text-text-primary space-y-2 mb-12">
                {notableAudienceMembers?.map((person, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <p className="">
                      <FaStar className="text-primary mr-2 mb-1 inline-block " />
                      <span className="font-semibold">{person?.name}:</span>{" "}
                      {person?.description}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}
          {!isEmpty(audienceInsight) && (
            <KeySummary title="Key Insight:" description={audienceInsight} />
          )}
        </div>
        {!isEmpty(industryData) && (
          <LegendPieChart
            title="Top Engagers by Industry"
            data={industryData}
            subTitle="Audience Composition by Industry (%)"
          />
        )}
      </div>
    </ReportCard>
  );
};

export default AudienceAnalysis;
