import React from "react";
import "./iconimage.scss";

const IconImage = ({ imageSource }) => {
  return <img className="icon-image" src={imageSource}></img>;
};

export default IconImage;
