import React from "react";
import "./infolabel.scss";

const DataLabel = () => {
  const information = [
    { id: 1, label: "Label", info: "This is the information" },
  ];
  return (
    <div className="info-label">
      {information.map((info) => (
        <>
          {children}
          <span>{info.info}</span>
        </>
      ))}
    </div>
  );
};

export default DataLabel;
