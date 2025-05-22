import { FC } from "react";
import ReportCard from "./sub-components/ReportCard";
import { FaChartLine } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import postOne from "@/assets/images/Caelan-post-1.png";
import postTwo from "@/assets/images/Caelan-post-2.png";
import Caelan from "@/assets/images/Caelan.png";

const CaelanSamplePosts: FC = () => {
  return (
    <ReportCard title="Sample Posts for Caelan Urquhart" icon={FaChartLine}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <div className="border rounded-xl shadow-sm p-4 text-sm space-y-2">
            <div className="flex gap-3">
              <img
                src={Caelan}
                alt="Caelan"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="w-full">
                <div className="flex wrap items-center justify-between">
                  <p className="font-semibold text-gray-800">
                    Caelan Urquhart
                    {/* <span className="text-xs text-gray-400">• 2nd</span> */}
                  </p>
                  <div className="text-sm text-linkedIn-primary flex items-center gap-1 cursor-pointer">
                    {" "}
                    <IoMdAdd className="inline-block" /> Follow
                    <HiDotsHorizontal className="inline-block text-gray-800 ml-3" />
                  </div>
                </div>
                <p className="text-xs text-gray-500 line-clamp-1 p-[3px]">
                  Co-founder | Scaling data & CI pipelines @ Pipekit
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
                  Hey friends — quick note on something we’ve been cleaning up
                  internally.
                </p>

                <p>
                  We looked back at some of our “optimizations” across the
                  pipeline. Turns out, a bunch of them weren’t actually making
                  things faster — just quieter.
                </p>

                <p>Stuff like:</p>
                <p>– batch processing that smoothed over slow I/O</p>
                <p>– layered caching on top of old decisions</p>
                <p>
                  – precomputes that felt smart, but weren’t traceable anymore
                </p>

                <p>
                  Everything looked fast on the surface. But the stack was doing
                  a lot behind the scenes just to stay balanced.
                </p>

                <p>
                  We’ve been pulling those layers back. Not to make things
                  slower — but to make performance visible again.
                </p>

                <p>
                  The systems are simpler now. And when something breaks, we can
                  see why — immediately.
                </p>

                <p>
                  Lesson: If your infra feels “fast but fragile,” there’s
                  probably hidden latency somewhere doing more harm than help.
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
              className="w-full h-full border rounded-xl shadow-sm max-h-[500px] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mt-6">
        <div className="space-y-4">
          <div className="border rounded-xl shadow-sm p-4 text-sm space-y-2">
            <div className="flex gap-3">
              <img
                src={Caelan}
                alt="Caelan"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="w-full">
                <div className="flex wrap items-center justify-between">
                  <p className="font-semibold text-gray-800">Caelan Urquhart</p>
                  <div className="text-sm text-linkedIn-primary flex items-center gap-1 cursor-pointer">
                    {" "}
                    <IoMdAdd className="inline-block" /> Follow
                    <HiDotsHorizontal className="inline-block text-gray-800 ml-3" />
                  </div>
                </div>
                <p className="text-xs text-gray-500 line-clamp-1 p-[3px]">
                  Co-founder | Scaling data & CI pipelines @ Pipekit
                </p>
                <div className="text-xs mt-1 font-semibold text-linkedIn-primary">
                  Visit my website
                </div>
              </div>
            </div>

            <div className="text-gray-800 space-y-2 text-sm pt-2">
              <>
                <p>
                  I've been seeing something show up again and again in infra
                  conversations lately.
                </p>

                <p>Everything works at 1x load. That’s the trap.</p>

                <p>
                  At low traffic, most systems look solid. Dashboards stay
                  green. Alerts are quiet. Failovers technically exist. It all
                  feels stable — until it’s not.
                </p>

                <p>3x load is where the truth shows up.</p>

                <p>That’s when you start noticing:</p>
                <p>– retries quietly masking slow I/O</p>
                <p>– shared infra creating bottlenecks you didn’t plan for</p>
                <p>– queue depth assumptions breaking under pressure</p>
                <p>
                  – failover logic that works… until someone actually needs it
                </p>

                <p>
                  For example: A queue looked healthy in staging, but in prod, a
                  spike exposed a processing delay that had been building for
                  days. Not a new bug — just something that never mattered at
                  low volume.
                </p>

                <p>
                  If tests only reflect ideal conditions, they aren’t telling
                  you how things behave when they’re stressed.
                </p>

                <p>Resilience isn’t built at 1x. It’s revealed at 3x.</p>
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
              className="w-full h-full border rounded-xl shadow-sm max-h-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </ReportCard>
  );
};

export default CaelanSamplePosts;
