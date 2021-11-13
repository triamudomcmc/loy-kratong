import type { NextPage } from "next";
import { Meta } from "@components/Meta";
import { CUPSAAPage } from "@components/CUPSAA";
import { Navbar } from "@components/Nav";

import Router from "next/router";
import { useEffect } from "react";
import { GetServerSideProps } from "next";
import initialiseDB from "@handlers/firebase-admin";
import { KratongData } from "@components/CUPSAA/create";
type ParsedUrlQuery = NodeJS.Dict<string | string[]>;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let props = { query: context.query, data: {} };

  if (context.query && "id" in context.query) {
    const id = context.query.id;
    if (typeof id === "string") {
      const data = await initialiseDB.collection("kratong-por-oar").doc(id).get();
      props = { ...props, data: data.data() || {} };
    }
  }

  return {
    props,
  };
};

const CUPSAA: NextPage<{ query: ParsedUrlQuery; data: KratongData }> = ({ query, data }) => {
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
      <CUPSAAPage data={data} />
    </>
  );
};

export default CUPSAA;
