import Post from "../components/Post";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";

const Posts = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="scroll-smooth flex items-center flex-col w-full space-y-3 mt-2">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default Posts;
