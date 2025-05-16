import { FC } from "react";
import ReportCard from "./sub-components/ReportCard";
import { FaChartLine } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import postOne from "@/assets/images/Dean-post-1.png";
import postTwo from "@/assets/images/Dean-post-2.png";
import Dean from "@/assets/images/Dean.png";

const DeanSamplePosts: FC = () => {
  return (
    <ReportCard title="Sample Posts" icon={FaChartLine}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <div className="border rounded-xl shadow-sm p-4 text-sm space-y-2">
            <div className="flex gap-3">
              <img
                src={Dean}
                alt="Dean"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="w-full">
                <div className="flex wrap items-center justify-between">
                  <p className="font-semibold text-gray-800">
                    Dean Pleban
                    {/* <span className="text-xs text-gray-400">• 2nd</span> */}
                  </p>
                  <div className="text-sm text-linkedIn-primary flex items-center gap-1 cursor-pointer">
                    {" "}
                    <IoMdAdd className="inline-block" /> Follow
                    <HiDotsHorizontal className="inline-block text-gray-800 ml-3" />
                  </div>
                </div>
                <p className="text-xs text-gray-500 line-clamp-1 p-[3px]">
                  Co-Founder & CEO at DagsHub | AI Data Development Platform
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
              <>
                <p>
                  I’ve seen too many ML teams grind away at model tweaks, only
                  to hit a wall. The real fix? Focus on your data. That’s why
                  I’m all-in on data-centric AI.
                </p>

                <p>
                  As a founder, I believe the future of AI lies in getting data
                  right, not just building bigger models. Picture a team
                  training a fraud detection model: messy, inconsistent data
                  sinks their accuracy, but a clean, well-tracked dataset makes
                  it soar.
                </p>

                <p>
                  Tools like dataset versioning act like a blueprint, showing
                  every change to keep things solid. Annotation pipelines let
                  teams polish data together, catching errors like mislabeled
                  transactions. And analytics dashboards flag gaps before they
                  derail your model.
                </p>

                <p>
                  This isn’t just a trend—it’s how we’ll build reliable AI in
                  2025. At DAGsHub, we’re obsessed with making this practical
                  for every team. What’s one data headache you’ve faced in your
                  ML projects? Let’s swap stories in the comments—I’m curious!
                </p>

                <p>
                  To our community: you’re pushing AI forward, and I’m proud to
                  be in this with you. Let’s make data the heart of every model!
                </p>
              </>
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
        </div>
        <div>
          <div className="space-y-4">
            <img
              src={postOne}
              alt="post"
              className="w-full h-full rounded-xl shadow-sm max-h-[500px] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mt-6">
        <div className="space-y-4">
          <div className="border rounded-xl shadow-sm p-4 text-sm space-y-2">
            <div className="flex gap-3">
              <img
                src={Dean}
                alt="Dean"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="w-full">
                <div className="flex wrap items-center justify-between">
                  <p className="font-semibold text-gray-800">Dean Pleban</p>
                  <div className="text-sm text-linkedIn-primary flex items-center gap-1 cursor-pointer">
                    {" "}
                    <IoMdAdd className="inline-block" /> Follow
                    <HiDotsHorizontal className="inline-block text-gray-800 ml-3" />
                  </div>
                </div>
                <p className="text-xs text-gray-500 line-clamp-1 p-[3px]">
                  Co-Founder & CEO at DagsHub | AI Data Development Platform
                </p>
                <div className="text-xs mt-1 font-semibold text-linkedIn-primary">
                  Visit my website
                </div>
              </div>
            </div>

            <div className="text-gray-800 space-y-2 text-sm pt-2">
              <>
                <p>
                  When I started DAGsHub, I dreamed of a world where ML teams
                  don’t reinvent the wheel—they build on each other’s work.
                  That’s why I’m fired up about open-source MLOps.
                </p>

                <p>
                  Imagine a community where we share datasets, like medical
                  imaging sets, with every version tracked so you know what’s
                  good. Or pipelines laid out clear as day, showing how someone
                  nailed a speech recognition model.
                </p>

                <p>
                  Discussions where we riff on ideas, like tweaking a model for
                  self-driving cars. This isn’t just cool—it’s how we’ll solve
                  AI’s toughest problems together.
                </p>

                <p>
                  As a founder, I see this as our shot to make MLOps a team
                  effort.
                </p>

                <p>
                  To our crew: you’re the spark behind this. Let’s make AI
                  bigger than any one of us!
                </p>
              </>
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
        </div>
        <div>
          <div className="space-y-4">
            <img
              src={postTwo}
              alt="post"
              className="w-full h-full rounded-xl shadow-sm max-h-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </ReportCard>
  );
};

export default DeanSamplePosts;
