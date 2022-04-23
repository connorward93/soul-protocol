import type { NextPage } from "next";
import Head from "next/head";
import Home from "components/Home";
import Layout from "layout";

const Index: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Soul Protocol</title>
      </Head>
      <main>
        <Home />
      </main>
    </Layout>
  );
};

export default Index;
