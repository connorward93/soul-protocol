import React, { ReactNode, useContext, useEffect } from "react";
import AuthContext from "context/AuthContext";
import { ADAPTER_EVENTS, SafeEventEmitterProvider } from "@web3auth/base";
import type { Web3Auth, Web3AuthOptions } from "@web3auth/web3auth";

export default function Layout({ children }: { children: ReactNode }) {
  const { state, dispatch } = useContext(AuthContext);
  const { instance } = state;

  useEffect(() => {
    const init = async () => {
      try {
        const web3AuthCtorParams = {
          clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID,
          chainConfig: { chainNamespace: "eip155", chainId: "0x1" },
        };

        const { Web3Auth } = await import("@web3auth/web3auth");
        const web3AuthInstance = new Web3Auth(
          web3AuthCtorParams as Web3AuthOptions
        );
        subscribeAuthEvents(web3AuthInstance);
        dispatch({ type: "set-instance", payload: web3AuthInstance });
        await web3AuthInstance.initModal();
      } catch (error) {
        console.error(error);
      }
    };

    const subscribeAuthEvents = (web3AuthInstance: Web3Auth) => {
      // Can subscribe to all ADAPTER_EVENTS and LOGIN_MODAL_EVENTS
      web3AuthInstance.on(ADAPTER_EVENTS.CONNECTED, (data: unknown) => {
        console.log("Yeah!, you are successfully logged in", data);
      });

      web3AuthInstance.on(ADAPTER_EVENTS.CONNECTING, () => {
        console.log("connecting");
      });

      web3AuthInstance.on(ADAPTER_EVENTS.DISCONNECTED, () => {
        console.log("disconnected");
      });

      web3AuthInstance.on(ADAPTER_EVENTS.ERRORED, (error) => {
        console.error("some error or user has cancelled login request", error);
      });
    };

    init();
  }, []);

  const login = async () => {
    if (!instance) {
      console.log("web3auth not initialized yet");
      return;
    }
    const provider = await instance.connect();
    dispatch({ type: "set-provider", payload: provider });
  };

  return (
    <div>
      <nav>
        <button onClick={login}>Login</button>
      </nav>
      {children}
    </div>
  );
}