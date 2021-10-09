import React from "react";
import "./hammenuicon.scss";

const HamMenuIcon = ({ clickHandler }) => {
  return (
    <div>
      <input
        type="checkbox"
        id="hamMenu"
        className="ham-menu"
        onClick={clickHandler}
      ></input>
      <label htmlFor="hamMenu">
        <div className="hamburger close">
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
        </div>
      </label>
    </div>
  );
};

export default HamMenuIcon;
