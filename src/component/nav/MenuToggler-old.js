import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SidePopout from "../SidePopout";
import CloseIcon from "@material-ui/icons/Close";
import "./menutoggler.scss";

const MenuToggler = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <span>
        {open ? (
          <CloseIcon onClick={() => setOpen(false)}></CloseIcon>
        ) : (
          <MenuIcon
            onClick={() => setOpen(true)}
            className="menu-icon"
          ></MenuIcon>
        )}
      </span>
      <SidePopout show={open}></SidePopout>
    </>
  );
};

export default MenuToggler;
