import HomePostList from "@/components/HomePostList";
import { useState } from "react";

const Index = () => {
  const [postList, setPostList] = useState([
    {
      id: 1,
      title: "🤔看阿里大佬狼叔怎么看待“前端已死论”",
      body: "Veritatis sed aut enim. Et aut est ipsa est voluptas perspiciatis. Quia magnam eveniet voluptatem voluptatem beatae deleniti dolorem. Qui aliquam ratione est non. Ullam sed repudiandae blanditiis omnis et quae itaque.",
    },
    {
      id: 2,
      title: "Quo deserunt corrupti voluptatum temporibus rem.",
      body: "12312312",
    },
    {
      id: 3,
      title: "Excepteur cillum sunt id duis eiusmod pariatur.",
      body: "12312312",
    },
    {
      id: 4,
      title: "Excepteur cillum sunt id duis eiusmod pariatur.",
      body: "12312312",
    },
    {
      id: 5,
      title: "Excepteur cillum sunt id duis eiusmod pariatur.",
      body: "12312312",
    },
    {
      id: 6,
      title: "Excepteur cillum sunt id duis eiusmod pariatur.",
      body: "12312312",
    },
    {
      id: 7,
      title: "Excepteur cillum sunt id duis eiusmod pariatur.",
      body: "12312312",
    },
    {
      id: 8,
      title: "Excepteur cillum sunt id duis eiusmod pariatur.",
      body: "12312312",
    },
    {
      id: 9,
      title: "Excepteur cillum sunt id duis eiusmod pariatur.",
      body: "12312312",
    },
    {
      id: 10,
      title: "Excepteur cillum sunt id duis eiusmod pariatur.",
      body: "12312312",
    },
    {
      id: 11,
      title: "Excepteur cillum sunt id duis eiusmod pariatur.",
      body: "12312312",
    },
    {
      id: 12,
      title: "Excepteur cillum sunt id duis eiusmod pariatur.",
      body: "12312312",
    },
    {
      id: 13,
      title: "Excepteur cillum sunt id duis eiusmod pariatur.",
      body: "12312312",
    },
    {
      id: 14,
      title: "Excepteur cillum sunt id duis eiusmod pariatur.",
      body: "12312312",
    },
    {
      id: 15,
      title: "Excepteur cillum sunt id duis eiusmod pariatur.",
      body: "12312312",
    },
    {
      id: 16,
      title: "Excepteur cillum sunt id duis eiusmod pariatur.",
      body: "12312312",
    },
  ]);

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 100);

  return <HomePostList posts={postList} isLoading={isLoading} />;
};

export default Index;
