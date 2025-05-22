import { FC } from "react";
import ReportCard from "./sub-components/ReportCard";
import { FaChartLine } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import postOne from "@/assets/images/post-1.png";
import postTwo from "@/assets/images/post-2.png";

const SamplePosts: FC = () => {
  return (
    <ReportCard title="Sample Posts" icon={FaChartLine}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <div className="border rounded-xl shadow-sm p-4 text-sm space-y-2">
            <div className="flex gap-3">
              <img
                src="https://media.licdn.com/dms/image/v2/C5603AQHWoEdJf5MYHQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1625768207775?e=1752710400&v=beta&t=_pNuVfaQmoV4RpfsfQthOIVFBh8OfeU24V21Rjd36OU"
                alt="Ryan"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="w-full">
                <div className="flex wrap items-center justify-between">
                  <p className="font-semibold text-gray-800">
                    Ryan H. Vaughn
                    {/* <span className="text-xs text-gray-400">• 2nd</span> */}
                  </p>
                  <div className="text-sm text-linkedIn-primary flex items-center gap-1 cursor-pointer">
                    {" "}
                    <IoMdAdd className="inline-block" /> Follow
                    <HiDotsHorizontal className="inline-block text-gray-800 ml-3" />
                  </div>
                </div>
                <p className="text-xs text-gray-500 line-clamp-1 p-[3px]">
                  Exited founder turned CEO-coach
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
              <p>The further I go in this work, the more convinced I become:</p>

              <p>
                The psychology of the leader is the psychology of the
                organization.
              </p>

              <p>
                I’ve coached founders who made hard calls rooted in
                fear—sometimes subtly, sometimes not. That fear ripples out. It
                shows up in company politics. In second-guessing. In an unspoken
                tension you can’t name, but you can definitely feel.
              </p>

              <p>
                I’ve also watched what happens when a founder does the inner
                work and leads from clarity, presence, and purpose.
              </p>

              <p>Everything changes.</p>
              <p>The team aligns.</p>
              <p>Decision-making sharpens.</p>
              <p>The culture breathes easier.</p>

              <p>Your company is a mirror of your internal state.</p>

              <p>
                So if you’re scaling a business, take inventory of what you’re
                carrying. The pressure. The imposter syndrome. The avoidance.
                The need to prove.
              </p>

              <p>None of that disappears by raising another round.</p>
              <p>
                It disappears by going inward, getting honest, and learning to
                lead yourself.
              </p>

              <p>Because your business can’t go deeper than you’ve gone.</p>
              <p>And it won’t grow further than your capacity allows.</p>

              <p>
                Do the inner work—not just for you, but for everyone who’s
                counting on you.
              </p>
              <p>Real leadership is an inside job.</p>
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
              className="w-full h-full rounded-xl shadow-sm max-h-[600px] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mt-6">
        <div className="space-y-4">
          <div className="border rounded-xl shadow-sm p-4 text-sm space-y-2">
            <div className="flex gap-3">
              <img
                src="https://media.licdn.com/dms/image/v2/C5603AQHWoEdJf5MYHQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1625768207775?e=1752710400&v=beta&t=_pNuVfaQmoV4RpfsfQthOIVFBh8OfeU24V21Rjd36OU"
                alt="Ryan"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="w-full">
                <div className="flex wrap items-center justify-between">
                  <p className="font-semibold text-gray-800">Ryan H. Vaughn</p>
                  <div className="text-sm text-linkedIn-primary flex items-center gap-1 cursor-pointer">
                    {" "}
                    <IoMdAdd className="inline-block" /> Follow
                    <HiDotsHorizontal className="inline-block text-gray-800 ml-3" />
                  </div>
                </div>
                <p className="text-xs text-gray-500 line-clamp-1 p-[3px]">
                  Exited founder turned CEO-coach
                </p>
                <div className="text-xs mt-1 font-semibold text-linkedIn-primary">
                  Visit my website
                </div>
              </div>
            </div>

            <div className="text-gray-800 space-y-2 text-sm pt-2">
              <>
                <p>
                  I used to think that building something great meant giving up
                  everything else.
                </p>

                <p>Sleep. Health. Relationships. Peace.</p>

                <p>
                  I believed that if I wasn’t sacrificing, I wasn’t doing it
                  right. And for a long time, that belief worked—until it
                  didn’t.
                </p>

                <p>
                  Because the truth is, when you spend years ignoring your inner
                  life, the cost isn’t just burnout. It’s subtle. It’s
                  corrosive. You lose your sense of self.
                </p>

                <p>
                  I’ve worked with founders who hit every external metric of
                  success and still felt like they were failing. Not because the
                  success wasn’t real—but because they were so disconnected from
                  themselves, they couldn’t feel it.
                </p>

                <p>
                  Scaling a company should not require abandoning your life.
                </p>

                <p>
                  In fact, the more aligned you are internally, the more
                  sustainable your business becomes.
                </p>

                <p>
                  Today, I coach founders to scale with both ambition and
                  integrity. To build not just big companies, but meaningful
                  ones. And to do it in a way that doesn’t leave themselves—or
                  the people they love—behind.
                </p>

                <p>Because real success isn’t just about what you build.</p>
                <p>It’s about who you become along the way.</p>
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
              className="w-full h-full rounded-xl shadow-sm max-h-[600px] object-contain"
            />
          </div>
        </div>
      </div>
    </ReportCard>
  );
};

export default SamplePosts;
