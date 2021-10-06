import React from "react";
import Menu from "./Menu";
import HamMenuIcon from "../HamMenuIcon";
import { CSSTransition } from "react-transition-group";
import "./popoutmenu.scss";

const MenuContainer = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    //evt.stopPropagation();
    console.log("click menu", open);
    setOpen(!open);
  };
  return (
    <>
      <HamMenuIcon clickHandler={handleClick}></HamMenuIcon>
      {open ? (
        <CSSTransition in={open} classNames="menu-open" appear exit>
          <Menu>
            <p>test child</p>
          </Menu>
        </CSSTransition>
      ) : null}
    </>
  );
};

export default MenuContainer;
