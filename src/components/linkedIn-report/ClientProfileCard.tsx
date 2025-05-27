import React from "react";
// import { useNavigate } from "react-router-dom";
import ProfileAvatar from "@/assets/images/profile-avatar.png";
import Bill from "@/assets/images/Bill.png";
import SmartImage from "../SmartImage";
// import { Button } from "../ui/button";
import { toSlugName } from "@/utils/constants";

interface ClientProfileCardProps {
  name: string;
  title: string;
  profilePictureUrl?: string;
}

const ClientProfileCard: React.FC<ClientProfileCardProps> = ({
  name,
  title,
  profilePictureUrl,
}) => {
  // const navigate = useNavigate();
  const displayImage = name === "Bill Douglas" ? Bill : profilePictureUrl || "";

  // const handleAuditReportClick = () => {
  //   const slugName = toSlugName(name);
  //   navigate(`/linkedin-audit-report/${slugName}`);
  // };

  console.log("window.location.origin", window.location.origin);

  return (
    <div className="w-full bg-primary-light border-2 border-primary/20 rounded-xl p-4 sm:p-6 flex flex-col items-center mx-auto ">
      <SmartImage
        src={displayImage}
        alt={name}
        fallbackSrc={ProfileAvatar}
        className="w-20 h-20 sm:w-28 sm:h-28 bg-white rounded-full object-cover shadow-md mb-3"
      />
      <div className="min-h-[120px]">
        <p className="text-primary font-bold text-xl sm:text-2xl text-center">
          {name}
        </p>
        <p className="text-sm sm:text-base text-text-primary font-normal text-center mt-1 line-clamp-3">
          {title}
        </p>
      </div>
      {/* <Button
        onClick={handleAuditReportClick}
        className="bg-primary hover:bg-primary text-xs md:text-sm px-5 py-2 rounded-md text-white mt-4 cursor-pointer transition-all duration-150 ease-in-out transform hover:scale-105 active:scale-95 active:translate-y-[1px]"
      >
        View Audit Report
      </Button> */}
      <a
        href={`${window.location.origin}/linkedin-audit-report/${toSlugName(
          name
        )}`}
        target="_blank"
        className="bg-primary hover:bg-primary text-xs md:text-sm px-5 py-2 rounded-md text-white mt-4 cursor-pointer transition-all duration-150 ease-in-out transform hover:scale-105 active:scale-95 active:translate-y-[1px]"
      >
        View Audit Report
      </a>
    </div>
  );
};

export default ClientProfileCard;
