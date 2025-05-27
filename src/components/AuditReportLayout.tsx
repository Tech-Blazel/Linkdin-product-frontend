import React from "react";
import { Outlet } from "react-router-dom";

const AuditReportLayout: React.FC = () => {
  return (
    <div className="max-w-[2500px] m-auto">
      <div className="flex h-screen overflow-hidden relative">
        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="flex-1 overflow-auto bg-gray-100 p-4 md:p-15">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AuditReportLayout;
