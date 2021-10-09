import { hot } from "react-hot-loader";
import React from "react";

import AppRoutes from "./AppRoutes";
import { createBrowserHistory } from "history";
import { StoreContext, Auth, initialState } from "./AppContext";
import Reducer from "./AppReducer";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import "./app.scss";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1eaedb",
    },
    secondary: {
      main: "#333",
    },
  },
});
const history = createBrowserHistory();

const App = () => {
  const [state, dispatch] = React.useReducer(Reducer, initialState);

  return (
    <StoreContext.Provider value={[state, dispatch, Auth, history]}>
      <ThemeProvider theme={theme}>
        <div className="grid-container">
          <AppRoutes></AppRoutes>
        </div>
      </ThemeProvider>
    </StoreContext.Provider>
  );
};
export default hot(module)(App);
