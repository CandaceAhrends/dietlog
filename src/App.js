import { hot } from "react-hot-loader";
import React from "react";
import NewsFeed from "./component/facebook/NewsFeed";
import { AppCtx } from "./appContext";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

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

const App = () => {
  const [userInfo, setUserInfo] = React.useState({});
  React.useEffect(() => {
    setUserInfo({
      userId: 123,
      firstName: "Candace",
      lastName: "Ahrends",
      permissions: {},
      lastLogin: null,
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <AppCtx.Provider value={userInfo}>
        <NewsFeed></NewsFeed>
      </AppCtx.Provider>
    </ThemeProvider>
  );
};
export default hot(module)(App);
