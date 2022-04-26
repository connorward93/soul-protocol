import type { NextPage } from "next";
import Head from "next/head";
import Circle from "components/Circle";
import Layout from "layout";
import { useContext, useEffect, useState } from "react";
import AuthContext from "context/AuthContext--web3auth";
import AppContext from "context/AppContext";
import Welcome from "components/Welcome";

const Index: NextPage = () => {
  const [status, setStatus] = useState("initial");
  const { state, dispatch } = useContext(AppContext);
  const authState = useContext(AuthContext);

  useEffect(() => {
    dispatch({ type: "set-status", payload: "Thinking" });
    if (authState.provider) {
      setStatus("logged-in");
      return;
    }
  }, [authState, dispatch]);

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

export function getInitialProps() {
  return { props: {} };
}
