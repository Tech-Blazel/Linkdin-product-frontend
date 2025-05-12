import { FC } from "react";
import { FaChartLine } from "react-icons/fa";
import KeySummary from "./sub-components/KeySummary";
import ReportCard from "./sub-components/ReportCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const PostingRecommendations: FC = () => {
  const recommendations = useSelector(
    (state: RootState) => state.auditReportSchema.recommendations
  );

  // converts object to array of objects with title and description
  const convertToTitleDescriptionArray = (input: Record<string, string>) => {
    return Object.entries(input).map(([key, value]) => {
      const title = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());

      return {
        title: title.trim(),
        description: value,
      };
    });
  };

  const recommendationsData = convertToTitleDescriptionArray(recommendations);

  return (
    <ReportCard title="Posting Recommendations" icon={FaChartLine}>
      {recommendationsData && (
        <div className="space-y-4">
          {recommendationsData?.map((rec, index) => (
            <KeySummary
              key={index}
              title={rec.title}
              description={rec.description}
            />
          ))}
        </div>
      )}
    </ReportCard>
  );
};

export default PostingRecommendations;
