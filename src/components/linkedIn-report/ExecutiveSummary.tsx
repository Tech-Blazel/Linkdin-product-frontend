import { FC } from "react";
import { FaStar, FaChartBar } from "react-icons/fa";
import ReportCard from "./sub-components/ReportCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { isEmpty } from "lodash";

const ExecutiveSummary: FC = () => {
  const {
    averageLikesPerPost,
    averageCommentsForPost,
    // hashtagImpactEngagement,
    topContentLikes,
    keyHighlights,
    summaryText,
  } = useSelector(
    (state: RootState) => state.auditReportSchema.executiveSummary
  );

  const card = [
    {
      label: "Average Likes",
      value: averageLikesPerPost || "NAN",
      sub: "per post",
    },
    {
      label: "Average Comments",
      value: `${averageCommentsForPost?.value || "NAN"}`,
      sub: "about industry average",
    },
    {
      label: "Top Content",
      value: topContentLikes?.value || "NAN",
      sub: topContentLikes?.contentType || "NAN",
    },
    // {
    //   label: "Hashtag Impact",
    //   value: hashtagImpactEngagement || "NAN",
    //   sub: "engagement with hashtags",
    // },
  ];

  // const highlightImportant = (text: string) => {
  //   return text.split(/(\d+%?|\#\w+)/g).map((part, i) => {
  //     if (/^\d+%?$/.test(part)) {
  //       return (
  //         <span key={i} className="text-primary font-semibold">
  //           {part}
  //         </span>
  //       );
  //     }
  //     if (/^#\w+/.test(part)) {
  //       return (
  //         <span key={i} className="text-primary font-semibold">
  //           {part}
  //         </span>
  //       );
  //     }
  //     return <span key={i}>{part}</span>;
  //   });
  // };

  return (
    <ReportCard title="Executive Summary" icon={FaChartBar}>
      <div className="space-y-7">
        {!isEmpty(card) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {card.map((item, i) => (
              <div
                key={i}
                className="bg-primary text-white rounded-lg p-4 text-center shadow-sm"
              >
                <p className="text-lg font-medium mb-1">{item.label}</p>
                <p className="text-4xl font-bold">{item.value}</p>
                <p className="text-lg font-medium mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        )}

        {!isEmpty(keyHighlights) && (
          <div className="bg-primary-light/40 border-l-7 border-primary rounded-lg p-4 space-y-3">
            <h3 className="text-primary text-xl md:text-2xl font-bold mb-4">
              Key Highlights:
            </h3>
            <ul className="list-none space-y-2 text-lg text-text-primary">
              {keyHighlights.map((item, index) => {
                // const [label, ...rest] = item.split(":");
                // const restOfText = rest.join(":").trim();
                return (
                  // <li key={index}>
                  // <strong>
                  //   <FaStar className="text-primary inline-block mr-2" />{" "}
                  //   {label}:{" "}
                  // </strong>
                  //   {highlightImportant(restOfText)}
                  // </li>
                  <li key={index}>
                    <strong>
                      <FaStar className="text-primary inline-block mr-2" />{" "}
                    </strong>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {!isEmpty(summaryText) && (
          <>
            <p className="text-lg text-text-primary">{summaryText}</p>
          </>
        )}
      </div>
    </ReportCard>
  );
};

export default ExecutiveSummary;
