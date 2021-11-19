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

function getRandom(arr: any[], n: number) {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    let x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const data = await initialiseDB.collection("filteredEntities").limit(8).get();
  const data = await initialiseDB.collection("filteredEntities").orderBy("timestamp","asc").limit(24).get();

  const rand = getRandom(data.docs, 8)

  return {
    props: {
      entities: rand.length > 0 ? rand.map((item) => item.data()) : [],
    },
  };
};

const LoyKratong: NextPage<{ entities: ResultData[] }> = ({ entities }) => {
  useEffect(() => {
    if (!localStorage?.getItem("entity")) {
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
