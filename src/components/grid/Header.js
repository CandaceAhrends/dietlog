import React, { useEffect, useRef, useState } from "react";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import { GridService } from "./GridService";

const gridServiceInstance = GridService.getInstance();

const Header = (props) => {
  const groupBy = () => {
    console.log("props are ", props);
    gridServiceInstance.groupByFields(["name", "calories"]);
  };

  return (
    <div>
      <div className="customHeaderLabel">{props.displayName}</div>
      <div onClick={() => groupBy()}>
        <DynamicFeedIcon></DynamicFeedIcon>
      </div>
    </div>
  );
};

export default Header;
