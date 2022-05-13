import { Divider } from "@material-ui/core";
import React, { useState } from "react";
import Categories from "../Categories/Categories";
import MiniSidebar from "../MiniSidebar/MiniSidebar";
import Navbar from "../Navbar/Navbar";
import RecommendedVideos from "../RecommendedVideos/RecommendedVideos";
import Sidebar from "../Sidebar/Sidebar";

import "./Home.css";

const Home = () => {
  const [isFullSideBar, setIsFullSideBar] = useState(false); //mini, full
  const [search, setSearch] = useState(null);

  document.title = "Itube";

  return (
    <div>
      <Navbar
        showSidebar={() => {
          setIsFullSideBar((prev) => !prev);
        }}
        setSearch={setSearch}
      />
      <div className="body">
        {isFullSideBar ? <Sidebar /> : <MiniSidebar />}
        <Divider />
        <div>
          <Categories setSearch={setSearch} />
          <Divider />
          <RecommendedVideos search={search} />
        </div>
      </div>
    </div>
  );
};

export default Home;
