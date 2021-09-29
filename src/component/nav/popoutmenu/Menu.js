import React, { useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./popoutmenu.scss";

const Menu = ({ clickHandler, children }) => {
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <div className={open ? "menu menu-open" : "menu"}>
      <span className="menu-close-icon">
        <CloseIcon onClick={clickHandler}></CloseIcon>
      </span>
      <span className="menu-children">{children}</span>
    </div>
  );
};

export default Menu;
