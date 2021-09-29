import React from "react";
import Login from "../component/login/Login";
import { useLoginPage } from "../hooks/useLoginPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { StoreContext, Auth } from "../AppContext";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

import Dashboard from "../component/dashboard/Dashboard";
import "./contentArea.scss";
function RouteGuard({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        Auth.getToken() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
const LogoutListener = () => {
  useLoginPage();
  return null;
};
const ContentArea = () => {
  return (
    <main>
      <Router history={history}>
        <Route path="*">
          <LogoutListener></LogoutListener>
        </Route>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>

          <RouteGuard path="/">
            <Dashboard></Dashboard>
          </RouteGuard>
        </Switch>
      </Router>
    </main>
  );
};

export default ContentArea;
