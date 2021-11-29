import { Meta } from "@components/Meta";
import { Navbar } from "@components/Nav";
import { Story } from "@components/Story";
import type { NextPage } from "next";
import { useEffect } from "react";
import Router from "next/router";

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
