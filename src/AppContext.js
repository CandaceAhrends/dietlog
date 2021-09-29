import React from "react";
import TokenStore from "./api/TokenStore";
import { getSessionData } from "./session";
export const StoreContext = React.createContext({});

const { userName = null, isAuthenticated = false } = getSessionData();
console.log("user>>>", userName, isAuthenticated);
export const initialState = {
  isAuthenticated: isAuthenticated,
  errorMessage: null,
  user: userName,
};
export const Auth = TokenStore.getInstance();
