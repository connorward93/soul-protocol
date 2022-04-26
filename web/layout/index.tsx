import React, { ReactNode, useContext, useEffect, useState } from "react";
import AuthContext from "context/AuthContext";
import AppContext from "context/AppContext";
import classes from "./layout.module.scss";
import Button from "components/Button";
import Circle from "components/Circle";

export default function Layout({ children }: { children: ReactNode }) {
  const {
    state: authState,
    dispatch: authDispatch,
    login,
  } = useContext(AuthContext);
  const { state, dispatch } = useContext(AppContext);
  const loading = false;
  const { user } = authState;

  const Profile = () => {
    return (
      <div className={classes.profile} onClick={login}>
        <div className={classes.image}></div>
        <div className={classes.name}>
          {user?.substring(0, 6)}...
          {user?.substring(user.length - 12, user.length - 6)}
        </div>
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
            <Button onClick={login} disabled={loading || !authState.provider}>
              <>
                <span>Login with Metamask</span>
              </>
            </Button>
          )}
        </div>
      </nav>
      {loading || !user ? <Circle /> : children}
    </div>
  );
}
