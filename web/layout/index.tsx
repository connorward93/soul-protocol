import React, { ReactNode, useContext, useEffect } from "react";
import AuthContext from "context/AuthContext";
import AppContext from "context/AppContext";
import Web3 from "web3";
import { ADAPTER_EVENTS, SafeEventEmitterProvider } from "@web3auth/base";
import { Web3Auth, Web3AuthOptions } from "@web3auth/web3auth";
import classes from "./layout.module.scss";
import Button from "components/Button";
import Main from "components/Main";

export default function Layout({ children }: { children: ReactNode }) {
  const { state: authState, dispatch: authDispatch } = useContext(AuthContext);
  const { loading, instance, provider } = authState;
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const init = async () => {
      try {
        const web3AuthCtorParams = {
          clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID,
          chainConfig: { chainNamespace: "eip155", chainId: "0x13881" },
        };

        const { Web3Auth } = await import("@web3auth/web3auth");
        const web3AuthInstance = new Web3Auth(
          web3AuthCtorParams as Web3AuthOptions
        );
        subscribeAuthEvents(web3AuthInstance);
        authDispatch({ type: "set-instance", payload: web3AuthInstance });
        await web3AuthInstance.initModal();
      } catch (error) {
        console.error(error);
      }
    };

    const subscribeAuthEvents = (web3AuthInstance: Web3Auth) => {
      // Can subscribe to all ADAPTER_EVENTS and LOGIN_MODAL_EVENTS
      web3AuthInstance.on(ADAPTER_EVENTS.CONNECTED, (data: unknown) => {
        console.log("Yeah!, you are successfully logged in", data);
        authDispatch({ type: "set-loading", payload: false });
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

  useEffect(() => {
    if (!instance && loading) return;
    const getProvider = async () => {
      const provider = await instance.connect();
      authDispatch({ type: "set-provider", payload: provider });
      dispatch({ type: "set-status", payload: "logged-in" });
    };
    getProvider();
  }, [loading, instance]);

  const login = async () => {
    if (!instance) {
      console.log("web3auth not initialized yet");
      return;
    }
    const provider = await instance.connect();
    authDispatch({ type: "set-provider", payload: provider });
    const user = await instance.getUserInfo();
  };

  const logout = async () => {
    await instance.logout();
  };

  return (
    <div className={classes.container}>
      <nav className={classes.nav}>
        <div className={classes.actions}>
          {provider ? (
            <Button onClick={logout}>Logout</Button>
          ) : (
            <Button onClick={login} disabled={loading}>
              <>
                <span
                  style={
                    loading
                      ? {
                          visibility: "hidden",
                          position: "absolute",
                          opacity: 0,
                        }
                      : {}
                  }
                >
                  Login
                </span>
                {loading ? "Loading" : null}
              </>
            </Button>
          )}
        </div>
      </nav>
      {loading ? <Main /> : children}
    </div>
  );
}
