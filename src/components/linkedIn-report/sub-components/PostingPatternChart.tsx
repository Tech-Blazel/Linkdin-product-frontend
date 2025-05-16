import { FC } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  LabelList,
  ResponsiveContainer,
} from "recharts";

export const PostingPatternChart: FC<{
  optimalPostingTData: Record<string, any>[];
}> = ({ optimalPostingTData }) => {
  return (
    <div className="bg-primary-light p-6 rounded-xl">
      <h3 className="text-primary font-semibold mb-4">
        Optimal Posting Times (Engagement Multiplier)
      </h3>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%">
          <BarChart
            data={optimalPostingTData}
            layout="vertical"
            barCategoryGap={16}
            margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
          >
            <XAxis type="number" domain={[0, 1.3]} hide />
            <YAxis
              type="category"
              dataKey="day"
              tick={{ fontSize: 14, fill: "#ff5733", fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
              width={90}
            />
            <Bar
              dataKey="averageEngagementRate"
              radius={[8, 8, 8, 8]}
              barSize={35}
            >
              {optimalPostingTData?.map((_: any, i: any) => (
                <Cell key={`cell-${i}`} fill="url(#blueGradient)" />
              ))}
              <LabelList
                dataKey="averageEngagementRate"
                content={(props: any) => {
                  const { x = 0, y = 0, width = 0, value } = props;

                  const label =
                    typeof value === "number"
                      ? `${(value / 10).toFixed(2)}x`
                      : "";
                  const padding = 8;
                  const textColor = "#ff5733";
                  const fontSize = 14;

                  // Shift label inside if bar is too long
                  const isTooWide = width > 120; // adjust based on chart size
                  const textX = isTooWide
                    ? x + width - padding
                    : x + width + padding;
                  const textAnchor = isTooWide ? "end" : "start";

                  return (
                    <text
                      x={textX}
                      y={y + 23} // Adjust for vertical centering
                      fill={textColor}
                      fontSize={fontSize}
                      fontWeight={600}
                      textAnchor={textAnchor}
                    >
                      {label}
                    </text>
                  );
                }}
              />
            </Bar>

            <defs>
              <linearGradient id="blueGradient" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#ff5733" />
                <stop offset="100%" stopColor="#fa9e8b" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
