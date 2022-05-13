import { Divider, MenuList } from "@material-ui/core";
import {
  AccessTime,
  EmojiEvents,
  Explore,
  History,
  Home,
  LibraryMusic,
  SportsEsports,
  Subscriptions,
  ThumbUpAlt,
  Feedback,
  SportsEsportsOutlined,
  ViewStreamOutlined,
  EmojiEventsOutlined,
  SettingsOutlined,
  OutlinedFlag,
  HelpOutlined,
  VideoLibraryOutlined,
} from "@material-ui/icons";
import React from "react";
import SidebarRow from "../SidebarRow/SidebarRow";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <MenuList>
        <SidebarRow text="Home" icon={<Home />} />
        <SidebarRow text="Explore" icon={<Explore />} />
        <SidebarRow text="Subscriptions" icon={<Subscriptions />} />
        <Divider />
        <SidebarRow text="Library" icon={<VideoLibraryOutlined />} />
        <SidebarRow text="History" icon={<History />} />
        <SidebarRow text="Watch later" icon={<AccessTime />} />
        <SidebarRow text="Liked videos" icon={<ThumbUpAlt />} />
        <Divider />
        <h4>Subscriptions</h4>
        <SidebarRow text="Music" icon={<LibraryMusic />} />
        <SidebarRow text="Sport" icon={<EmojiEvents />} />
        <SidebarRow text="Game" icon={<SportsEsports />} />
        <SidebarRow text="News" icon={<Feedback />} />
        <Divider />
        <h4>Other services</h4>
        <SidebarRow text="Game" icon={<SportsEsportsOutlined />} />
        <SidebarRow text="Live Events" icon={<ViewStreamOutlined />} />
        <SidebarRow text="Sport" icon={<EmojiEventsOutlined />} />
        <Divider />
        <SidebarRow text="Settings" icon={<SettingsOutlined />} />
        <SidebarRow text="Report History" icon={<OutlinedFlag />} />
        <SidebarRow text="Help" icon={<HelpOutlined />} />
        <SidebarRow text="Feedback" icon={<Feedback />} />
      </MenuList>
    </div>
  );
};

export default Sidebar;
