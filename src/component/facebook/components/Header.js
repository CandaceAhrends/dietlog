import React from "react";
import { AppCtx } from "../../../appContext";
import "./header.scss";

const Header = () => {
  const { firstName } = React.useContext(AppCtx);
  return (
    <ul className="header">
      <li>
        <span>
          <h3>
            Good morning, {firstName} <i className="fas fa-info-circle"></i>
          </h3>
        </span>
        <span className="header-sub-text">Saturday, October 16, 2021</span>
      </li>
    </ul>
  );
};

export default Header;
