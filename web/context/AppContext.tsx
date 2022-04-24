import {
  createContext,
  Dispatch,
  useReducer,
  useEffect,
  useState,
} from "react";

type TState = {
  status: string;
  mintVariant: "hardware" | "questions" | "camera" | null;
  mintStatus: string | null;
  mintSeed: string[] | null;
  colours: string[] | null;
};

type TAction = { type: string; payload: any };

const initialState: TState = {
  status: "initial",
  mintVariant: null,
  mintStatus: "initial",
  mintSeed: null,
  colours: null,
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
    case "set-colours":
      return { ...state, colours: action.payload };
    case "set-mint-seed":
      return { ...state, mintSeed: action.payload };
    case "set-mint-variant":
      return { ...state, mintVariant: action.payload };
    case "set-mint-status":
      return { ...state, mintStatus: action.payload };
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
