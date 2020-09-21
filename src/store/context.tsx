import React, { createContext, ReactNode } from "react";
import { state, stateType } from "./state";
import useGlobalState from "./reducers";

type DefaultContextValues = {
  globalState: stateType;
  globalDispatch: React.Dispatch<{
    type: string;
    payload: { data: object; isLoaded: boolean };
  }>;
};

const GlobalContext = createContext<DefaultContextValues>({
  globalState: state,
  globalDispatch: () => {},
});

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <GlobalContext.Provider value={useGlobalState()}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
