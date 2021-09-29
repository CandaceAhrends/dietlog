import React from "react";
import { StoreContext } from "../AppContext";
import { useHistory } from "react-router-dom";

export function useLoginPage() {
  const [state] = React.useContext(StoreContext);
  const history = useHistory();
  React.useEffect(() => {
    if (!state.isAuthenticated) {
      history && history.push("/login");
    }
  }, [state]);
  return state.isAuthenticated;
}
