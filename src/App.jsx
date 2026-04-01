import React from "react";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
