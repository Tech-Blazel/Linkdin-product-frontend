import { FC } from "react";
import { FaChartLine, FaStar } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PostCards from "./sub-components/PostCards";
import ReportCard from "./sub-components/ReportCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const COLORS = {
  likes: "#ff5733",
  comments: "#ffd857",
  shares: "#2b6cb0",
};

const TopPerformingPosts: FC = () => {
  const { topPerformingPosts, commonCharacteristicsTopPosts } = useSelector(
    (state: RootState) => state.auditReportSchema.contentAnalysis
  );

  console.log("topPerformingPosts", topPerformingPosts);

  return (
    <ReportCard title="Client Top Performing Posts" icon={FaChartLine}>
      <div className="space-y-7">
        <h3 className="text-center text-primary text-xl md:text-2xl font-bold mb-4">
          Engagement on Top Performing Posts
        </h3>

        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topPerformingPosts}>
              <XAxis dataKey="postDescription" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Legend
                content={({ payload }) => (
                  <ul className="flex gap-4 text-[12px] pb-3 justify-center align-center">
                    {payload?.map((entry, index) => (
                      <li
                        key={`item-${index}`}
                        className="flex items-center text-text-primary text-base"
                      >
                        <span
                          className="inline-block w-3 h-3 rounded-[3px] mr-2"
                          style={{ backgroundColor: entry.color }}
                        />
                        {entry.value}
                      </li>
                    ))}
                  </ul>
                )}
              />

              <Bar dataKey="likes" fill={COLORS.likes} radius={[4, 4, 0, 0]} />
              <Bar
                dataKey="comments"
                fill={COLORS.comments}
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="shares"
                fill={COLORS.shares}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-primary-light/40 border-l-7 border-primary rounded-lg p-4 space-y-2">
          <h4 className="text-primary text-xl md:text-2xl font-bold mb-4">
            Common Characteristics of Top Performing Posts:
          </h4>
          <ul className="space-y-1 list-none text-text-primary text-lg">
            {commonCharacteristicsTopPosts?.map((c, i) => (
              <li key={i} className="flex items-center gap-3 ">
                <FaStar className="text-primary inline-block" /> {c}
              </li>
            ))}
          </ul>
        </div>

        <PostCards />
      </div>
    </ReportCard>
  );
};

export default TopPerformingPosts;
