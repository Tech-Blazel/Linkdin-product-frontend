import { FiUser } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import logoImage from "../assets/images/logo.png";
import { useLocation, useNavigate } from "react-router";
import { twMerge } from "tailwind-merge";
import { SidebarItem } from "@/utils/constants";
import { GrUserAdmin } from "react-icons/gr";
import { GoPeople } from "react-icons/go";
import SidebarToggler from "./SidebarToggler";
import { Button } from "./ui/button";
import { TbReportSearch } from "react-icons/tb";
import { MdCategory } from "react-icons/md";
import { FiUploadCloud } from "react-icons/fi";

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarItems: SidebarItem[] = [
    {
      icon: <MdOutlineDashboard className="text-xl" />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <FiUser className="text-xl" />,
      label: "User Management",
      path: "/user-management",
    },
    {
      icon: <GrUserAdmin className="text-xl" />,
      label: "Admin Profile",
      path: "/admin-profile",
    },
    {
      icon: <GoPeople className="text-xl" />,
      label: "Clients",
      path: "/clients",
    },
    {
      icon: <TbReportSearch className="text-xl" />,
      label: "LinkedIn Audit Report",
      path: "/linkedin-audit-report",
    },
    {
      icon: <MdCategory className="text-xl" />,
      label: "Category Management",
      path: "/category-management",
    },
    {
      icon: <FiUploadCloud className="text-xl" />,
      label: "Upload Data",
      path: "/upload-data",
    },
  ];

  const handleMenuClick = (item: { label: string; path: string }) => {
    navigate(item.path);
  };

  return (
    <div
      className={twMerge(
        "flex h-screen w-70 flex-col relative z-1000 items-center bg-white py-4 shadow-lg p-4 max-h-dvh"
      )}
    >
      <div className="w-full flex flex-row md:flex-col justify-between items-center gap-4">
        <img
          src={logoImage}
          alt="Blazel Logo"
          className="w-[160px] h-[70px] object-contain"
        />
        <SidebarToggler
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      <div className="flex flex-col items-center gap-4 w-full mt-10">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <div
              key={item.label}
              className={twMerge(
                "rounded-lg w-full p-3 cursor-pointer",
                isActive
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              )}
              onClick={() => handleMenuClick(item)}
            >
              <p className="flex items-center gap-2">
                {item.icon} {item.label}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center mt-auto w-full">
        <Button
          variant="outline"
          className="w-full rounded-md border border-primary text-primary cursor-pointer hover:border-primary-hover"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
