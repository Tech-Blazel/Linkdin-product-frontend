import { FC } from "react";
import ReportCard from "./sub-components/ReportCard";
import { FaChartLine } from "react-icons/fa";
import WhyBox from "./sub-components/WhyBox";
import PostNoteBox from "./sub-components/PostNoteBox";
import LinkedInPostCard from "./sub-components/LinkedInPostCard";

const StanSamplePosts: FC = () => {
  return (
    <ReportCard title="Sample Posts" icon={FaChartLine}>
      <PostNoteBox
        categoryText="Technical posts"
        noteText="These posts are created with very little context for now"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <LinkedInPostCard
          name="Stan Markuze"
          title="CEO, Balance Cash"
          profileImage="https://media.licdn.com/dms/image/v2/C5603AQHHYdnksjrgnQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1658515315248?e=1753315200&v=beta&t=ticqP83Vj7twLOLbG0_eXXKlqTo4YbAaP42IzAy1p-8"
          websiteLink="#"
        >
          <div className="text-gray-800 space-y-2 text-sm pt-2">
            <>
              <p>
                <strong>
                  Your CFO Dashboard Is Lying to You—And It Could Cost You
                  Everything
                </strong>
              </p>

              <p>
                Imagine this: Your startup’s dashboard shows $10M in the bank.
                Revenue is up, runway looks solid. Then a critical vendor
                payment bounces. Payroll stalls. Your team scrambles. How did
                this happen?
              </p>

              <p>
                Most CFOs don’t track the one metric that matters: cash you can
                actually use, in real time, across all accounts and constraints.
              </p>

              <p>Here’s why that’s a problem:</p>

              <p>
                * Cash trapped in restricted accounts or pending settlements
                isn’t liquid.
                <br />
                * Manual tracking across entities misses hidden risks like debt
                covenants or approval delays.
                <br />* A real estate firm with 20 properties or a SaaS company
                with global accounts can lose millions without clear visibility.
              </p>

              <p>
                The fix? A dashboard that shows movable cash—not just totals.
                Modern treasury systems deliver this in real time, automating
                flows to keep your business agile.
              </p>

              <p>
                In 2025, with tighter markets and higher stakes, cash
                availability isn’t just a metric—it’s your lifeline.
              </p>

              <p>
                If your dashboard doesn’t show this, you’re flying blind. Let’s
                talk about fixing it before it’s too late.
              </p>
            </>
          </div>
        </LinkedInPostCard>
        <LinkedInPostCard
          name="Stan Markuze"
          title="CEO, Balance Cash"
          profileImage="https://media.licdn.com/dms/image/v2/C5603AQHHYdnksjrgnQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1658515315248?e=1753315200&v=beta&t=ticqP83Vj7twLOLbG0_eXXKlqTo4YbAaP42IzAy1p-8"
          websiteLink="#"
        >
          <div className="text-gray-800 space-y-2 text-sm pt-2">
            <>
              <p>
                <strong>
                  Your Cash Is Bleeding Value—And You’re Missing It
                </strong>
              </p>

              <p>
                Picture this: Your real estate firm has $5M in the bank. The
                balance sheet looks strong. Then a prime property deal arises,
                but you can’t move fast enough—half your cash is stuck in
                low-yield accounts or tied up in settlements. You miss the deal
                and borrow at 7% to cover a gap. Sound familiar?
              </p>

              <p>
                Hoarding cash doesn’t mean it’s working for you. Idle cash is a
                silent profit killer.
              </p>

              <p>Here’s what it’s costing you:</p>

              <p>
                * Funds in non-yielding accounts lose 2-3% annually to inflation
                and missed returns.
                <br />
                * Lack of real-time visibility hides what’s truly accessible
                across entities.
                <br />* Opportunities slip away while you scramble to unlock
                restricted cash.
              </p>

              <p>
                Modern treasury systems fix this. They automate cash sweeps,
                optimize liquidity, and show you what’s movable—today. For a
                SaaS startup or property portfolio, this means turning idle cash
                into growth without sacrificing safety.
              </p>

              <p>
                In 2025’s high-rate environment, sitting on dead cash isn’t
                caution—it’s a costly mistake.
              </p>

              <p>
                If your cash isn’t earning or ready, it’s time to rethink your
                strategy.
              </p>
            </>
          </div>
        </LinkedInPostCard>
      </div>
      <div className="my-8">
        <WhyBox
          heading="Why the above posts?"
          summary="We've identified key influencers whose content strategies align with your strengths and goals. These influencers demonstrate exceptional engagement metrics and content approaches that could enhance your LinkedIn presence."
          points={[
            "Connection to current events or trending topics",
            "Personal insights or opinions",
            "Relevance to food technology and investment",
            "Mentions of specific companies (Lever VC, Oobli, XOXO SODA)",
          ]}
        />
      </div>
    </ReportCard>
  );
};

export default StanSamplePosts;
