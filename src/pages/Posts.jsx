import { useEffect, useState } from "react";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import { connectWithReportContract } from "../api/index";

const Posts = () => {
  const [reports, setReports] = useState([]);
  const fetchReports = async () => {
    const contract = await connectWithReportContract();
    const reports = await contract.getReports();
    setReports([...reports].reverse());
    console.log(reports);
  }

  useEffect(() => {
    fetchReports();
  }, []);
    
  return (
    <div className="flex">
      <Sidebar />
      <div className="scroll-smooth flex items-center justify-center w-full flex-col">
        {reports.length > 0 ? (
          reports.map((report) => (
            <Post
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
