import logoImage from "@/assets/images/logo-main.svg";

const ExecutiveOverview = () => {
  return (
    <div className="flex flex-row justify-between items-start gap-10 p-10 bg-white relative overflow-hidden rounded-lg shadow w-[100%] mt-10">
      <img
        src={logoImage}
        alt="logo"
        className="absolute hidden md:block -left-40 top-4 w-[300px] md:w-[450px] h-[95%] opacity-10 z-1"
      />

      <div className="flex-2 z-10">
        <div className="inline-flex items-center gap-2 bg-primary-light text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
          <span className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center text-xs font-bold">
            1
          </span>
          Overview
        </div>

        <h2 className="text-2xl font-bold mb-4">Executive Overview</h2>

        <p className="text-gray-700 max-w-4xl mb-8">
          This comprehensive analysis of Dave Sifry&rsquo;s LinkedIn engagement
          data reveals clear patterns and actionable strategies to maximize his
          social impact. Based on the analysis of 68 posts spanning from 2016 to
          2025, we&rsquo;ve identified specific content characteristics and
          posting strategies that significantly increase engagement.
        </p>

        <div className="bg-white border rounded-xl shadow p-4 max-w-sm mb-6">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://i.pravatar.cc/80?img=22"
              alt="Dave Sifry"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-800">Dave Sifry</p>
              <p className="text-sm text-gray-500">
                Tech content creator, AI Specialist
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center bg-primary-light border rounded-lg p-4">
            <div>
              <p className="text-sm font-bold text-primary">5.2M+</p>
              <p className="text-sm text-gray-700">Followers</p>
            </div>
            <div>
              <p className="text-sm font-bold text-primary">7.8%</p>
              <p className="text-sm text-gray-700">Engagement Rate</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-primary text-white rounded-xl p-5 shadow">
            <p className="text-3xl font-bold mb-3">68</p>
            <p className="font-medium">Your Posts Analyzed</p>
            <p className="text-sm mt-3">2016 &ndash; 2025</p>
          </div>

          <div className="bg-primary text-white rounded-xl p-5 shadow">
            <p className="text-3xl font-bold mb-3">2,660</p>
            <p className="font-medium">Influencer Posts Analyzed</p>
            <p className="text-sm mt-3">Benchmark Dataset</p>
          </div>

          <div className="bg-primary text-white rounded-xl p-5 shadow">
            <p className="text-3xl font-bold mb-3">4.8%</p>
            <p className="font-medium">Your Average Engagement Rate</p>
            <p className="text-sm mt-3">Industry Avg: 2.1%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveOverview;
