import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuContainer from "./popoutmenu/MenuContainer";
import "./menu.scss";

const Nav = () => {
  const matches = useMediaQuery("(min-width:800px)");

  return (
    <div className="nav">
      {matches ? <p>test</p> : <MenuContainer></MenuContainer>}
    </div>
  );
};

export default Nav;
