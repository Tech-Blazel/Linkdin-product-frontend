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
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const LinkedInAuditReport = () => {
  const { influencersList } = useSelector(
    (state: RootState) => state.auditReportSchema.topIndustryInfluencersAnalysis
  );

  const reportRef = useRef<HTMLDivElement>(null);

  const patchUnsupportedColors = () => {
    document.querySelectorAll("*").forEach((el) => {
      const styles = window.getComputedStyle(el);

      if (styles.color.includes("oklab")) {
        (el as HTMLElement).style.color = "#000";
      }
      if (styles.backgroundColor.includes("oklab")) {
        (el as HTMLElement).style.backgroundColor = "#fff";
      }
      if (styles.color.includes("oklch")) {
        (el as HTMLElement).style.color = "#000";
      }
      if (styles.backgroundColor.includes("oklch")) {
        (el as HTMLElement).style.backgroundColor = "#fff";
      }
    });
  };

  const downloadPDF = async () => {
    patchUnsupportedColors();
    const element = reportRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      scrollY: -window.scrollY,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    // Add first page
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position -= pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save("report.pdf");
  };

  return (
    <>
      {/* <button
        onClick={downloadPDF}
        className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Download PDF
      </button> */}
      <div ref={reportRef}>
        {/* <OpeningSlide />
        <TableOfContents />
        <ExecutiveOverview />
        <KeyHighlights />
        <TopInfluencers />
        <InfluencerCards />
        <InfluencerAnalysis /> */}
        {/* ................ */}
        <CoverPage />
        <ExecutiveSummary />
        <ContentAnalysis />
        <TopPerformingPosts />
        <AudienceAnalysis />
        <PostingPatterns />
        <TopInfluencers />
        <InfluencerPostingAnalysis />
        {influencersList?.map((influencer, index) => (
          <InfluencerAnalysis
            key={index}
            influencer={influencer}
            index={index}
          />
        ))}
        <HashtagPerformanceAnalysis />
        <PostingRecommendations />
      </div>
    </>
  );
};

export default LinkedInAuditReport;
