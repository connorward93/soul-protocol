import {
  createContext,
  Dispatch,
  useReducer,
  useEffect,
  useState,
} from "react";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";

type TState = {
  // auth: any;
  loading: boolean;
  instance: any;
  provider: any;
  user: any;
};

type TAction = { type: string; payload: any };

const initialState: TState = {
  // auth: null,
  loading: true,
  instance: null,
  provider: null,
  user: null,
};

const AuthContext = createContext<{
  state: TState;
  dispatch: Dispatch<TAction>;
  login: () => void;
}>({
  state: initialState,
  dispatch: () => {},
  login: () => {},
});

const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case "set-account":
      return { ...state, user: action.payload };
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

  const login = async () => {
    if (typeof window === "undefined") return;
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const account = await signer.getAddress();
    dispatch({ type: "set-account", payload: account });
  };

  const logout = () => {};

  // @ts-ignore
  (async () => {
    if (typeof window === "undefined") return;
    if (!state.provider) {
      const provider = await detectEthereumProvider();
      dispatch({ type: "set-provider", payload: provider });
    }
  })();

  const value = { state, dispatch, login };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const AuthConsumer = AuthContext.Consumer;
export default AuthContext;
