import React from "react";
import Layout from "layout";
import MintPage from "components/Mint/index";
import Head from "next/Head";

export default function Mint() {
  return (
    <Layout>
      <Head>
        <title>Mint</title>
      </Head>
      <MintPage />
    </Layout>
  );
}
