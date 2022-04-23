import type { NextPage } from "next";
import Home from "components/Home";
import Layout from "layout";

const Index: NextPage = () => {
  return (
    <Layout>
      <main>
        <Home />
      </main>
    </Layout>
  );
};

export default Index;
