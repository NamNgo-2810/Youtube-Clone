import { MenuItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";

const SidebarRow = ({ text, icon }) => {
  return (
    <MenuItem>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{text}</ListItemText>
    </MenuItem>
  );
};

export default SidebarRow;
