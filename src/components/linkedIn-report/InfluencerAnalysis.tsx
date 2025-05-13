import { FC } from "react";
import { FaChartLine } from "react-icons/fa";
import LegendPieChart from "./sub-components/LegendPieChart";
import { FaRegCommentDots } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";
import { MdOutlineCelebration } from "react-icons/md";
import { TbBulb } from "react-icons/tb";
import { PiHandHeartBold } from "react-icons/pi";
import { FaEarthAsia } from "react-icons/fa6";
import { BsEmojiLaughing } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { convertObjectToArrayOfObjectsData } from "@/utils/constants";
import { IoMdAdd } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import kayBertin from "@/assets/image.png";

const reactions = [
  {
    icon: <BiLike />,
    alt: "Like",
    bg: "bg-[#0073b1]",
  },
  {
    icon: <MdOutlineCelebration />,
    alt: "Celebrate",
    bg: "bg-[#6dae4f]",
  },
  {
    icon: <BsEmojiLaughing />,
    alt: "Funny",
    bg: "bg-[#45BFD3]",
  },
  {
    icon: <TbBulb />,
    alt: "Insightful",
    bg: "bg-[#f4c95d]",
  },
  {
    icon: <PiHandHeartBold />,
    alt: "Support",
    bg: "bg-[#BBADD1]",
  },
];

const InfluencerAnalysis: FC<{ influencer: any; index: number }> = ({
  index,
  influencer,
}) => {
  const { detailedInfluencerAnalysis } = useSelector(
    (state: RootState) => state.auditReportSchema.topIndustryInfluencersAnalysis
  );

  const { contentStrategy, post, profile } = detailedInfluencerAnalysis[index];

  const { name, title, followersCount, descriptionFocus } = influencer;

  const contentStrategyData = convertObjectToArrayOfObjectsData(
    contentStrategy,
    {
      nameKey: "name",
      valueKey: "value",
      colors: ["#f4a69f", "#fcd88d", "#8de49d", "#c7b3f8"],
    }
  );

  return (
    <section className="space-y-6 gap-10 p-10 bg-white relative overflow-hidden rounded-lg shadow w-[100%] mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div>
          <div className="flex items-center gap-2 text-3xl md:text-2xl font-semibold border-b border-primary/20 pb-3">
            <FaChartLine className="text-primary" />
            <h2 className="text-text-primary">{name} Analysis</h2>
          </div>

          <p className="text-base text-text-primary my-4">
            {/* We've identified five key influencers whose content strategies align
            with your strengths and goals. These influencers demonstrate
            exceptional engagement metrics and content approaches that could
            enhance your LinkedIn presence. */}
            {descriptionFocus}
          </p>

          <LegendPieChart
            title="Influencer's Content Strategy"
            data={contentStrategyData}
          />
        </div>
        <div>
          <div className="space-y-4">
            <div className="p-4 border rounded-xl shadow-sm flex gap-4 items-start">
              <img
                src={
                  profile?.name === "Kyle Bertin"
                    ? kayBertin
                    : profile?.pictureUrl || ""
                }
                alt={profile?.name || ""}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-sm text-gray-800">
                <p className="font-semibold">
                  {name || ""}{" "}
                  {/* <span className="text-gray-400 text-xs">• 2nd</span> */}
                </p>
                <p className="text-gray-600 text-xs line-clamp-1 p-[3px]">
                  {descriptionFocus || ""}
                </p>
                <p className="text-xs text-gray-500 mt-1">{title || ""}</p>
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-3">
                  <IoPeople />{" "}
                  <span className="font-bold">{followersCount || ""}</span>{" "}
                  followers
                </p>
              </div>
            </div>

            <a
              href={post?.postURL}
              target="_blank"
              className="text-linkedIn-primary"
            >
              <div className="border rounded-xl shadow-sm p-4 text-sm space-y-2">
                <div className="flex gap-3">
                  <img
                    src={
                      profile?.name === "Kyle Bertin"
                        ? kayBertin
                        : profile?.pictureUrl || ""
                    }
                    alt={profile?.name || ""}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="w-full">
                    <div className="flex wrap items-center justify-between">
                      <p className="font-semibold text-gray-800">
                        {profile?.name || ""}{" "}
                        {/* <span className="text-xs text-gray-400">• 2nd</span> */}
                      </p>
                      <div className="text-sm text-linkedIn-primary flex items-center gap-1 cursor-pointer">
                        {" "}
                        <IoMdAdd className="inline-block" /> Follow
                        <HiDotsHorizontal className="inline-block text-gray-800 ml-3" />
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 line-clamp-1 p-[3px]">
                      {profile?.title || ""}
                    </p>
                    <div className="text-xs mt-1 font-semibold text-linkedIn-primary">
                      Visit my website
                    </div>
                    {/* <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    4d • <FaEarthAsia />
                  </p> */}
                  </div>
                </div>

                <div className="text-gray-800 space-y-2 text-sm pt-2">
                  {/* <p>Emotions are essential to good decision-making.</p>
                <p>Logic alone can lead you straight into bad choices.</p>
                <p>
                  My worst strategic mistakes came from ignoring my gut and
                  trusting only spreadsheets. (Or even worse, other people’s
                  opinions).
                </p>
                <p>Emotions aren’t the enemy of judgment…</p>
                <p>They’re the missing piece your MBA left out.</p> */}
                  <p className="line-clamp-10 pb-2">{post?.text}</p>
                </div>

                <div className="text-xs text-gray-500 flex justify-between pt-1 mt-2">
                  <div className="flex items-center space-x-1">
                    <div className="flex -space-x-2">
                      {reactions.slice(0, 5).map((reaction, index) => (
                        <div
                          key={index}
                          className={`w-5 h-5 rounded-full text-gray-600 border-2 border-white flex items-center justify-center ${reaction.bg}`}
                        >
                          {reaction.icon}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-text-primary">
                      {post?.likes || ""}
                    </span>
                  </div>
                  <span>
                    {post?.comments > 0 && `${post?.comments} comments`}
                    {post?.reposts > 0 && `• ${post?.reposts} reposts`}
                  </span>
                </div>

                <div className="border-t pt-2 flex justify-between text-xs font-bold text-gray-500">
                  <span className="flex flex-col md:flex-row gap-1 justify-center items-center">
                    <BiLike className="text-sm rotate-y-180" /> Like
                  </span>
                  <span className="flex flex-col md:flex-row gap-1 justify-center items-center">
                    <FaRegCommentDots className="text-lg" /> Comment
                  </span>
                  <span className="flex flex-col md:flex-row gap-1 justify-center items-center">
                    <BiRepost className="text-lg" /> Repost
                  </span>
                  <span className="flex flex-col md:flex-row gap-1 justify-center items-center">
                    <IoIosSend className="text-lg" /> Send
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluencerAnalysis;
