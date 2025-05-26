import React from "react";

const GlobalLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black opacity-70 flex items-center justify-center">
      <div className="flex items-center gap-4 text-white text-lg font-medium">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <span>Please wait...</span>
      </div>
    </div>
  );
};

export default GlobalLoader;
