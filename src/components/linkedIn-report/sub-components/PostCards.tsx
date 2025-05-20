import { FaThumbsUp } from "react-icons/fa";
import { FaComment } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

type Post = {
  type: string;
  linkText: string;
  linkUrl: string;
  likes: number;
  comments: number;
  shares: number;
  snippet: string;
};

const PostCards: FC = () => {
  const { topPerformingPosts } = useSelector(
    (state: RootState) => state.auditReportSchema.contentAnalysis
  );
  // const posts: Post[] = [
  //   {
  //     type: "Article",
  //     linkText: "$265M Fund Announcement",
  //     linkUrl: "#",
  //     likes: 667,
  //     comments: 172,
  //     shares: 2,
  //     snippet:
  //       "Excited to continue to fund the best B2B software entrepreneurs...",
  //   },
  //   {
  //     type: "Article",
  //     linkText: "Shashank Saxena Announcement",
  //     linkUrl: "#",
  //     likes: 324,
  //     comments: 19,
  //     shares: 2,
  //     snippet:
  //       "Very excited to have Shashank Saxena join us at SIERRA Ventures...",
  //   },
  //   {
  //     type: "Image",
  //     linkText: "Thomas Kurian Keynote",
  //     linkUrl: "#",
  //     likes: 517,
  //     comments: 6,
  //     shares: 3,
  //     snippet: "Insightful keynote with Thomas kurian, CEO of Google Cloud...",
  //   },
  // ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {topPerformingPosts?.map((post: any, i: number) => (
        <div
          key={i}
          className="bg-primary-light/40 border-2 border-primary/20 rounded-lg p-4 space-y-2"
        >
          <p className="text-primary text-xl md:text-2xl font-bold mb-4">
            {post.type}
          </p>
          <p className="text-lg text-text-primary">
            <span className="font-semibold text-text-primary">Post Link: </span>
            <a
              href={post.link}
              target="_blank"
              className="text-primary underline hover:text-primary/80 line-clamp-1 pb-1"
            >
              {post.link}
            </a>
          </p>

          <div className="flex flex-wrap items-center gap-5 text-lg text-primary mt-1">
            <span className="flex items-center">
              <FaThumbsUp /> <span className="ml-2 mr-4">Likes</span>{" "}
              <span className="text-[#333333]">{post.likes}</span>
            </span>
            <span className="flex items-center">
              <FaComment /> <span className="ml-2 mr-4">Comments</span>{" "}
              <span className="text-[#333333]">{post.comments}</span>
            </span>
            <span className="flex items-center">
              <IoIosShareAlt /> <span className="ml-2 mr-4">Shares</span>{" "}
              <span className="text-[#333333]">{post.shares}</span>
            </span>
          </div>

          <p className="text-text-primary text-lg line-clamp-2 pb-1">
            {post.snippet}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PostCards;
