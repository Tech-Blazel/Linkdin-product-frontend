import { FC, ReactNode } from "react";
import { IoMdAdd } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiLike, BiRepost } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

interface LinkedInPostCardProps {
  name: string;
  title: string;
  profileImage: string;
  websiteLink?: string;
  children: ReactNode;
}

const LinkedInPostCard: FC<LinkedInPostCardProps> = ({
  name,
  title,
  profileImage,
  websiteLink,
  children,
}) => {
  return (
    <div className="space-y-4">
      <div className="border rounded-xl shadow-sm p-4 text-sm space-y-2">
        <div className="flex gap-3">
          <img
            src={profileImage}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="w-full">
            <div className="flex wrap items-center justify-between">
              <p className="font-semibold text-gray-800">{name}</p>
              <div className="text-sm text-linkedIn-primary flex items-center gap-1 cursor-pointer">
                <IoMdAdd className="inline-block" /> Follow
                <HiDotsHorizontal className="inline-block text-gray-800 ml-3" />
              </div>
            </div>
            <p className="text-xs text-gray-500 line-clamp-1 p-[3px]">
              {title}
            </p>
            {websiteLink && (
              <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs mt-1 font-semibold text-linkedIn-primary"
              >
                Visit my website
              </a>
            )}
          </div>
        </div>

        <div className="text-gray-800 space-y-2 text-sm pt-2">{children}</div>

        <div className="border-t pt-2 flex justify-between text-xs font-bold text-gray-500">
          <span className="flex flex-col md:flex-row gap-1 justify-center items-center">
            <BiLike className="text-sm rotate-y-180" /> Like
          </span>
          <span className="flex flex-col md:flex-row gap-1 justify-center items-center">
            <FaRegCommentDots className="text-lg" /> Comment
          </span>
          <span className="flex flex-col md:flex-row gap-1 justify-center items-center">
            <BiRepost className="text-lg" /> Repost
          </span>
          <span className="flex flex-col md:flex-row gap-1 justify-center items-center">
            <IoIosSend className="text-lg" /> Send
          </span>
        </div>
      </div>
    </div>
  );
};

export default LinkedInPostCard;
