import React, { FC, useEffect, useRef, useState, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "@/app/store";
import { updateReportSchema } from "@/features/auditReportSlice";
import { fromSlugName, samplePostsConfigs } from "@/utils/constants";
import GlobalLoader from "@/components/GlobalLoader";

// Lazy-loaded components
const CoverPage = React.lazy(
  () => import("@/components/linkedIn-report/CoverPage")
);
const ExecutiveSummary = React.lazy(
  () => import("@/components/linkedIn-report/ExecutiveSummary")
);
const ContentAnalysis = React.lazy(
  () => import("@/components/linkedIn-report/ContentAnalysis")
);
const TopPerformingPosts = React.lazy(
  () => import("@/components/linkedIn-report/TopPerformingPosts")
);
const AudienceAnalysis = React.lazy(
  () => import("@/components/linkedIn-report/AudienceAnalysis")
);
const PostingPatterns = React.lazy(
  () => import("@/components/linkedIn-report/PostingPatterns")
);
const TopInfluencers = React.lazy(
  () => import("@/components/linkedIn-report/TopInfluencers")
);
const InfluencerPostingAnalysis = React.lazy(
  () => import("@/components/linkedIn-report/InfluencerPostingAnalysis")
);
const InfluencerAnalysis = React.lazy(
  () => import("@/components/linkedIn-report/InfluencerAnalysis")
);
const CaelanSamplePosts = React.lazy(
  () => import("@/components/linkedIn-report/CaelanSamplePosts")
);
const RyanSamplePosts = React.lazy(
  () => import("@/components/linkedIn-report/RyanSamplePosts")
);
const SamplePosts = React.lazy(
  () => import("@/components/linkedIn-report/SamplePosts")
);
const PostingRecommendations = React.lazy(
  () => import("@/components/linkedIn-report/PostingRecommendations")
);

const LinkedInAuditReport: FC = () => {
  const dispatch = useDispatch();
  const { clientName } = useParams();
  const linkedInReport = useSelector(
    (state: RootState) => state.auditReportSchema
  );

  const {
    topIndustryInfluencersAnalysis,
    reportMetadata: { clientInfo },
  } = linkedInReport;

  const { influencers } = topIndustryInfluencersAnalysis;

  const [isLoading, setIsLoading] = useState(false);
  const samplePostsConfig = clientInfo?.name
    ? samplePostsConfigs[clientInfo.name]
    : null;

  const containerRef = useRef<any>(null);

  useEffect(() => {
    const loadSchema = async () => {
      if (!clientName) return;
      setIsLoading(true);
      const readableName = fromSlugName(clientName);
      const schema = await import(`@/utils/${readableName}.json`);
      dispatch(updateReportSchema(schema.default));
      setTimeout(() => setIsLoading(false), 300);
    };
    loadSchema();
  }, []);

  const sections = [
    <CoverPage key="cover" />,
    <ExecutiveSummary key="executive" />,
    <ContentAnalysis key="content" />,
    <TopPerformingPosts key="top-posts" />,
    <AudienceAnalysis key="audience" />,
    <PostingPatterns key="patterns" />,
    <TopInfluencers key="top-influencers" />,
    <InfluencerPostingAnalysis key="posting-analysis" />,
    ...(influencers
      ? influencers.map((influencer: any, index: number) => (
          <InfluencerAnalysis
            key={`inf-${index}`}
            influencer={influencer}
            index={index}
          />
        ))
      : []),
    ...(clientInfo?.name === "Caelan Urquhart"
      ? [<CaelanSamplePosts key="caelan" />]
      : []),
    ...(clientInfo?.name === "Ryan H. Vaughn"
      ? [<RyanSamplePosts key="ryan" />]
      : []),
    ...(samplePostsConfig
      ? [
          <SamplePosts
            key="sample"
            title="Sample Posts"
            clientName={clientInfo.name}
            clientTitle={clientInfo.title}
            clientProfileImage={clientInfo.profilePictureUrl}
            clientWebsite={clientInfo.website}
            categories={samplePostsConfig.categories}
          />,
        ]
      : []),
    <PostingRecommendations key="recommendations" />,
  ];

  return (
    <div>
      {/* {isLoading && <GlobalLoader />} */}

      {!isLoading && linkedInReport?.executiveSummary?.summaryText && (
        <div ref={containerRef}>
          <Suspense fallback={<GlobalLoader />}>
            {sections.map((Section, index) => (
              <div key={index} className="mb-10">
                {Section}
              </div>
            ))}
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default LinkedInAuditReport;
