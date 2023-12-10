import { LogInWithAnonAadhaar, useAnonAadhaar } from "anon-aadhaar-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ViewPosts = () => {
  const [anonAadhaar] = useAnonAadhaar();
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
    if(anonAadhaar.status === "logged-out") {
      console.log("User logged out");
      navigate('/view');
    }
  }, [anonAadhaar]);

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <LogInWithAnonAadhaar />
      <p>{anonAadhaar?.status}</p>
    </div>
  );
};

export default ViewPosts;
