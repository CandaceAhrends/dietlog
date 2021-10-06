import React, { useEffect } from "react";

import "./popoutmenu.scss";

const Menu = ({ children }) => {
  return (
    <div className="menu">
      <span className="menu-children">{children}</span>
    </div>
  );
};

export default Menu;
