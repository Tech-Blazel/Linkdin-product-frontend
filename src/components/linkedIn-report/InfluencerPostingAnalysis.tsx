import { FC } from "react";
import { FaChartLine } from "react-icons/fa";
import DataTable, { Column } from "./sub-components/DataTable";
import KeySummary from "./sub-components/KeySummary";
import ReportCard from "./sub-components/ReportCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

type InfluencerRow = {
  name: string;
  linkedinUrl: string;
  followers: number;
  postsPerYear: number;
  topContentTypes: string;
  topThemes: string;
  postingFrequency: string;
};

const influencerColumns: Column<InfluencerRow>[] = [
  { key: "name", header: "Name" },
  {
    key: "linkedinUrl",
    header: "LinkedIn URL",
    render: (val) => (
      <a href={val} target="_blank" className="text-primary underline">
        Profile
      </a>
    ),
  },
  { key: "followers", header: "Followers" },
  { key: "postsPerYear", header: "Posts Per Year" },
  { key: "topContentTypes", header: "Top Content Types" },
  { key: "topThemes", header: "Top Themes" },
  { key: "postingFrequency", header: "Posting Frequency" },
];

type GapRow = {
  gap: string;
  yourValue: string;
  influencerAverage: string;
  recommendedAction: string;
};

const gapColumns: Column<GapRow>[] = [
  { key: "gap", header: "Gap" },
  { key: "yourValue", header: "Your Value" },
  { key: "influencerAverage", header: "Influencer Average" },
  { key: "recommendedAction", header: "Recommended Action" },
];

const InfluencerPostingAnalysis: FC = () => {
  const { gapAnalysis, influencerComparison, summaryOfComparisons } =
    useSelector((state: RootState) => state.auditReportSchema);

  return (
    <ReportCard title="Influencers Posting Analysis" icon={FaChartLine}>
      <div className="space-y-7">
        <DataTable columns={influencerColumns} data={influencerComparison} />
        <KeySummary description={summaryOfComparisons || "..."} />
        <DataTable columns={gapColumns} data={gapAnalysis} />
      </div>
    </ReportCard>
  );
};

export default InfluencerPostingAnalysis;
