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
import { useRef } from "react";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import { IoCloudDownloadOutline } from "react-icons/io5";
// import { Loader2 } from "lucide-react";
import CaelanSamplePosts from "@/components/linkedIn-report/CaelanSamplePosts";
import ClientSwitcher from "@/components/linkedIn-report/ClientSwitcher";
import DeanSamplePosts from "@/components/linkedIn-report/DeanSamplePosts";
import RyanSamplePosts from "@/components/linkedIn-report/RyanSamplePosts";
import LawrenceSamplePosts from "@/components/linkedIn-report/LawrenceSamplePosts";
import StanSamplePosts from "@/components/linkedIn-report/StanSamplePosts";

const LinkedInAuditReport = () => {
  const linkedInReport = useSelector(
    (state: RootState) => state.auditReportSchema
  );

  const {
    topIndustryInfluencersAnalysis,
    reportMetadata: { clientInfo },
  } = linkedInReport;

  const { influencers } = topIndustryInfluencersAnalysis;

  // const [isDownloading, setIsDownloading] = useState(false);

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
    ...(clientInfo?.name === "Dean Pleban" ? [<DeanSamplePosts />] : []),
    ...(clientInfo?.name === "Ryan H. Vaughn" ? [<RyanSamplePosts />] : []),
    ...(clientInfo?.name === "Lawrence Coburn"
      ? [<LawrenceSamplePosts />]
      : []),
    ...(clientInfo?.name === "Stan Markuze" ? [<StanSamplePosts />] : []),
    <PostingRecommendations />,
  ];

  const containerRef = useRef<any>(null);

  // const patchUnsupportedColors = () => {
  //   const patchElement = (el: Element) => {
  //     const styles = window.getComputedStyle(el);

  //     const patchStyle = (property: any, fallback: string) => {
  //       const value: any = styles[property];
  //       if (value && /(oklab|oklch)/.test(value)) {
  //         (el as HTMLElement).style[property] = fallback;
  //       }
  //     };

  //     patchStyle("color", "#000");
  //     patchStyle("backgroundColor", "#f3f4f6");
  //     patchStyle("borderColor", "#d1d5db");
  //   };

  //   const walkDOM = (node: Element) => {
  //     patchElement(node);
  //     node.childNodes.forEach((child) => {
  //       if (child instanceof Element) {
  //         walkDOM(child);
  //       }
  //     });
  //   };

  //   walkDOM(document.body);
  // };

  // const downloadPDF = async (containerRef: React.RefObject<HTMLDivElement>) => {
  //   patchUnsupportedColors();

  //   try {
  //     setIsDownloading(true);
  //     if (!containerRef.current) return;

  //     const element = containerRef.current;

  //     await new Promise((res) => setTimeout(res, 300));

  //     const canvas = await html2canvas(element, {
  //       scale: 0.85,
  //       useCORS: true,
  //       scrollY: -window.scrollY,
  //       height: element.scrollHeight,
  //       windowHeight: element.scrollHeight,
  //     });

  //     const canvasWidth = canvas.width;
  //     const canvasHeight = canvas.height;

  //     const pdf = new jsPDF({
  //       orientation: "portrait",
  //       unit: "px",
  //       format: [canvasWidth, canvasHeight],
  //     });

  //     // ✅ Keep image original size, don't stretch
  //     pdf.addImage(
  //       canvas.toDataURL("image/png"),
  //       "PNG",
  //       0,
  //       0,
  //       canvasWidth,
  //       canvasHeight
  //     );

  //     console.log("Original canvas height:", canvasHeight);
  //     console.log("PDF height used:", canvasHeight);

  //     pdf.save("report.pdf");
  //   } catch (error) {
  //     console.error("Error downloading PDF:", error);
  //   } finally {
  //     setIsDownloading(false);
  //   }
  // };

  return (
    <div className="">
      {/* <button
        onClick={() => downloadPDF(containerRef)}
        className="fixed bottom-4 right-4 z-50 group bg-primary text-white p-4 py-3 rounded-full transition-all duration-300 flex items-center gap-2 overflow-hidden hover:p-5 shadow-lg cursor-pointer"
      >
        {isDownloading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <IoCloudDownloadOutline className="w-5 h-5 shrink-0 transition-transform duration-300" />
        )}
      </button> */}

      <div className="mb-6">
        <ClientSwitcher />
      </div>

      {linkedInReport?.executiveSummary?.summaryText ? (
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
