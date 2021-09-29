import { hot } from "react-hot-loader";
import React from "react";
import Nav from "./component/nav/Nav";
import Header from "./component/Header";
import ContentArea from "./component/ContentArea";
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
          <Header></Header>
          <Nav></Nav>
          <ContentArea></ContentArea>
        </div>
      </ThemeProvider>
    </StoreContext.Provider>
  );
};
export default hot(module)(App);
