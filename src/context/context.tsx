import React, { ReactNode } from "react";

import { CharacterType } from "../model/characterModel";

interface GoblalStateType {
  characters: CharacterType[];
}

interface ChildrenProps {
  children?: ReactNode;
}

const defaultGlobalState: GoblalStateType = {
  characters: [],
};

const globalContext = React.createContext<GoblalStateType>(defaultGlobalState);
const dispatchContext = React.createContext<ReducerType>(undefined);

const useGlobatState = () => [
  React.useContext(globalContext),
  React.useContext(dispatchContext),
];

type ReducerType = GoblalStateType | CharacterType | undefined | any;

const GlobalStateProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = React.useReducer(
    (state: GoblalStateType, action: ReducerType) => ({ ...state, ...action }),
    defaultGlobalState
  );

  return (
    <globalContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        {children}
      </dispatchContext.Provider>
    </globalContext.Provider>
  );
};

export { GlobalStateProvider, useGlobatState };
