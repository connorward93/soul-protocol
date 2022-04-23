import {
  createContext,
  Dispatch,
  useReducer,
  useEffect,
  useState,
} from "react";

type TState = {
  status: string;
};

type TAction = { type: string; payload: any };

const initialState: TState = {
  status: "initial",
};

const AppContext = createContext<{
  state: TState;
  dispatch: Dispatch<TAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case "set-status":
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const AppConsumer = AppContext.Consumer;
export default AppContext;