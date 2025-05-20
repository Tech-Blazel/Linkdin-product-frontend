import { headerType } from "@/utils/constants";
import { useLocation } from "react-router";
import SidebarToggler from "./SidebarToggler";

const Header = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}) => {
  const location = useLocation();

  const getHeaderTitle = () => {
    return headerType[location.pathname];
  };

  return (
    <header className="flex items-center justify-between bg-white p-6 shadow-sm">
      <SidebarToggler
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="items-center space-x-2 hidden md:block">
        <h1 className="text-lg font-bold text-black">{getHeaderTitle()}</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
            AS
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-base font-medium text-gray-900">
                Akash Sharma
              </span>
              <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-white">
                Admin
              </span>
            </div>
            <span className="text-sm text-gray-600">
              akash.rdec18@gmail.com
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
