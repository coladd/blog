import React from "react";
import HomePostItem from "../HomePostItem";
import Skeleton from "../Skeleton";

const HomePostList = ({ isLoading, posts }) => {
  if (isLoading) {
    return (
      <div>
        {Array.from({ length: 12 }, (_, index) => (
          <Skeleton key={index} className="mb-4" />
        ))}
      </div>
    );
  }

  return (
    <div className="w-auto">
      {posts.map((post) => (
        <HomePostItem key={post.id} post={post} />
      ))}
    </div>
  );
};
export default HomePostList;
