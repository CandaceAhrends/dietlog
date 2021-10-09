import React, { useEffect } from "react";

import "./menu.scss";

const Menu = ({ render }) => {
  return (
    <nav className="menu">
      <span className="menu-children">{render()}</span>
    </nav>
  );
};

export default Menu;
