import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuContainer from "./popoutmenu/MenuContainer";
import "./nav.scss";

const Nav = () => {
  const matches = useMediaQuery("(min-width:1500px)");

  return (
    <div className="nav">
      {matches ? <p>not implemented</p> : <MenuContainer></MenuContainer>}
    </div>
  );
};

export default Nav;
