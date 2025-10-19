import { Routes, Route } from "react-router-dom";
import "./App.css";
import Portfolio from "./Portfolio";
import CommunityProject from "./pages/CommunityProject.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/community-project" element={<CommunityProject />} />
    </Routes>
  );
}

export default App;
