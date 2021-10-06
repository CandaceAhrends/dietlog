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
      <label for="hamMenu">
        <div class="hamburger close">
          <span class="bar bar1"></span>
          <span class="bar bar2"></span>
          <span class="bar bar3"></span>
        </div>
      </label>
    </div>
  );
};

export default HamMenuIcon;
