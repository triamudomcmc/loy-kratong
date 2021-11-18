import { LoyKratongPage } from "@components/LoyKratong";
import { Meta } from "@components/Meta";
import { Navbar, NavLoy } from "@components/Nav";
import type { GetServerSideProps, NextPage } from "next";
import initialiseDB from "@handlers/firebase-admin";
import { ResultData } from "@components/Kratong/create";
import { useEffect } from "react";
import Router from "next/router";

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await initialiseDB.collection("filteredEntities").limit(8).get();

  return {
    props: {
      entities: data.docs.length > 0 ? data.docs.map((item) => item.data()) : [],
    },
  };
};

const LoyKratong: NextPage<{ entities: ResultData[] }> = ({ entities }) => {
  useEffect(() => {
    if (!localStorage.getItem("entity")) {
      Router.push("/");
    }
  }, []);
  return (
    <>
      <NavLoy />
      <Meta />
      <LoyKratongPage entities={entities} />
    </>
  );
};

export default LoyKratong;
