import { FC, useLayoutEffect, useRef, useState } from "react";
import ReportCard from "./sub-components/ReportCard";
import { FaChartLine } from "react-icons/fa";
import PostNoteBox from "./sub-components/PostNoteBox";
import LinkedInPostCard from "./sub-components/LinkedInPostCard";
import WhyBox from "./sub-components/WhyBox";
import { twMerge } from "tailwind-merge";

export interface Post {
  id: string;
  content: any;
}

export interface Category {
  categoryName: string;
  note: string;
  posts: Post[];
  whyBox?: {
    heading: string;
    summary?: string;
    points: string[];
  };
}

interface SamplePostsProps {
  title: string;
  icon?: any;
  clientName: string;
  clientTitle: string;
  clientProfileImage?: string | any;
  clientWebsite?: string;
  categories: Category[];
}

const SamplePosts: FC<SamplePostsProps> = ({
  title,
  icon = FaChartLine,
  clientName,
  clientTitle,
  clientProfileImage,
  clientWebsite,
  categories,
}) => {
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
    <ReportCard title={title} icon={icon}>
      {categories.map((category, idx) => (
        <div key={category.categoryName + idx}>
          {idx !== 0 && <hr className="my-12 border-b border-primary/20" />}
          <PostNoteBox
            categoryText={category.categoryName}
            noteText={category.note}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {category.posts.map((post) => {
              const contentRef = useRef<HTMLDivElement>(null);
              const [showToggle, setShowToggle] = useState(false);

              useLayoutEffect(() => {
                const el = contentRef.current;
                if (el) {
                  const isClamped = el.scrollHeight > el.clientHeight + 1;
                  setShowToggle(isClamped);
                }
              }, [post.content]);

              return (
                <LinkedInPostCard
                  key={post.id}
                  name={clientName}
                  title={clientTitle}
                  profileImage={clientProfileImage}
                  websiteLink={clientWebsite || "#"}
                >
                  <div className="flex flex-col justify-between h-full">
                    <div
                      ref={contentRef}
                      className={twMerge(
                        "text-sm text-gray-800 space-y-2 pt-2 transition-all duration-300",
                        !expandedPosts[post.id] && "line-clamp-[9]"
                      )}
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: !expandedPosts[post.id] ? 9 : "unset",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.content}
                    </div>

                    {showToggle && (
                      <div className="pt-2 mt-auto">
                        <button
                          onClick={() => toggleExpand(post.id)}
                          className="text-xs font-semibold text-linkedIn-primary cursor-pointer"
                        >
                          {expandedPosts[post.id]
                            ? "Show less"
                            : "Show more..."}
                        </button>
                      </div>
                    )}
                  </div>
                </LinkedInPostCard>
              );
            })}
          </div>
          {category.whyBox && (
            <div className="mt-8">
              <WhyBox
                heading={category.whyBox.heading}
                summary={category.whyBox.summary}
                points={category.whyBox.points}
              />
            </div>
          )}
        </div>
      ))}
    </ReportCard>
  );
};

export default SamplePosts;
