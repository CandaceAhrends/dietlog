import React from "react";
import dummyImage from "../../../images/dummyImage.png";
import "./imagecard.scss";

const ImageCard = ({ children /*image could be passed*/ }) => {
  return (
    <ul className="card">
      <li>
        <img
          style={{ width: "436px", height: "220px" }}
          src={dummyImage} // this would come from the api resonse but I don't have real links
          alt="dummyImage"
        />
      </li>

      <li>{children}</li>
    </ul>
  );
};

export default ImageCard;
