import { FC } from "react";
import { FaChartLine } from "react-icons/fa";
import { LuStar } from "react-icons/lu";
import TopInfluencersCards from "./sub-components/TopInfluencersCards";
import ReportCard from "./sub-components/ReportCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const TopInfluencers: FC = () => {
  const { overview, keyInfluencerInsights, influencers } = useSelector(
    (state: RootState) => state.auditReportSchema.topIndustryInfluencersAnalysis
  );

  const keyInsightsForStrategyBadges = function convertInsightObjectToArray(
    input: any
  ): string[] {
    const camelCaseToLabel = (key: string): string => {
      return key
        .replace(/([A-Z])/g, " $1")
        .replace(/personal story data/gi, "personal story + data")
        .replace(/contrarian views/gi, "contrarian views")
        .toLowerCase();
    };

    return Object.entries(input).map(([key, value]) => {
      const label = camelCaseToLabel(key);
      return `${value} ${label}`;
    });
  };

  const keyInsightStrategyBadges = keyInsightsForStrategyBadges(
    keyInfluencerInsights
  );

  console.log("influencers", influencers);

  return (
    <ReportCard title="Top Industry Influencers" icon={FaChartLine}>
      <div className="">
        {/* {!isEmpty(summary) && ( */}
        <p className="text-text-primary text-lg font-normal line-clamp-5 pb-6">
          {overview}
        </p>
        {/* )} */}

        <h4 className="text-primary text-xl md:text-2xl font-bold mb-4">
          Posting Frequency
        </h4>
        <div className="flex flex-wrap gap-3 text-lg font-medium pb-6">
          {keyInsightStrategyBadges?.map((b, i) => (
            <p
              key={i}
              className="border border-primary/20 text-primary text-base px-3 py-2 rounded-full bg-primary-light/40"
            >
              <LuStar className="font-bold inline-block mr-2 mb-1" />
              {b}
            </p>
          ))}
        </div>

        <TopInfluencersCards influencers={influencers} />
      </div>
    </ReportCard>
  );
};

export default TopInfluencers;
