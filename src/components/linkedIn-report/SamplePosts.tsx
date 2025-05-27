import { FC, useState } from "react";
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
          {idx !== 0 && <hr className="mb-12 border-b border-primary/20" />}
          <PostNoteBox
            categoryText={category.categoryName}
            noteText={category.note}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {category.posts.map((post) => (
              <LinkedInPostCard
                key={post.id}
                name={clientName}
                title={clientTitle}
                profileImage={clientProfileImage}
                websiteLink={clientWebsite || "#"}
              >
                <div
                  className={twMerge(
                    "text-gray-800 space-y-2 text-sm pt-2 transition-all duration-300 relative",
                    !expandedPosts[post.id] && "line-clamp-[8] overflow-hidden"
                  )}
                >
                  {post.content}
                </div>
                <button
                  onClick={() => toggleExpand(post.id)}
                  className="bg-white text-xs font-semibold text-linkedIn-primary cursor-pointer"
                >
                  {expandedPosts[post.id] ? "Show less" : "Show more..."}
                </button>
              </LinkedInPostCard>
            ))}
          </div>
          {category.whyBox && (
            <div className="my-8">
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
