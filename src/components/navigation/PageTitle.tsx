import React from "react";

interface PageTitleProps {
  pageName: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ pageName }) => {
  return (
    <div className="flex items-center lg:flex lg:items-center lg:justify-between mb-4">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-center text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {pageName}
        </h2>
      </div>
    </div>
  );
};

export default PageTitle;
