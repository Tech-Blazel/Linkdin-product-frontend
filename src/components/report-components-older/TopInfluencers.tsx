import { FaRegStar } from "react-icons/fa";
import logoImage from "@/assets/images/logo-main.svg";

const TopInfluencers = () => {
  const insights = [
    "63.6% visual content average",
    "2.8 days between posts",
    "Tuesday 2–4pm optimal posting window",
    "2.4x engagement for personal story + data",
    "1.9x engagement for contrarian",
  ];

  return (
    <div className="flex flex-col justify-between items-start p-10 bg-white relative overflow-hidden rounded-lg shadow w-[100%] mt-10">
      <img
        src={logoImage}
        alt="logo"
        className="absolute hidden md:block -left-40 top-4 w-[300px] md:w-[450px] h-[95%] opacity-10 z-1"
      />

      <div className="inline-flex items-center gap-2 bg-primary-light text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
        <span className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center text-xs font-bold">
          2
        </span>
        Relevant Influencers
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4">
        Top Industry Influencers
      </h2>

      <p className="text-gray-700 mb-4 max-w-4xl">
        We've identified five key influencers whose content strategies align
        with your strengths and goals. These influencers demonstrate exceptional
        engagement metrics and content approaches that could enhance your
        LinkedIn presence.
      </p>
      <p className="text-gray-700 mb-6 max-w-4xl">
        These influencers demonstrate that authentic, value-driven content
        consistently outperforms purely promotional material. Their success
        comes from balancing professional expertise with personal
        connection—precisely the approach you're already taking with your
        content.
      </p>

      <h3 className="text-lg font-semibold mb-4">
        Key Influencer Insights for Your Strategy
      </h3>
      <div className="flex flex-wrap gap-3">
        {insights.map((text, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-4 py-2 border border-primary rounded-full text-sm text-primary bg-primary-light"
          >
            <FaRegStar className="text-primary text-xs font-bold" />
            <span className="font-medium">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopInfluencers;
