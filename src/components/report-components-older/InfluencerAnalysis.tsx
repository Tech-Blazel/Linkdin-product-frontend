import { FC } from "react";
import { FaChartLine } from "react-icons/fa";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Chart data
const pieData = [
  { name: "Text", value: 32, color: "#f4a69f" },
  { name: "Images", value: 18, color: "#fcd88d" },
  { name: "Videos", value: 23, color: "#8de49d" },
  { name: "Articles", value: 27, color: "#c7b3f8" },
];

const InfluencerAnalysis: FC = () => {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2 text-xl font-semibold text-[#ff5733] border-b border-[#ff5733] pb-1">
        <FaChartLine className="text-[#ff5733]" />
        <h2 className="text-gray-800">Influencer 1 – Analysis</h2>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 max-w-3xl">
        We've identified five key influencers whose content strategies align
        with your strengths and goals. These influencers demonstrate exceptional
        engagement metrics and content approaches that could enhance your
        LinkedIn presence.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Donut Chart */}
        <div className="text-center">
          <h3 className="text-[#ff5733] font-semibold mb-4">
            Influencer's Content Strategy
          </h3>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
            {pieData.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="text-gray-700 font-medium">
                  {item.name} ({item.value}%)
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="space-y-4">
          {/* Profile Card */}
          <div className="p-4 border rounded-xl shadow flex items-start gap-4 bg-white">
            <img
              src="/influencers/ryan.jpg"
              alt="Ryan"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-sm text-gray-800">
                Ryan H. Vaughn{" "}
                <span className="text-xs text-gray-400 font-normal">• 2nd</span>
              </p>
              <p className="text-xs text-gray-600">
                Exited founder turned CEO-coach | Helping early/mid-stage
                startups
              </p>
              <p className="text-xs text-gray-400 mt-1">Grand Rapids, MI</p>
              <p className="text-xs text-gray-600 font-medium">
                👥 7K followers
              </p>
            </div>
          </div>

          {/* LinkedIn Post */}
          <div className="rounded-xl border shadow-sm p-4 bg-white space-y-3 text-sm">
            {/* Header */}
            <div className="flex gap-3">
              <img
                src="/influencers/ryan.jpg"
                alt="Ryan"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">
                  Ryan H. Vaughn{" "}
                  <span className="text-xs text-gray-400 font-normal">
                    • 2nd
                  </span>
                </p>
                <p className="text-xs text-gray-500">
                  Exited founder turned CEO-coach | Helping early/mid-stage
                  startups
                </p>
                <a href="#" className="text-xs text-blue-600">
                  Visit my website
                </a>
                <p className="text-xs text-gray-400 mt-1">4d • 🌐</p>
              </div>
            </div>

            {/* Content */}
            <div className="text-gray-800 space-y-2 pt-2 text-sm">
              <p>Emotions are essential to good decision-making.</p>
              <p>Logic alone can lead you straight into bad choices.</p>
              <p>
                My worst strategic mistakes came from ignoring my gut and
                trusting only spreadsheets. (Or even worse, other people’s
                opinions).
              </p>
              <p>Emotions aren’t the enemy of judgment…</p>
              <p className="font-medium">
                They’re the missing piece your MBA left out.
              </p>
            </div>

            {/* Reactions & Meta */}
            <div className="text-xs text-gray-500 border-t pt-2 flex justify-between">
              <span>👍 ❤️ 👏 90</span>
              <span>18 comments • 3 reposts</span>
            </div>

            {/* Actions */}
            <div className="pt-2 flex justify-between text-xs text-gray-500 border-t">
              <button className="hover:underline">👍 Like</button>
              <button className="hover:underline">💬 Comment</button>
              <button className="hover:underline">🔁 Repost</button>
              <button className="hover:underline">✉️ Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluencerAnalysis;
