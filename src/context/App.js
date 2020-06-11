import React from "react";
import { navigate } from "@reach/router";
import useActions from "../hooks/useActions";
import authReducer from "../reducers/auth";
import { getFromStorage } from "../service/localStorage";

const initialState = {
  auth: {
    token: getFromStorage("ls.authToken") || null
  }
};

export const AppContext = React.createContext();

function reducer(state, action) {
  switch (action.ctx) {
    case "auth":
      return authReducer(state, action);
    default:
      return state;
  }
}

const handleLogin = (state, dispatch) => async (username, password) => {
  dispatch({
    ctx: "auth",
    type: "updateToken",
    payload: "secretToken"
  });
  navigate("/main");
};

export function AppContextProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  const actions = useActions(state, dispatch, { handleLogin });
  return (
    <AppContext.Provider value={{ ...value, actions }}>
      {props.children}
    </AppContext.Provider>
  );
}
export const AppContextConsumer = AppContext.Consumer;
