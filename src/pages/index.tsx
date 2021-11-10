import type { NextPage } from "next";
import { Meta } from "@components/Meta";
import { KratongPage } from "@components/Kratong";
import { Navbar } from "@components/Nav";

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Navbar />
      <KratongPage />
    </>
  );
};

export default Home;
