import React from "react";
import { twMerge } from "tailwind-merge";

const SidebarToggler = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}) => {
  return (
    <div className="md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-menu md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <line
          x1="3"
          y1="6"
          x2="21"
          y2="6"
          className={twMerge(
            "transition origin-left",
            isSidebarOpen && "rotate-45 -translate-y-1"
          )}
        ></line>
        <line
          x1="3"
          y1="12"
          x2="21"
          y2="12"
          className={twMerge("transition", isSidebarOpen && "opacity-0")}
        ></line>
        <line
          x1="3"
          y1="18"
          x2="21"
          y2="18"
          className={twMerge(
            "transition origin-left",
            isSidebarOpen && "-rotate-45 translate-y-1"
          )}
        ></line>
      </svg>
    </div>
  );
};

export default SidebarToggler;
