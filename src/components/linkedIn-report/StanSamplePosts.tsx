import { FC, useState } from "react";
import ReportCard from "./sub-components/ReportCard";
import { FaChartLine } from "react-icons/fa";
import WhyBox from "./sub-components/WhyBox";
import PostNoteBox from "./sub-components/PostNoteBox";
import LinkedInPostCard from "./sub-components/LinkedInPostCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { twMerge } from "tailwind-merge";

const StanSamplePosts: FC = () => {
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
    <ReportCard title="Sample Posts" icon={FaChartLine}>
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
                  Most companies don’t need better cash flow reports. They need
                  cash flow systems that react, adapt, and explain themselves.
                </p>

                <p>
                  Here’s how AI is finally making that possible—based on what
                  we’ve seen at <strong>Balance.io</strong> and what{" "}
                  <strong>J.P. Morgan</strong> just confirmed across global
                  treasury teams:
                </p>

                <p>
                  <strong>1. Modeling Behavior, Not Just Averages</strong>
                </p>
                <p>
                  Traditional forecasts guess based on historical snapshots. AI
                  models—especially ensemble learners and deep nets—build off
                  dynamic inputs like:
                </p>
                <ul className="list-disc ml-6">
                  <li>payment patterns by customer</li>
                  <li>macroeconomic indicators</li>
                  <li>supply chain velocity</li>
                  <li>even regulatory headlines</li>
                </ul>
                <p>
                  Neural nets can reduce forecast error rates by up to 50%—but
                  only if you build traceability in. Treasury teams can’t
                  operate off black boxes. Interpretability isn’t optional. It’s
                  the job.
                </p>

                <p>
                  <strong>
                    2. Real-Time Forecasting with Multi-Source Inputs
                  </strong>
                </p>
                <p>The biggest unlock? Feeding models real-time signals:</p>
                <ul className="list-disc ml-6">
                  <li>ERP + CRM + POS + market feeds</li>
                  <li>Payment statuses as they change</li>
                  <li>External noise from social, sentiment, regulation</li>
                </ul>
                <p>
                  Also embedded NLP layers that scan unstructured data for
                  liquidity risk signals—policy shifts, market shocks, and
                  customer-level sentiment.
                </p>
                <p>
                  Your cash model shouldn’t just tell you what happened. It
                  should tell you what’s shifting now.
                </p>

                <p>
                  <strong>3. AI-Driven Simulation and Stress Testing</strong>
                </p>
                <p>
                  Legacy stress tests use 3–5 scenarios built in Excel. AI
                  builds 3,000 in seconds. Using enhanced Monte Carlo frameworks
                  and live balance behavior models, treasury leads can now test:
                </p>
                <ul className="list-disc ml-6">
                  <li>supplier pullouts</li>
                  <li>currency devaluation</li>
                  <li>invoice chain delays</li>
                  <li>bank holiday overlaps</li>
                </ul>
                <p>
                  The output: not just risk visibility, but next-best decisions
                  in language an operator can act on.
                </p>

                <p>
                  <strong>4. Where This Is Headed</strong>
                </p>
                <p>The future isn’t just AI-powered. It’s AI-connected:</p>
                <ul className="list-disc ml-6">
                  <li>Real-time cash positioning across global entities</li>
                  <li>
                    Smart liquidity recommendations tied to working capital
                    strategy
                  </li>
                  <li>
                    Even blockchain-fed accuracy for multi-party transactions
                  </li>
                  <li>
                    And when quantum hits treasury, the optimization side
                    (timing, term matching, FX pair routing) gets even more
                    interesting.
                  </li>
                </ul>

                <p>
                  This isn’t about replacing treasury teams. It’s about removing
                  the noise so they can operate at the strategic level—every
                  single day.
                </p>

                <p>
                  At <strong>Balance.io</strong>, we’re building toward that
                  future. Predictive dashboards. Operational intelligence.
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
                  You can build your own AI-powered cash flow model in Azure.
                  But here’s what it actually takes to get it right:
                </p>

                <ul className="list-disc ml-6">
                  <li>
                    ✅ Clean historical data across payables, receivables,
                    terms, timing
                  </li>
                  <li>
                    ✅ Smart model selection (XGBoost, ensemble models, or
                    hybrid systems)
                  </li>
                  <li>
                    ✅ DevOps to manage ML pipelines, CI/CD, and retraining
                  </li>
                  <li>
                    ✅ Ongoing drift detection and retraining logic to keep
                    forecasts valid
                  </li>
                  <li>
                    ✅ Integration layers to push results into financial
                    systems, dashboards, or workflows
                  </li>
                </ul>

                <p>
                  This isn’t plug-and-play. It’s hours of engineering and
                  iteration—and you’ll need to maintain it.
                </p>

                <p>We’ve been through that cycle.</p>

                <p>
                  That’s why at <strong>Balance.io</strong>, we’ve done the
                  heavy lifting already. Our models are production-ready,
                  fine-tuned, and battle-tested across real customer
                  data—designed to plug in, not just prototype.
                </p>

                <p>
                  If you’ve got the team and time, DIY is possible.
                  <br />
                  If you want results this quarter, we're already live.
                </p>

                <p>
                  <strong>
                    #CashFlowForecasting #AIinFinance #AzureML #EmbeddedFinance
                    #BalanceCash #OperatorTools #TreasuryTech #MLinProduction
                  </strong>
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
            summary="AI in treasury is evolving fast. This post shows Stan is hands-on, building real systems—not reacting to trends."
            points={[
              "Speaks directly to finance leaders, not general tech audiences.",
              "Frames AI as infrastructure, not buzz or automation.",
              "Matches Stan’s tone: clean, focused, technical, credible.",
              "Reinforces Balance’s product depth without overselling it.",
              "Builds trust with operators who care about systems, not slides.",
              "Engages a technically literate audience without overselling.",
              "Highlights real build complexity to frame product value. Reinforces Balance.io’s technical depth and credibility.",
              "Converts curiosity into conversation without sounding sales-driven",
            ]}
          />
        </div>
      </div>
      {/* Industry Trends */}

      <hr className="mb-12 border-b border-primary/20" />
      <div>
        <PostNoteBox
          categoryText="Industry Trends"
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
                !expandedPosts["industry-post-1"] &&
                  "line-clamp-[8] overflow-hidden"
              )}
            >
              <>
                <p>
                  <strong>
                    Cash Flow Is Still the Top Threat to Small Business in 2025.
                  </strong>
                </p>

                <p>
                  According to NAB’s latest SME survey, 43% of businesses rank
                  cash flow as one of their top three concerns. In the business
                  services sector, the number is even higher, with half of all
                  firms citing it as a critical issue. This isn’t just about
                  late payments or tighter margins—this is about fundamental
                  operational risk.
                </p>

                <p>
                  Even as inflation eases slightly and interest rates fall, the
                  pressure hasn’t lifted. Delayed receivables, rising payroll
                  costs, unpredictable expenses, and outdated financial systems
                  are quietly undermining otherwise healthy companies. What
                  makes it even more dangerous is that many are still relying on
                  disconnected spreadsheets, scattered bank dashboards, and
                  manual workarounds to manage liquidity.
                </p>

                <p>
                  Cash flow gaps don’t always show up in the profit and loss
                  statement—but they’re often the first sign that a business
                  will struggle to reinvest, hire, or even survive a downturn.
                  The mistake too many companies make is waiting until the
                  pressure becomes a crisis before they fix the way they manage
                  cash.
                </p>

                <p>
                  That’s exactly why we built Balance.io—to give businesses the
                  tools they need to proactively manage liquidity, not react to
                  it.
                </p>

                <p>
                  With real-time visibility across every account, automated cash
                  sweep strategies, and intelligent forecasting built directly
                  into the platform, Balance helps companies turn idle cash into
                  working capital, identify risks before they escalate, and run
                  treasury operations with the same precision they bring to
                  sales or product.
                </p>

                <p>
                  In a market where efficiency isn’t just valued—it’s
                  required—your financial systems need to keep up with the pace
                  of decision-making.
                </p>

                <p>
                  <strong>
                    Cash should be a strength, not a stress point.
                  </strong>
                </p>

                <p>
                  #CashFlow #LiquidityManagement #TreasuryTechnology #SMBFinance
                  #BalanceCash #FinancialOperations #WorkingCapital
                  #CFOLeadership
                </p>
              </>
              <button
                onClick={() => toggleExpand("industry-post-1")}
                className="absolute bottom-[2px] right-0 bg-white text-xs font-semibold text-linkedIn-primary pl-2 pr-1 cursor-pointer"
              >
                {expandedPosts["industry-post-1"]
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
                !expandedPosts["industry-post-2"] &&
                  "line-clamp-[8] overflow-hidden"
              )}
            >
              <>
                <p>
                  <strong>
                    Cash Flow Isn’t Just a Finance Problem—It’s a Survival
                    Problem.
                  </strong>
                </p>

                <p>
                  Exploding Topics research shows that 16% of startup failures
                  are directly tied to cash flow and other financial missteps.
                  That number should concern every founder—because it’s not
                  about bad ideas. It’s about burnout from financial blind
                  spots.
                </p>

                <p>Most early-stage startups:</p>
                <ul className="list-disc ml-6">
                  <li>Launch with limited reserves</li>
                  <li>Overestimate revenue timelines</li>
                  <li>
                    Underestimate the real cost of finding product-market fit
                  </li>
                </ul>

                <p>
                  Even more alarming—founders often need 3x more time to
                  validate their market than they initially plan for. And during
                  that window, if cash isn’t managed with discipline, the
                  business doesn’t pivot. It shuts down.
                </p>

                <p>
                  Cash flow isn’t a bookkeeping function. It’s an operational
                  reality that defines whether a company has enough time to
                  build, test, and adapt before running out of options.
                </p>

                <p>
                  Startups don’t fail because the product was weak.
                  <br />
                  They fail because the cash ran dry before they could fix it.
                </p>

                <p>
                  At Balance.io, we give founders the visibility and control to
                  stretch every dollar further—without the guesswork.
                </p>

                <p>
                  #StartupFinance #CashFlow #EarlyStageStartups #Founders
                  #VentureOps #FinancialDiscipline #ProductMarketFit
                  #StartupFailure #BalanceCash
                </p>
              </>
              <button
                onClick={() => toggleExpand("industry-post-2")}
                className="absolute bottom-[2px] right-0 bg-white text-xs font-semibold text-linkedIn-primary pl-2 pr-1 cursor-pointer"
              >
                {expandedPosts["industry-post-2"]
                  ? "Show less"
                  : "... Show more"}
              </button>
            </div>
          </LinkedInPostCard>
        </div>
        <div className="my-8">
          <WhyBox
            heading="Why the above posts?"
            summary="Chose this post because cash flow is a real, data-backed pain for SMBs, and it ties directly to your experience as a founder."
            points={[
              "It educates without pitching — subtly reinforcing Balance.io’s mission.",
              "The Forbes reference adds credibility, and the tone stays consistent with your usual strategic, operator-focused content.",
              "It’s tailored for your audience of founders, CFOs, and operators, offering value without feeling like a pitch.",
              "It aligns naturally with Balance.io’s mission, showing relevance without being promotional.",
              "The tone reflects your credibility as a founder-operator and positions you as someone who understands startup pain firsthand.",
            ]}
          />
        </div>
      </div>

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
                  <strong>
                    The cash flow crisis isn’t new. What’s broken is how we’re
                    still trying to manage it.
                  </strong>
                </p>

                <p>
                  Forbes reports that 43% of small-business owners call cash
                  flow their top challenge. Another 38% are relying on credit
                  cards or draining reserves just to stay operational.
                </p>

                <p>That’s not risk management. That’s survival mode.</p>

                <p>
                  The average small business still juggles 10–15 apps to run
                  basic finance ops—one for invoicing, another for payments, a
                  spreadsheet to forecast, and usually a manual fix when
                  something breaks. It’s duct tape pretending to be
                  infrastructure.
                </p>

                <p>
                  The result? Missed payments. Delayed decisions. Owners
                  spending more time reconciling numbers than running the
                  business.
                </p>

                <p>
                  Fintech’s job now isn’t to build another app. It’s to replace
                  the maze with a single, intelligent system that does what
                  founders actually need:
                </p>

                <ul className="list-disc ml-6">
                  <li>Real-time clarity</li>
                  <li>Smarter forecasting</li>
                  <li>Faster access to working capital</li>
                  <li>Tools that work together, not against each other</li>
                </ul>

                <p>
                  At Balance.io, that’s been our focus from day one: eliminate
                  the noise, automate the movement, and give businesses the one
                  thing they need most—room to think clearly and act faster.
                </p>

                <p>
                  Cash flow shouldn’t come down to gut feel and spreadsheets at
                  midnight. It should be clear the moment you open your laptop.
                </p>

                <p>
                  #CashFlow #Fintech #BalanceCash #SmallBusinessFinance
                  #LiquidityOps #Forecasting #TreasuryTools #BuiltForBusiness
                </p>
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
                  <strong>
                    Australian SMBs just put a spotlight on a global issue.
                  </strong>
                </p>

                <p>
                  CommBank’s latest research shows that 80% of small businesses
                  in Australia struggled with cash flow last year.
                </p>

                <p>That stat alone isn’t surprising. What is?</p>

                <ul className="list-disc ml-6">
                  <li>30% had dangerously low reserves</li>
                  <li>27% had to dip into personal savings</li>
                  <li>Many didn’t pay themselves—at all.</li>
                </ul>

                <p>This isn’t bad accounting. This is a system problem.</p>

                <p>
                  Even when business owners know what to do—cut expenses, look
                  for alternate revenue, adjust pricing—it’s rarely enough. The
                  real issue is that most still lack clean, connected visibility
                  into where the cash sits, what’s at risk, and what’s coming.
                </p>

                <p>The tools still lag the urgency.</p>

                <p>
                  CommBank and AGSM are stepping up with a free course to help
                  SMBs better manage cash flow. That’s a strong move. But
                  education alone won’t close the gap.
                </p>

                <p>
                  The bigger fix needs to come from how we build infrastructure:
                </p>

                <ul className="list-disc ml-6">
                  <li>Not another app.</li>
                  <li>Not another patch.</li>
                </ul>

                <p>
                  But real systems that let small businesses operate like big
                  ones—without the complexity.
                </p>

                <p>
                  At Balance.io, we’re building for that future—where knowing
                  your cash position doesn’t require a spreadsheet and a guess,
                  and acting on it doesn’t take 3 days.
                </p>

                <p>
                  This isn’t just an Australia problem.
                  <br />
                  It’s everywhere.
                </p>

                <p>
                  #CashFlow #SMBFinance #BalanceCash #LiquidityOps
                  #SmallBusinessStrategy #FinancialTools #GlobalSMB
                  #WorkingCapital
                </p>
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
            summary="This post uses timely, data-backed insight from Forbes and QuickBooks to highlight a key SMB challenge—cash flow inefficiency—that directly aligns with Stan’s experience and Balance.io’s mission."
            points={[
              "It frames the problem in a clear, relatable way without oversimplifying or relying on fintech jargon.",
              "Stan’s perspective as a founder who’s navigated capital constraints makes the message credible and grounded.",
              "It reinforces Balance.io’s positioning without being promotional, staying true to the tone and structure of Stan’s past content.",
              "References a major institution (CommBank), adding built-in credibility.",
              "Uses Australia’s data to surface a universal SMB liquidity problem.",
              "Targets serious operators—CFOs, founders, and financial decision-makers who think in systems",
            ]}
          />
        </div>
      </div>
    </ReportCard>
  );
};

export default StanSamplePosts;
