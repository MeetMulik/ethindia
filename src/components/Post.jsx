const Post = ({ report, connectWithReportContract}) => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
      <div
        className="flex items-end justify-end h-56 w-full bg-cover"
        style={{ backgroundImage: `url(${report.image_url})` }}
      >
        <button
          className="p-2 rounded-full bg-white text-black mx-5 -mb-4 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
          aria-label="Like"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <div className="px-5 py-3">
        <h3 className="text-gray-700 uppercase">{report.title}</h3>
        <span className="text-gray-500 mt-2">By {report.userName}</span>
        <p className="text-gray-500 mt-2">{report.report_msg}</p>
        <p className="text-gray-500 mt-2">Location: {report.location}</p>
        <p className="text-gray-500 mt-2">Government Body: {report.governmentBody}</p>
      </div>
    </div>
  );
};

export default Post;
