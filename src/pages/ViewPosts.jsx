import { LogInWithAnonAadhaar, useAnonAadhaar } from "anon-aadhaar-react";
import { useEffect } from "react";

const ViewPosts = () => {
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
  }, [anonAadhaar]);

  return (
    <div>
      <LogInWithAnonAadhaar />
      <p>{anonAadhaar?.status}</p>
    </div>
  );
};

export default ViewPosts;
