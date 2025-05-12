import { FC } from "react";
import { FaChartLine } from "react-icons/fa";
import KeySummary from "./sub-components/KeySummary";
import { PostingPatternChart } from "./sub-components/PostingPatternChart";
import ReportCard from "./sub-components/ReportCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { isEmpty } from "lodash";

const PostingPatterns: FC = () => {
  const { timingKeyFinding, postingFrequency, dayOfWeekPerformance } =
    useSelector(
      (state: RootState) => state.auditReportSchema.postingPatternsAnalysis
    );

  return (
    <ReportCard title="Posting Patterns Analysis" icon={FaChartLine}>
      <div className="space-y-7">
        <PostingPatternChart optimalPostingTData={dayOfWeekPerformance} />
        <div>
          <h4 className="text-primary text-xl md:text-2xl font-bold mb-4">
            Posting Frequency
          </h4>
          {!isEmpty(postingFrequency) && (
            <p className="text-text-primary text-lg">
              {/* Nick posts approximately{" "}
            <span className="text-primary font-semibold">1–2 times</span> per
            week, with slightly higher frequency when promoting his book or
            discussing significant industry developments. */}
              {postingFrequency}
            </p>
          )}
        </div>

        {!isEmpty(timingKeyFinding) && (
          <KeySummary title="Key Finding:" description={timingKeyFinding} />
        )}
      </div>
    </ReportCard>
  );
};

export default PostingPatterns;
