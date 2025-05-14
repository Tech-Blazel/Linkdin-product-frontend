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
    <div className="bg-[#e9f1fb] p-6 rounded-xl">
      <h3 className="text-[#0C4B89] font-semibold mb-4">
        Optimal Posting Times (Engagement Multiplier)
      </h3>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
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
              tick={{ fontSize: 14, fill: "#0C4B89", fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
              width={90}
            />
            <Bar
              dataKey="engagement_multiplier"
              radius={[8, 8, 8, 8]}
              barSize={35}
            >
              {optimalPostingTData?.map((_: any, i: any) => (
                <Cell key={`cell-${i}`} fill="url(#blueGradient)" />
              ))}
              <LabelList
                dataKey="engagement_multiplier"
                position="right"
                formatter={(v: number) => `${(v / 10).toFixed(2)}x`}
                style={{
                  fill: "#0C4B89",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              />
            </Bar>

            <defs>
              <linearGradient id="blueGradient" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#0C4B89" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
