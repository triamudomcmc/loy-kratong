import { Meta } from "@components/Meta";
import { Navbar } from "@components/Nav";
import { Story } from "@components/Story";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Meta />
      <Story />
    </>
  );
};

export default Home;
