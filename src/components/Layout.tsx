import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { twMerge } from "tailwind-merge";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="max-w-[2500px] m-auto">
      <div className="flex h-screen overflow-hidden relative">
        <aside
          className={twMerge(
            "absolute -left-full md:static md:block transition-all duration-500",
            isSidebarOpen && "block left-0"
          )}
        >
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </aside>

        <div className="flex flex-col flex-1 overflow-hidden">
          <Header
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <main className="flex-1 overflow-auto bg-gray-100 p-4 md:p-10">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
