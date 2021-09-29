import React from "react";
import { StoreContext } from "../AppContext";
import { LOGOUT_ACTION } from "../actions";

import "./header.scss";

const Header = () => {
  const [state, dispatch] = React.useContext(StoreContext);

  const logout = () => {
    dispatch({
      ...LOGOUT_ACTION,
      payload: {},
    });
  };
  return (
    <ul className="header">
      <li>Diet Log</li>
      <li>
        {state.isAuthenticated ? <span onClick={logout}>Sign out</span> : null}
      </li>
    </ul>
  );
};

export default Header;
