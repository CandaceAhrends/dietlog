import React from "react";
import Menu from "./Menu";
import HamMenuIcon from "../../effects/HamMenuIcon";
import ActionsList from "./ActionsList";
import { CSSTransition } from "react-transition-group";

const MenuContainer = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    //evt.stopPropagation();
    console.log("click menu", open);
    setOpen(!open);
  };
  const handleMenuClick = () => setOpen(false);
  return (
    <>
      <HamMenuIcon clickHandler={handleClick}></HamMenuIcon>
      {open ? (
        <CSSTransition
          in={open}
          timeout={100}
          classNames="menu-open"
          appear
          exit
        >
          <Menu
            render={() => (
              <ActionsList clickHandler={handleMenuClick}></ActionsList>
            )}
          ></Menu>
        </CSSTransition>
      ) : null}
    </>
  );
};

export default MenuContainer;
