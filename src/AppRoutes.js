import React from "react";
import Login from "./component/login/Login";
import { useLoginPage } from "./hooks/useLoginPage";
import FoodForm from "./component/addfood/FoodForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./component/Header";
import { StoreContext, Auth } from "./AppContext";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

import Dashboard from "./component/dashboard/Dashboard";

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
const AppRoutes = () => {
  return (
    <Router history={history}>
      <Header></Header>
      <main className="content-area">
        <Route path="/*">
          <LogoutListener></LogoutListener>
        </Route>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addfood">
            <FoodForm></FoodForm>
          </Route>
          <RouteGuard path="/">
            <Dashboard></Dashboard>
          </RouteGuard>
        </Switch>
      </main>
    </Router>
  );
};

export default AppRoutes;
