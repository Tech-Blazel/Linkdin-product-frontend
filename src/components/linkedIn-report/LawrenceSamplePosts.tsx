import { FC } from "react";
import ReportCard from "./sub-components/ReportCard";
import { FaChartLine } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import LawrenceOne from "@/assets/images/Lawrence-post-1.png";
import LawrenceTwo from "@/assets/images/Lawrence-post-2.png";

const LawrenceSamplePosts: FC = () => {
  return (
    <ReportCard title="Sample Posts for Lawrence Coburn" icon={FaChartLine}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <div className="border rounded-xl shadow-sm p-4 text-sm space-y-2">
            <div className="flex gap-3">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQH7FERo4vXiww/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1696271215080?e=1753315200&v=beta&t=3ONvfiXAw3Twi1wA9nNmBe6XIa_g1jTDEkZ_LnQSYoI"
                alt="Lawrence Coburn"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="w-full">
                <div className="flex wrap items-center justify-between">
                  <p className="font-semibold text-gray-800">
                    Lawrence Coburn
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
                  AI won’t save you if you can’t remember what you promised
                  yesterday.
                </p>

                <p>
                  One of the biggest misconceptions I see is the idea that
                  recording the meeting is enough.
                </p>

                <p>It’s not.</p>

                <p>
                  Recording gives you recall. But most teams don’t have a recall
                  problem. They have a capture and follow-through problem.
                </p>

                <p>
                  The decision was made. But no one pulled it out. No one logged
                  who owned what. No one set the due date. So it disappeared.
                </p>

                <p>
                  Now multiply that across every recurring staff meeting, every
                  functional sync, every “quick call” with 5 action items baked
                  in.
                </p>

                <p>
                  This is where execution breaks — not because the call didn’t
                  go well, but because the call didn’t turn into anything
                  concrete.
                </p>

                <p>
                  I don’t think most teams need better AI summaries. I think
                  they need better memory infrastructure. Something that holds
                  the thread after the call ends.
                </p>

                <p>
                  Without it, meetings become performance. Everyone nods,
                  agrees, moves on — and two weeks later someone says, “didn’t
                  we decide to do that?”
                </p>

                <p>
                  We built Ambient for this exact use case. Not for meeting
                  recaps. For memory.
                </p>

                <p>
                  Because context loss doesn’t feel like failure. It just feels
                  like nothing moving.
                </p>

                <p>And you can’t fix that with a smarter transcript.</p>
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
              src={LawrenceOne}
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
                src="https://media.licdn.com/dms/image/v2/D5603AQH7FERo4vXiww/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1696271215080?e=1753315200&v=beta&t=3ONvfiXAw3Twi1wA9nNmBe6XIa_g1jTDEkZ_LnQSYoI"
                alt="Lawrence Coburn"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="w-full">
                <div className="flex wrap items-center justify-between">
                  <p className="font-semibold text-gray-800">Lawrence Coburn</p>
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
                  Every founder I know has ten tools for insight. Heatmaps,
                  dashboards, OKRs, weekly updates. Everyone knows what’s
                  happening.
                </p>

                <p>
                  But the second you ask, “Who’s owning this?” or “What’s the
                  status on that thing from last week?” the answers get fuzzy.
                  Or they don’t come at all.
                </p>

                <p>
                  We’ve overbuilt for visibility and underbuilt for ownership.
                  Everything looks clean on a dashboard, until you start asking
                  real questions about follow-through.
                </p>

                <p>
                  Insight without action is just noise. And most companies are
                  buried in it.
                </p>

                <p>
                  Exec meetings create alignment — temporarily. By Tuesday, most
                  of it’s gone. Slack moves too fast. Docs go stale. Deadlines
                  slip without anyone realizing it. It’s not about intent. It’s
                  about the fact that there’s no system holding the thread.
                </p>

                <p>And that’s where most teams break — quietly.</p>

                <p>
                  You want to move fast? Don’t start by adding AI to your stack.
                  Start by getting clear on what was agreed, who owns it, when
                  it’s due, and what slipped through last week.
                </p>

                <p>
                  That’s the actual operating layer. Everything else is
                  decoration.
                </p>

                <p>Fix the memory layer.</p>
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
              src={LawrenceTwo}
              alt="post"
              className="w-full h-full border rounded-xl shadow-sm max-h-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </ReportCard>
  );
};

export default LawrenceSamplePosts;
