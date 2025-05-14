import { FC } from "react";
import { FaChartLine } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import LegendPieChart from "./sub-components/LegendPieChart";
import KeySummary from "./sub-components/KeySummary";
import ReportCard from "./sub-components/ReportCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { pieChartColor, transformDataWithColors } from "@/utils/constants";
import { isEmpty } from "lodash";

// const barData = [
//   { name: "Food Tech", likes: 20 },
//   { name: "Book Promotion", likes: 35 },
//   { name: "Investment", likes: 10 },
//   { name: "Industry", likes: 20 },
// ];

// const pieData = [
//   { name: "Article Shares", value: 63, color: "#f4a69f" },
//   { name: "Images Posts", value: 25, color: "#fcd88d" },
//   { name: "Text-only Posts", value: 13, color: "#c7b3f8" },
// ];

const ContentAnalysis: FC = () => {
  const {
    averageLikesByContentTheme,
    visualImpactInsight,
    postTypeDistributionInsight,
    postTypesDistribution,
  } = useSelector(
    (state: RootState) => state.auditReportSchema.contentAnalysis
  );

  const postTypesDistributionData = transformDataWithColors(
    postTypesDistribution,
    pieChartColor
  );

  return (
    <ReportCard title="Content Analysis" icon={FaChartLine}>
      <div className="space-y-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col items-center text-center">
            {!isEmpty(averageLikesByContentTheme) && (
              <>
                <h3 className="text-primary text-xl md:text-2xl font-bold mb-4">
                  Content Themes
                </h3>
                <p className="text-sm font-medium text-text-primary mb-6">
                  Average Likes by Content Theme
                </p>
                <div className="w-full h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={averageLikesByContentTheme}>
                      <XAxis dataKey="theme" />
                      <YAxis />
                      <Tooltip />
                      <Bar
                        dataKey="averageLikes"
                        fill="#ff5733"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </>
            )}
          </div>

          {!isEmpty(postTypesDistribution) && (
            <LegendPieChart
              title="Post Types Distribution"
              data={postTypesDistributionData}
              innerRadius={0.1}
              subTitle="Average Likes by Content Theme"
            />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[visualImpactInsight, postTypeDistributionInsight]?.map(
            (item, index) => (
              <KeySummary key={index} title="Key Insight:" description={item} />
            )
          )}
        </div>
      </div>
    </ReportCard>
  );
};

export default ContentAnalysis;
