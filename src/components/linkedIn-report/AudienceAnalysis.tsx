import { FC } from "react";
import { FaChartLine, FaStar } from "react-icons/fa";
// import LegendPieChart from "./sub-components/LegendPieChart";
import KeySummary from "./sub-components/KeySummary";
import ReportCard from "./sub-components/ReportCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { pieChartColor, transformDataWithColors } from "@/utils/constants";
import { isEmpty } from "lodash";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const AudienceAnalysis: FC = () => {
  const {
    audienceCompositionByIndustry,
    audienceInsight,
    notableAudienceMembers,
  } = useSelector(
    (state: RootState) => state.auditReportSchema.audienceAnalysis
  );

  const industryData = transformDataWithColors(
    audienceCompositionByIndustry,
    pieChartColor
  );

  return (
    <ReportCard title="Audience Analysis" icon={FaChartLine}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          {!isEmpty(notableAudienceMembers) && (
            <>
              <h3 className="text-primary text-xl md:text-2xl font-bold pb-6 text-center">
                Notable Audience Members
              </h3>
              <ul className="text-lg text-text-primary space-y-2">
                {notableAudienceMembers?.map((person, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <p className="">
                      <FaStar className="text-primary mr-2 mb-1 inline-block " />
                      <span className="font-semibold">{person?.name}:</span>{" "}
                      {person?.description}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}
          <div className="pt-12">
            {!isEmpty(audienceInsight) && (
              <KeySummary title="Key Insight:" description={audienceInsight} />
            )}
          </div>
        </div>
        {!isEmpty(industryData) && (
          // <LegendPieChart
          //   title="Top Engagers by Industry"
          //   data={industryData}
          //   subTitle="Audience Composition by Industry (%)"
          // />

          <div className="text-center">
            <h3 className="text-primary text-xl md:text-2xl font-bold mb-4">
              Top Engagers by Industry
            </h3>

            <div className="w-full h-64">
              <p className="text-xs">Audience Composition by Industry (%)</p>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={industryData}
                    dataKey="value"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={1}
                    stroke="none"
                    label={({ value }) => `${value.toFixed(2)}%`}
                  >
                    {industryData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color || "#ff5733"}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-base text-text-primary mt-4">
              {industryData.map((item) => (
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
        )}
      </div>
    </ReportCard>
  );
};

export default AudienceAnalysis;
