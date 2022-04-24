import type { NextPage } from "next";
import Head from "next/head";
import Circle from "components/Circle";
import Layout from "layout";
import { useContext, useEffect, useState } from "react";
import AuthContext from "context/AuthContext--old";
import AppContext from "context/AppContext";
import Welcome from "components/Welcome";

const Index: NextPage = () => {
  const [status, setStatus] = useState("initial");
  const { state, dispatch } = useContext(AppContext);
  const { state: authState, dispatch: authDispatch } = useContext(AuthContext);

  useEffect(() => {
    dispatch({ type: "set-status", payload: "Thinking" });
    if (authState.provider) {
      setStatus("logged-in");
      return;
    }
    if (authState.instance && !authState.provider) {
    }
    // if (!authState.loading)
  }, [authState]);

  return (
    <Layout>
      <Head>
        <title>Soul Protocol</title>
      </Head>
      <main>
        <Welcome />
      </main>
    </Layout>
  );
};

export default Index;
