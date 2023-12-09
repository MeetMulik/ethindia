import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";

import LandingPage from "./pages/LandingPage";
import AddReport from "./pages/AddReport";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <LandingPage />
            </Layout>
          }
        />
        <Route
          path="/addreport"
          element={
            <Layout>
              <AddReport />
            </Layout>
          }
        />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
};

export default App;
