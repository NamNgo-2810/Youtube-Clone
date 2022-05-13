import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Navbar.css";

const Navbar = ({ showSidebar, setSearch }) => {
  const { register, handleSubmit } = useForm();

  const onSearch = (e) => {
    setSearch(e.keyword);
  };

  return (
    <div className="header">
      <div className="header_left" onClick={() => setSearch(null)}>
        <MenuIcon onClick={showSidebar} />
        <Link to="/">
          <img
            className="header_logo"
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
          />
        </Link>
      </div>
      <div className="header_input">
        <input
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSubmit(onSearch)();
            }
          }}
          {...register("keyword")}
          placeholder="Search"
          type="text"
        />
        <SearchIcon
          className="header_inputButton"
          onClick={handleSubmit(onSearch)}
        />
      </div>
      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default Navbar;
