import Post from "../components/Post";
import Sidebar from "../components/Sidebar";

const Posts = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="scroll-smooth flex items-center justify-center w-full flex-col">
        <Post />
      </div>
    </div>
  );
};

export default Posts;
