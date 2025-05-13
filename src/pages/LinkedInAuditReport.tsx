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

const LinkedInAuditReport = () => {
  const { influencersList } = useSelector(
    (state: RootState) => state.auditReportSchema.topIndustryInfluencersAnalysis
  );

  const [isDownloading, setIsDownloading] = useState(false);

  const sections = [
    <CoverPage />,
    <ExecutiveSummary />,
    <ContentAnalysis />,
    <TopPerformingPosts />,
    <AudienceAnalysis />,
    <PostingPatterns />,
    <TopInfluencers />,
    <InfluencerPostingAnalysis />,
    ...influencersList.map((influencer, index) => (
      <InfluencerAnalysis key={index} influencer={influencer} index={index} />
    )),
    <HashtagPerformanceAnalysis />,
    <PostingRecommendations />,
  ];

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    sectionRefs.current[index] = el;
  };

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

  const downloadPDF = async () => {
    patchUnsupportedColors();
    try {
      setIsDownloading(true);

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();

      for (let i = 0; i < sectionRefs.current.length; i++) {
        const section = sectionRefs.current[i];
        if (!section) continue;

        const styles = window.getComputedStyle(section);
        if (
          styles.backgroundColor.includes("oklab") ||
          styles.backgroundColor.includes("oklch")
        ) {
          (section as HTMLElement).style.backgroundColor = "#fff";
        }

        const canvas = await html2canvas(section, {
          scale: 2,
          useCORS: true,
          scrollY: -window.scrollY,
        });

        const imgData = canvas.toDataURL("image/png");
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;

        if (i !== 0) pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight);
      }

      pdf.save("report.pdf");
      setIsDownloading(false);
    } catch (error) {
      window.alert("Download failed");
      console.error(error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <button
        onClick={downloadPDF}
        className="fixed bottom-4 right-4 z-50 group bg-primary text-white p-4 py-3 rounded-full transition-all duration-300 flex items-center gap-2 overflow-hidden hover:p-5 shadow-lg cursor-pointer"
      >
        {isDownloading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <IoCloudDownloadOutline className="w-5 h-5 shrink-0 transition-transform duration-300" />
        )}
      </button>

      <div>
        {sections.map((Component, index) => (
          <div key={index} ref={(el) => setRef(el, index)} className="mb-10">
            {Component}
          </div>
        ))}
      </div>
    </>
  );
};

export default LinkedInAuditReport;
