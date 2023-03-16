import { useRouter } from "next/router";
import React from "react";

const HomePostItem = ({ post }) => {
  const router = useRouter();

  const handleClickTitle = () => {
    router.push("/post");
  };
  return (
    <div className="border-b border-dashed border-gray-200 p-4 last:border-none">
      <div className="">
        <div
          className="mb-2 cursor-pointer text-lg font-bold text-gray-600 hover:text-primary"
          onClick={handleClickTitle}
        >
          {post.title}
        </div>
        <div className="text-xs text-gray-400">
          <span className="cursor-pointer after:mx-2 after:content-['•'] hover:text-primary after:hover:text-gray-400">
            #前端
          </span>
          <span className="">2022-10-20</span>
        </div>
      </div>
    </div>
  );
};

export default HomePostItem;
