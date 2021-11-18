import { LoyKratongPage } from "@components/LoyKratong";
import { Meta } from "@components/Meta";
import { Navbar, NavLoy } from "@components/Nav";
import type { GetServerSideProps, NextPage } from "next";
import initialiseDB from "@handlers/firebase-admin";
import { ResultData } from "@components/Kratong/create";
import { useEffect } from "react";
import Router from "next/router";

function objEqual(x: any, y: any): boolean {
  const ok = Object.keys,
    tx = typeof x,
    ty = typeof y;
  return x && y && tx === "object" && tx === ty
    ? // @ts-ignore
      ok(x).length === ok(y).length && ok(x).every((key) => objEqual(x[key], y[key]))
    : x === y;
}

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

  const localEntity = localStorage?.getItem("entity") ?? {};
  const currentEntities = entities.filter((e) => !objEqual(e, localEntity));

  return (
    <>
      <NavLoy />
      <Meta />
      <LoyKratongPage entities={currentEntities} />
    </>
  );
};

export default LoyKratong;
