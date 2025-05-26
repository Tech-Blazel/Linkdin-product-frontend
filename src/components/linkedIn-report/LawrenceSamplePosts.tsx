import { FC, useState } from "react";
import ReportCard from "./sub-components/ReportCard";
import { FaChartLine } from "react-icons/fa";
import WhyBox from "./sub-components/WhyBox";
import PostNoteBox from "./sub-components/PostNoteBox";
import LinkedInPostCard from "./sub-components/LinkedInPostCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { twMerge } from "tailwind-merge";

const LawrenceSamplePosts: FC = () => {
  const linkedInReport = useSelector(
    (state: RootState) => state.auditReportSchema
  );

  const {
    reportMetadata: { clientInfo },
  } = linkedInReport;

  const [expandedPosts, setExpandedPosts] = useState<Record<string, boolean>>(
    {}
  );

  const toggleExpand = (id: string) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <ReportCard title="Sample Posts for Lawrence" icon={FaChartLine}>
      {/* Technical Posts */}
      <div>
        <PostNoteBox
          categoryText="Technical posts"
          noteText="These posts are created with very little context for now"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <LinkedInPostCard
            name={clientInfo?.name}
            title={clientInfo?.title}
            profileImage={clientInfo?.profilePictureUrl}
            websiteLink="#"
          >
            <div
              className={twMerge(
                "text-gray-800 space-y-2 text-sm pt-2 transition-all duration-300 relative",
                !expandedPosts["technical-post-1"] &&
                  "line-clamp-[8] overflow-hidden"
              )}
            >
              <>
                <p>
                  When we first started building Ambient, I got a lot of
                  questions like:
                </p>

                <p>“Will AI replace the Chief of Staff?”</p>

                <p>My answer is simple: No. It will amplify them.</p>

                <p>
                  In a world of endless meetings, Slack chaos, and fragmented
                  knowledge, a great Chief of Staff is already a force
                  multiplier for the CEO. But imagine giving that CoS:
                </p>

                <p>Instant access to any decision ever made</p>
                <p>A memory of every meeting, summary, and action</p>
                <p>Contextual search across 100+ stakeholders</p>
                <p>Nudges before key decisions fall through the cracks</p>

                <p>
                  That’s not replacing the CoS. That’s weaponizing their
                  leverage.
                </p>

                <p>
                  The best executives today are not asking:
                  <br />
                  “What can AI do for me?”
                </p>

                <p>
                  They’re asking:
                  <br />
                  “How do I scale my most strategic people using AI?”
                </p>

                <p>
                  We built Ambient for exactly that. Not to replace.
                  <br />
                  To multiply.
                </p>

                <p>
                  And based on the early enterprise results, that bet is paying
                  off.
                </p>

                <p>
                  If you're a Chief of Staff—or manage one—I'd love to hear how
                  you're thinking about AI in your workflow.
                </p>
              </>
              <button
                onClick={() => toggleExpand("technical-post-1")}
                className="absolute bottom-[2px] right-0 bg-white text-xs font-semibold text-linkedIn-primary pl-2 pr-1 cursor-pointer"
              >
                {expandedPosts["technical-post-1"]
                  ? "Show less"
                  : "... Show more"}
              </button>
            </div>
          </LinkedInPostCard>
          <LinkedInPostCard
            name={clientInfo?.name}
            title={clientInfo?.title}
            profileImage={clientInfo?.profilePictureUrl}
            websiteLink="#"
          >
            <div
              className={twMerge(
                "text-gray-800 space-y-2 text-sm pt-2 transition-all duration-300 relative",
                !expandedPosts["technical-post-2"] &&
                  "line-clamp-[8] overflow-hidden"
              )}
            >
              <>
                <p>
                  Recent IDC research reveals a striking disparity in enterprise
                  AI adoption: while 89% of organizations have revamped their
                  data strategies to embrace Generative AI, only 26% have
                  successfully deployed these solutions at scale.
                </p>

                <p>
                  This gap underscores a critical challenge: the transition from
                  AI ambition to execution is fraught with obstacles.
                </p>

                <p>
                  At Ambient.ai, we've identified key factors contributing to
                  successful AI deployment:
                </p>

                <p>
                  <strong>Contextual Understanding:</strong> AI systems must
                  grasp the nuanced context of enterprise operations, not just
                  process isolated data points.
                </p>

                <p>
                  <strong>Integrated Data Ecosystems:</strong> Seamless
                  integration across various data sources ensures AI models have
                  access to comprehensive information, enhancing decision-making
                  capabilities.
                </p>

                <p>
                  <strong>Robust Infrastructure:</strong> A flexible and
                  scalable infrastructure is essential to support AI workloads
                  and facilitate real-time analytics.
                </p>

                <p>
                  By focusing on these areas, we've enabled organizations to
                  move beyond pilot programs, achieving tangible ROI from their
                  AI investments.
                </p>

                <p>
                  I'm curious to hear from others: What strategies have you
                  found effective in translating AI initiatives from concept to
                  reality?
                </p>
              </>
              <button
                onClick={() => toggleExpand("technical-post-2")}
                className="absolute bottom-[2px] right-0 bg-white text-xs font-semibold text-linkedIn-primary pl-2 pr-1 cursor-pointer"
              >
                {expandedPosts["technical-post-2"]
                  ? "Show less"
                  : "... Show more"}
              </button>
            </div>
          </LinkedInPostCard>
        </div>
        <div className="my-8">
          <WhyBox
            heading="Why the above posts?"
            summary="Why These are Great Fit for Lawrence - These posts are technical, shows our strong points while addressing real issues"
            points={[
              "Founder-POV: Speaks directly from his journey building Ambient.",
              "Audience-relevant: Focuses on CoS, his exact ICP (Ideal Customer Profile).",
              "Non-generic: Doesn’t repeat tired “AI will replace jobs” tropes—instead, it reframes the debate.",
              "Engagement-friendly: Ends with a real call for response, not a vague CTA.",
              "Educates + positions Ambient as a category-definer without sounding salesy.",
              "Data-Driven Insight: Cites specific, recent IDC findings to highlight the prevalent challenge in AI deployment.",
              "Thought Leadership: Positions Ambient.ai as a solution-oriented leader addressing real-world enterprise AI challenges.",
            ]}
          />
        </div>
      </div>
      {/* Industry Trends */}

      {/* {} */}

      {/* General Post */}

      <hr className="mb-12 border-b border-primary/20" />
      <div>
        <PostNoteBox
          categoryText="General Post"
          noteText="These posts are created with very little context for now"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <LinkedInPostCard
            name={clientInfo?.name}
            title={clientInfo?.title}
            profileImage={clientInfo?.profilePictureUrl}
            websiteLink="#"
          >
            <div
              className={twMerge(
                "text-gray-800 space-y-2 text-sm pt-2 transition-all duration-300 relative",
                !expandedPosts["general-post-1"] &&
                  "line-clamp-[9] overflow-hidden"
              )}
            >
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
              <button
                onClick={() => toggleExpand("general-post-1")}
                className="absolute bottom-[2px] right-0 bg-white text-xs font-semibold text-linkedIn-primary pl-2 pr-1 cursor-pointer"
              >
                {expandedPosts["general-post-1"]
                  ? "Show less"
                  : "... Show more"}
              </button>
            </div>
          </LinkedInPostCard>
          <LinkedInPostCard
            name={clientInfo?.name}
            title={clientInfo?.title}
            profileImage={clientInfo?.profilePictureUrl}
            websiteLink="#"
          >
            <div
              className={twMerge(
                "text-gray-800 space-y-2 text-sm pt-2 transition-all duration-300 relative",
                !expandedPosts["general-post-2"] &&
                  "line-clamp-[8] overflow-hidden"
              )}
            >
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
              <button
                onClick={() => toggleExpand("general-post-2")}
                className="absolute bottom-[2px] right-0 bg-white text-xs font-semibold text-linkedIn-primary pl-2 pr-1 cursor-pointer"
              >
                {expandedPosts["general-post-2"]
                  ? "Show less"
                  : "... Show more"}
              </button>
            </div>
          </LinkedInPostCard>
        </div>
        <div className="my-8">
          <WhyBox
            heading="Why the above posts?"
            points={[
              "It hits Ambient’s core product thesis — 'memory over summary'. Ambient isn’t just a meeting tool - It’s a memory system for executive teams.",
              "This post reframes a popular assumption ('AI summaries are enough') and challenges it directly, which Lawrence does often in his posts.",
              "The phrase: 'We built Ambient for this exact use case. Not for meeting recaps. For memory.' — this is the product’s mission in one sentence.",
              "Product-Mission - It’s literally about fixing the broken memory layer",
              "ICP-Relevant - Targets exec teams buried in “noise” not follow-through",
              "Tone-Perfect - Sharp, clean, founder-speak — not marketing speak",
              "Narrative-Driven - Walks from insight to problem to POV without pitching",
              "Shareable - Lines like “Insight without action is just noise” are gold",
            ]}
          />
        </div>
      </div>
    </ReportCard>
  );
};

export default LawrenceSamplePosts;
