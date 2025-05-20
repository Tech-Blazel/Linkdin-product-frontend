import { FC, ReactNode } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

type PieData = {
  name: string;
  value: number;
  color?: string;
};

interface LegendPieChartProps {
  title: string;
  subTitle?: string;
  data: PieData[] | Record<string, any>[];
  description?: ReactNode;
  innerRadius?: number;
}

const LegendPieChart: FC<LegendPieChartProps> = ({
  title,
  subTitle,
  data,
  description,
  innerRadius,
}) => {
  const CustomLabelLine = (props: any) => {
    const { points, stroke } = props;

    if (props.payload.value <= 0) return <></>;

    return (
      <path
        d={`M${points[0].x},${points[0].y}L${points[1].x},${points[1].y}`}
        stroke={stroke}
        fill="none"
      />
    );
  };

  return (
    <div className="text-center">
      <h3 className="text-primary text-xl md:text-2xl font-bold mb-4">
        {title}
      </h3>

      {description && (
        <p className="text-sm text-text-primary mb-4 text-start">
          {description}
        </p>
      )}

      <div className="w-full h-64">
        {subTitle && <p className="text-xs">{subTitle}</p>}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={innerRadius || 40}
              outerRadius={80}
              paddingAngle={1}
              stroke="none"
              // label={({ value }) => `${value}%`}
              label={({ value }) => (value > 0 ? `${value}%` : "")}
              labelLine={CustomLabelLine}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color || "#ff5733"} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-base text-text-primary mt-4">
        {data.map((item) => (
          <span key={item.name} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-[3px]"
              style={{ backgroundColor: item.color }}
            ></span>
            {item.name} ({item.value}%)
          </span>
        ))}
      </div>
    </div>
  );
};

export default LegendPieChart;
