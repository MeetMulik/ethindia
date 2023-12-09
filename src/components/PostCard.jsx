/* eslint-disable react/prop-types */
import Comment from "./Comment";
import { ChevronsDown } from "lucide-react";

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function ReplyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  );
}

const PostCard = ({ report, connectWithReportContract }) => {
  return (
    <div className="w-3/4  bg-white rounded-lg shadow-md overflow-hidden">
      <div>
        <div className="flex items-center space-x-3 p-3 border-b">
          <img
            alt="Profile picture"
            className="w-8 h-8 rounded-full"
            src="https://img.freepik.com/premium-photo/anime-male-avatar_950633-961.jpg"
          />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="font-semibold text-sm">{report.userName}</span>
              <span className="text-xs text-gray-500 mt-1">
                {report.location}
              </span>
            </div>
            <span className="ml-auto text-xs text-gray-500">a day ago</span>
          </div>
        </div>
      </div>
      <div>
        <p className="px-4 py-2 text-sm">{report.report_msg}</p>
        <img
          alt="Post content"
          className="w-full object-fill"
          height="200"
          src={
            report.image_url.length > 0
              ? `${report.image_url}`
              : "https://images.unsplash.com/photo-1701893852514-e079530f6bb8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          style={{
            aspectRatio: "745/200",
            objectFit: "cover",
          }}
          width="745"
        />
      </div>
      <div className="flex items-center justify-between p-4 border-t">
        <div className="flex items-center space-x-2">
          <HeartIcon className="text-gray-500" />
          <span className="text-sm">0 Likes</span>
        </div>
        <div className="flex items-center space-x-2">
          <ReplyIcon className="text-gray-500" />
          <span className="text-sm">Comments</span>
        </div>
      </div>
      {/* <div className="flex items-center justify-center bg-gray-900">
        <h2 className="text-lg lg:text-2xl font-bold text-white ">
          Discussion
        </h2>
        <span className=" text-white">
          <ChevronsDown />
        </span>
      </div> */}
      {/* <Comment /> */}
    </div>
  );
};

export default PostCard;
