import React, { useEffect, useRef, useState } from "react";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import { GridService } from "./GridService";

const gridServiceInstance = GridService.getInstance();
export default (props) => {
  const onMenuClicked = () => {
    console.log("props are ", props);
    gridServiceInstance.groupByField("name");
  };

  return (
    <div>
      <div className="customHeaderLabel">{props.displayName}</div>
      <div ref={refButton} onClick={() => onMenuClicked()}>
        <DynamicFeedIcon onClick={(e) => groupBy(e, props)}></DynamicFeedIcon>
      </div>
    </div>
  );
};
