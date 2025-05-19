import AudienceAnalysis from "@/components/linkedIn-report/AudienceAnalysis";
import ContentAnalysis from "@/components/linkedIn-report/ContentAnalysis";
import CoverPage from "@/components/linkedIn-report/CoverPage";
import ExecutiveSummary from "@/components/linkedIn-report/ExecutiveSummary";
import PostingPatterns from "@/components/linkedIn-report/PostingPatterns";
import TopPerformingPosts from "@/components/linkedIn-report/TopPerformingPosts";
import TopInfluencers from "@/components/linkedIn-report/TopInfluencers";
import InfluencerPostingAnalysis from "@/components/linkedIn-report/InfluencerPostingAnalysis";
import InfluencerAnalysis from "@/components/linkedIn-report/InfluencerAnalysis";
import HashtagPerformanceAnalysis from "@/components/linkedIn-report/HashtagPerformanceAnalysis";
import PostingRecommendations from "@/components/linkedIn-report/PostingRecommendations";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Loader2 } from "lucide-react";
import SamplePosts from "@/components/linkedIn-report/SamplePosts";
import DeanSamplePosts from "@/components/linkedIn-report/DeanSamplePosts";

const LinkedInAuditReport = () => {
  const { influencers } = useSelector(
    (state: RootState) => state.auditReportSchema.topIndustryInfluencersAnalysis
  );

  const [isDownloading, setIsDownloading] = useState(false);

  const sections = [
    <CoverPage />,
    <ExecutiveSummary />,
    <ContentAnalysis />,
    <TopPerformingPosts />,
    <HashtagPerformanceAnalysis />,
    <AudienceAnalysis />,
    <PostingPatterns />,
    <TopInfluencers />,
    <InfluencerPostingAnalysis />,
    ...influencers.map((influencer, index) => (
      <InfluencerAnalysis key={index} influencer={influencer} index={index} />
    )),
    <PostingRecommendations />,
    // <SamplePosts />,
    <DeanSamplePosts />,
  ];

  const containerRef = useRef<any>(null);

  const patchUnsupportedColors = () => {
    document.querySelectorAll("*").forEach((el) => {
      const styles = window.getComputedStyle(el);

      if (styles.color.includes("oklab")) {
        (el as HTMLElement).style.color = "#000";
      }
      if (styles.backgroundColor.includes("oklab")) {
        (el as HTMLElement).style.backgroundColor = "#f3f4f6";
      }
      if (styles.color.includes("oklch")) {
        (el as HTMLElement).style.color = "#000";
      }
      if (styles.backgroundColor.includes("oklch")) {
        (el as HTMLElement).style.backgroundColor = "#f3f4f6";
      }
    });
  };

  const downloadPDF = async (containerRef: React.RefObject<HTMLDivElement>) => {
    patchUnsupportedColors();

    try {
      setIsDownloading(true);
      if (!containerRef.current) return;

      const element = containerRef.current;

      await new Promise((res) => setTimeout(res, 300));

      const canvas = await html2canvas(element, {
        scale: 0.85,
        useCORS: true,
        scrollY: -window.scrollY,
        height: element.scrollHeight,
        windowHeight: element.scrollHeight,
      });

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvasWidth, canvasHeight],
      });

      // ✅ Keep image original size, don't stretch
      pdf.addImage(
        canvas.toDataURL("image/png"),
        "PNG",
        0,
        0,
        canvasWidth,
        canvasHeight
      );

      console.log("Original canvas height:", canvasHeight);
      console.log("PDF height used:", canvasHeight);

      pdf.save("report.pdf");
    } catch (error) {
      console.error("Error downloading PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={() => downloadPDF(containerRef)}
        className="fixed bottom-4 right-4 z-50 group bg-primary text-white p-4 py-3 rounded-full transition-all duration-300 flex items-center gap-2 overflow-hidden hover:p-5 shadow-lg cursor-pointer"
      >
        {isDownloading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <IoCloudDownloadOutline className="w-5 h-5 shrink-0 transition-transform duration-300" />
        )}
      </button>

      <div ref={containerRef}>
        {sections.map((Component, index) => (
          <div key={index} className="mb-10">
            {Component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedInAuditReport;
