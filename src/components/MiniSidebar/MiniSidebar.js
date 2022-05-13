import {
  Home,
  Explore,
  Subscriptions,
  VideoLibraryOutlined,
} from "@material-ui/icons";
import React from "react";
import "./MiniSidebar.css";

const MiniSidebar = () => {
  return (
    <div className="mini_sidebar">
      <div className="mini_sidebar_row">
        <div>
          <Home className="icon" />
          <p>Home</p>
        </div>
      </div>
      <div className="mini_sidebar_row">
        <div>
          <Explore className="icon" />
          <p>Explore</p>
        </div>
      </div>
      <div className="mini_sidebar_row">
        <div>
          <Subscriptions className="icon" />
          <p>Subscriptions</p>
        </div>
      </div>
      <div className="mini_sidebar_row">
        <div>
          <VideoLibraryOutlined className="icon" />
          <p>Library</p>
        </div>
      </div>
    </div>
  );
};

export default MiniSidebar;
