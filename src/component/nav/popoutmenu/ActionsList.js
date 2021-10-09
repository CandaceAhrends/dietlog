import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faPlus } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import "./actionslist.scss";
library.add(faUser);
library.add(faPlus);
const ActionsList = ({ clickHandler }) => {
  return (
    <CSSTransition
      in={open}
      timeout={100}
      classNames="actions-list"
      appear
      exit
    >
      <ul className="actions-list" onClick={clickHandler}>
        <li>
          <FontAwesomeIcon icon="plus" />
          <span>
            <Link to="/addfood">Add Food</Link>
          </span>
        </li>
        <li>
          <FontAwesomeIcon icon="user" />
          <span>test two</span>
        </li>
      </ul>
    </CSSTransition>
  );
};

export default ActionsList;
