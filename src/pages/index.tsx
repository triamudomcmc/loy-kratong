import { Meta } from "@components/Meta";
import { Navbar } from "@components/Nav";
import { Story } from "@components/Story";
import type { NextPage } from "next";
import { useEffect } from "react";
import Router from "next/router";

const Home: NextPage = () => {
  useEffect(() => {
    const id = localStorage.getItem("entityId");
    const story = localStorage.getItem("story")

    if (story === "done") {
      Router.push("/create")
    }
    if (id === "" || !id) return;

    window.location.href = "/loykratong";
  }, []);

  return (
    <>
      <Navbar />
      <Meta />
      <Story />
    </>
  );
};

export default Home;
