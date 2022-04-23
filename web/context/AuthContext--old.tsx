import {
  createContext,
  Dispatch,
  useReducer,
  useEffect,
  useState,
} from "react";

type TState = {
  // auth: any;
  loading: boolean;
  instance: any;
  provider: any;
};

type TAction = { type: string; payload: any };

const initialState: TState = {
  // auth: null,
  loading: true,
  instance: null,
  provider: null,
};

const AuthContext = createContext<{
  state: TState;
  dispatch: Dispatch<TAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case "set-loading":
      return { ...state, loading: action.payload };
    case "set-instance":
      return { ...state, instance: action.payload };
    case "set-provider":
      return { ...state, provider: action.payload };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const AuthConsumer = AuthContext.Consumer;
export default AuthContext;
