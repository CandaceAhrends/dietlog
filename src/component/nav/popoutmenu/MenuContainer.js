import React from "react";
import Menu from "./Menu";
import HamburgerTogle from "./HamburgerToggle";
import "./popoutmenu.scss";

const MenuContainer = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {open ? (
        <Menu clickHandler={() => setOpen(false)}>
          <p>test child</p>
        </Menu>
      ) : (
        <HamburgerTogle clickHandler={() => setOpen(true)}></HamburgerTogle>
      )}
    </>
  );
};

export default MenuContainer;
