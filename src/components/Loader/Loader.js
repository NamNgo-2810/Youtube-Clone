import React from "react";
import { CircularProgress } from "@material-ui/core";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="box_loader">
      <CircularProgress size="50px" />
    </div>
  );
};

export default Loader;
