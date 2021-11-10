import type { NextPage } from "next";
import { Meta } from "@components/Meta";
import { KratongPage } from "@components/Kratong";
import { Navbar } from "@components/Nav";
import {useEffect} from "react";
import Router from "next/router";

type ParsedUrlQuery = NodeJS.Dict<string | string[]>

const Home: NextPage<{query: ParsedUrlQuery}> = ({query}) => {

  useEffect(() => {
    if (query && "id" in query) {
    }else{
      Router.push("/error")
    }
  }, [query])

  return (
    <>
      <Meta />
      <Navbar />
      <KratongPage />
    </>
  );
};

Home.getInitialProps = ({query}) => {
  return {query}
}

export default Home;
