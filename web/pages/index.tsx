import type { NextPage } from "next";
import Head from "next/head";
import Main from "components/Main";
import Layout from "layout";
import { useContext, useEffect, useState } from "react";
import AuthContext from "context/AuthContext";

const Index: NextPage = () => {
  const [status, setStatus] = useState("initial");
  const { state: authState, dispatch: authDispatch } = useContext(AuthContext);

  useEffect(() => {
    console.log(authState);
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
        <Main />
      </main>
    </Layout>
  );
};

export default Index;
