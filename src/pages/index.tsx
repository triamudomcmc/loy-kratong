import type { NextPage } from "next";
import { Meta } from "@components/Meta";
import { KratongPage } from "@components/Kratong";

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <KratongPage />
    </>
  );
};

export default Home;
