import React from "react";
import Layout from "layout";
import Landscape from "components/Landscape";
import Head from "next/head";

export default function Community() {
  return (
    <Layout>
      <Head>
        <title>Community</title>
      </Head>
      <Landscape />
    </Layout>
  );
}

export function getInitialProps() {
  return { props: {} };
}
