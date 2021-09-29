import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

import "./popoutmenu.scss";

const HamburgerTogle = ({ clickHandler }) => {
  return (
    <>
      <MenuIcon onClick={clickHandler} className="menu-icon"></MenuIcon>
    </>
  );
};

export default HamburgerTogle;
