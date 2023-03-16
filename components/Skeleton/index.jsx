import React from "react";
// import classNameNames from "classNamenames";

const Skeleton = () => {
  // const classNamees = classNameNames(
  //   "bg-gray-200",
  //   "h-20",
  //   "animate-pulse",
  //   "border-b",
  //   "border-dashed",
  //   "last:border-none"
  // );

  // return <div classNameName={classNamees}></div>;
  return (
    <div className="animate-pulse space-y-4 divide-y divide-gray-200 rounded border-b border-dashed border-gray-200 p-4  md:p-6">
      <div className="flex  items-center justify-between">
        <div>
          <div className="mb-3 h-3 w-80 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-3 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
