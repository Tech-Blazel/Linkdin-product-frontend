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
                  Google launched Multi-Cluster Orchestra (MCO) at KubeCon EU.
                </p>

                <p>
                  If you're managing workloads across clusters, this deserves a
                  look.
                </p>

                <p>
                  We’ve built enough Argo-based multi-cluster setups to know
                  where things break.
                </p>

                <p>
                  Policy sync gets messy.
                  <br />
                  Failovers are fragile.
                  <br />
                  GPU allocation is inefficient and expensive.
                </p>

                <p>
                  MCO claims to solve these.
                  <br />
                  And this time, it’s not just a new layer; it’s tightly
                  integrated with Argo CD.
                </p>

                <p>
                  You get dynamic scheduling.
                  <br />
                  Cross-cluster rollovers.
                  <br />
                  Central guardrails.
                  <br />
                  Without gluing together five different tools.
                </p>

                <p>
                  What stood out the most?
                  <br />
                  The FinOps angle.
                </p>

                <p>
                  This isn’t just infra cleanup.
                  <br />
                  They’re aiming for actual cost visibility, especially on
                  GPU-heavy pipelines.
                </p>

                <p>
                  Still early.
                  <br />
                  But it feels like they’re building something people can
                  actually run in production, not just another concept demo.
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
                  Been trying out a few AI things in our CI/CD setup. Nothing
                  fancy. Mostly trying to cut down time spent chasing dumb
                  security stuff.
                </p>

                <p>
                  We’ve got it checking commits for anything weird, catching
                  minor misconfigs, and helping flag things before they hit
                  staging. Not perfect, but it’s already saved us a few
                  late-night fixes.
                </p>

                <p>
                  Also tried plugging AI into code review. Results are mixed.
                  Sometimes helpful. Sometimes nothing much. But it’s faster
                  than waiting for someone to review that one service no one
                  wants to touch.
                </p>

                <p>
                  Most useful so far: real-time alerts during deploys + some
                  automated SAST/DAST stuff. Still figuring out how much of it
                  we can trust vs just reviewing manually anyway.
                </p>

                <p>
                  If anyone’s using AI in their pipeline (for actual security,
                  not LLM codegen), would be good to know what’s actually
                  working for you.
                </p>

                <p>Not looking for tools, just what’s been useful.</p>
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

export default CaelanSamplePosts;
