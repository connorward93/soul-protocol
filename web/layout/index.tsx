import React, { ReactNode, useContext, useEffect, useState } from "react";
import AuthContext from "context/AuthContext";
import AppContext from "context/AppContext";
import classes from "./layout.module.scss";
import Button from "components/Button";
import Circle from "components/Circle";

export default function Layout({ children }: { children: ReactNode }) {
  const {
    accounts,
    getAccounts,
    login,
    logout,
    provider,
    isLoading,
    // processing,
    ...authState
  } = useContext(AuthContext);
  const { state, dispatch } = useContext(AppContext);
  const loading = isLoading;
  const [user, setUser] = useState<string | null>();

  useEffect(() => {
    const localUser =
      typeof window !== "undefined" ? localStorage.getItem("user") : "";
    setUser(localUser);
  }, []);

  useEffect(() => {
    if (provider) {
      (async () => {
        const accounts = await getAccounts();
        setUser(accounts[0]);
      })();
    }
  }, [provider]);

  const Profile = () => {
    return (
      <div className={classes.profile} onClick={logout}>
        <div className={classes.image}></div>
        <div className={classes.name}>{user?.substring(0, 12)}...</div>
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <nav className={classes.nav}>
        <div className={classes.actions}>
          {user ? (
            <Profile />
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
      {/* {loading || !authState.web3Auth || !user ? <Circle /> : children} */}
      {children}
    </div>
  );
}
