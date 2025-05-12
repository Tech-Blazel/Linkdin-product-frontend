import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { twMerge } from "tailwind-merge";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  return (
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
        <main className="flex-1 overflow-auto bg-gray-100 p-6 md:p-10">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
