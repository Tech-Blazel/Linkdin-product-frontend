import { FC } from "react";
import { FaChartLine } from "react-icons/fa";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import LegendPieChart from "./sub-components/LegendPieChart";
import KeySummary from "./sub-components/KeySummary";
import ReportCard from "./sub-components/ReportCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { isEmpty } from "lodash";
import { pieChartColor, transformDataWithColors } from "@/utils/constants";

const HashtagPerformanceAnalysis: FC = () => {
  const { hashtagUsageVisual, topPerformingHashtags, hashtagKeyFinding } =
    useSelector(
      (state: RootState) => state.auditReportSchema.hashtagPerformanceAnalysis
    );

  const hashtagUsageData = transformDataWithColors(
    hashtagUsageVisual,
    pieChartColor
  );

  return (
    <ReportCard title="Hashtag Performance Analysis" icon={FaChartLine}>
      <div className="space-y-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {!isEmpty(hashtagUsageData) && (
            <LegendPieChart
              title="Hashtag Usage"
              data={hashtagUsageData}
              description={""}
              innerRadius={0.1}
              subTitle="Hashtag Usage in Posts"
            />
          )}

          {!isEmpty(topPerformingHashtags) && (
            <div className="text-center">
              <h3 className="text-primary text-xl md:text-2xl font-bold mb-4">
                Top Performing Hashtags
              </h3>
              <p className="text-base text-text-primary mb-4">
                Average Likes by Day of Week
              </p>

              <div className="w-full h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={topPerformingHashtags}
                    margin={{ top: 0, right: 20, left: 50, bottom: 0 }}
                    barCategoryGap={8}
                  >
                    <XAxis type="number" />
                    <YAxis
                      type="category"
                      dataKey="hashtag"
                      tick={{ fontSize: 10, fontStyle: "italic" }}
                    />
                    <Tooltip />
                    <Bar
                      dataKey="averageEngagementRate"
                      fill="#8ddad5"
                      radius={[0, 6, 6, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
        <KeySummary title="Key Finding:" description={hashtagKeyFinding} />
      </div>
    </ReportCard>
  );
};

export default HashtagPerformanceAnalysis;
