import type { NextPage } from "next";
import { Meta } from "@components/Meta";
import { CUPSAAPage } from "@components/CUPSAA";
import { Navbar } from "@components/Nav";

import Router from "next/router";
import { useEffect } from "react";
type ParsedUrlQuery = NodeJS.Dict<string | string[]>;

const CUPSAA: NextPage<{ query: ParsedUrlQuery }> = ({ query }) => {
  useEffect(() => {
    if (query && "id" in query) {
    } else {
      Router.push("/error");
    }
  }, [query]);

  return (
    <>
      <Meta />
      <Navbar />
      <CUPSAAPage />
    </>
  );
};

CUPSAA.getInitialProps = ({ query }) => {
  return { query };
};

export default CUPSAA;
