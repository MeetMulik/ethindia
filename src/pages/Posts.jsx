import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { connectWithReportContract } from "../api/index";
import PostCard from "../components/PostCard";

const Posts = () => {
  const [reports, setReports] = useState([]);
  const fetchReports = async () => {
    const contract = await connectWithReportContract();
    const reports = await contract.getReports();
    setReports([...reports].reverse());
    console.log(reports);
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div className="flex bg-gray-500">
      <Sidebar />
      <div className="scroll-smooth flex items-center justify-center w-full flex-col space-y-5 mt-3 mb-4">
        {reports.length > 0 ? (
          reports.map((report, idx) => (
            <PostCard
              key={idx}
              report={report}
              connectWithReportContract={connectWithReportContract}
            />
          ))
        ) : (
          <>
            <h1 className="text-2xl text-gray-400 mt-8">No Report</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Posts;
