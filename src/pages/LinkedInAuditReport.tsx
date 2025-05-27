import AudienceAnalysis from "@/components/linkedIn-report/AudienceAnalysis";
import ContentAnalysis from "@/components/linkedIn-report/ContentAnalysis";
import CoverPage from "@/components/linkedIn-report/CoverPage";
import ExecutiveSummary from "@/components/linkedIn-report/ExecutiveSummary";
import PostingPatterns from "@/components/linkedIn-report/PostingPatterns";
import TopPerformingPosts from "@/components/linkedIn-report/TopPerformingPosts";
import TopInfluencers from "@/components/linkedIn-report/TopInfluencers";
import InfluencerPostingAnalysis from "@/components/linkedIn-report/InfluencerPostingAnalysis";
import InfluencerAnalysis from "@/components/linkedIn-report/InfluencerAnalysis";
// import HashtagPerformanceAnalysis from "@/components/linkedIn-report/HashtagPerformanceAnalysis";
import PostingRecommendations from "@/components/linkedIn-report/PostingRecommendations";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useEffect, useRef, useState } from "react";
import CaelanSamplePosts from "@/components/linkedIn-report/CaelanSamplePosts";
import RyanSamplePosts from "@/components/linkedIn-report/RyanSamplePosts";
import { updateReportSchema } from "@/features/auditReportSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fromSlugName, samplePostsConfigs } from "@/utils/constants";
import GlobalLoader from "@/components/GlobalLoader";
import SamplePosts from "@/components/linkedIn-report/SamplePosts";
// import {
//   deanCategories,
//   KanishkCategories,
//   lawrenceCategories,
//   stanCategories,
// } from "@/utils/SamplePostsCategories";

const LinkedInAuditReport = () => {
  const linkedInReport = useSelector(
    (state: RootState) => state.auditReportSchema
  );

  const {
    topIndustryInfluencersAnalysis,
    reportMetadata: { clientInfo },
  } = linkedInReport;

  const { influencers } = topIndustryInfluencersAnalysis;

  const dispatch = useDispatch();

  const { clientName } = useParams();

  // const [isDownloading, setIsDownloading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const samplePostsConfig = clientInfo?.name
    ? samplePostsConfigs[clientInfo.name]
    : null;

  const sections = [
    <CoverPage />,
    <ExecutiveSummary />,
    <ContentAnalysis />,
    <TopPerformingPosts />,
    <AudienceAnalysis />,
    <PostingPatterns />,
    <TopInfluencers />,
    <InfluencerPostingAnalysis />,
    ...(influencers
      ? influencers?.map((influencer: any, index: number) => (
          <InfluencerAnalysis
            key={index}
            influencer={influencer}
            index={index}
          />
        ))
      : []),
    ...(clientInfo?.name === "Caelan Urquhart" ? [<CaelanSamplePosts />] : []),
    // ...(clientInfo?.name === "Dean Pleban"
    //   ? [
    //       <SamplePosts
    //         title="Sample Posts"
    //         clientName={clientInfo.name}
    //         clientTitle={clientInfo.title}
    //         clientProfileImage={clientInfo.profilePictureUrl}
    //         clientWebsite={clientInfo.website}
    //         categories={deanCategories}
    //       />,
    //     ]
    //   : []),
    ...(clientInfo?.name === "Ryan H. Vaughn" ? [<RyanSamplePosts />] : []),
    // ...(clientInfo?.name === "Lawrence Coburn"
    //   ? [
    //       <SamplePosts
    //         title="Sample Posts"
    //         clientName={clientInfo.name}
    //         clientTitle={clientInfo.title}
    //         clientProfileImage={clientInfo.profilePictureUrl}
    //         clientWebsite={clientInfo.website}
    //         categories={lawrenceCategories}
    //       />,
    //     ]
    //   : []),
    // ...(clientInfo?.name === "Stan Markuze"
    //   ? [
    //       <SamplePosts
    //         title="Sample Posts"
    //         clientName={clientInfo.name}
    //         clientTitle={clientInfo.title}
    //         clientProfileImage={clientInfo.profilePictureUrl}
    //         clientWebsite={clientInfo.website}
    //         categories={stanCategories}
    //       />,
    //     ]
    //   : []),
    // ...(clientInfo?.name === "Kanishk Parashar"
    //   ? [
    //       <SamplePosts
    //         title="Sample Posts"
    //         clientName={clientInfo.name}
    //         clientTitle={clientInfo.title}
    //         clientProfileImage={clientInfo.profilePictureUrl}
    //         clientWebsite={clientInfo.website}
    //         categories={KanishkCategories}
    //       />,
    //     ]
    //   : []),
    ...(samplePostsConfig
      ? [
          <SamplePosts
            key="sample-posts"
            title="Sample Posts"
            clientName={clientInfo.name}
            clientTitle={clientInfo.title}
            clientProfileImage={clientInfo.profilePictureUrl}
            clientWebsite={clientInfo.website}
            categories={samplePostsConfig.categories}
          />,
        ]
      : []),
    <PostingRecommendations />,
  ];

  const containerRef = useRef<any>(null);

  useEffect(() => {
    const loadSchema = async () => {
      if (!clientName) {
        setIsLoading(false);
        throw new Error("Client name is required in the URL.");
      }
      setIsLoading(true);

      const readableName = fromSlugName(clientName);
      const schema = await import(`@/utils/${readableName}.json`);
      if (schema) {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
      dispatch(updateReportSchema(schema.default));
    };
    loadSchema();
  }, []);

  return (
    <div className="">
      {isLoading && <GlobalLoader />}

      {linkedInReport?.executiveSummary?.summaryText && !isLoading ? (
        <div ref={containerRef}>
          {sections?.map((Component, index) => (
            <div key={index} className="mb-10">
              {Component}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LinkedInAuditReport;
