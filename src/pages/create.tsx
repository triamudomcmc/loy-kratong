import type { GetServerSideProps, NextPage } from "next";
import { Meta } from "@components/Meta";
import { KratongPage } from "@components/Kratong";
import { Navbar } from "@components/Nav";
import initialiseDB from "@handlers/firebase-admin";
import { KratongData } from "@components/Kratong/create";

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

const Create: NextPage<{ query: ParsedUrlQuery; data: KratongData }> = ({ query, data }) => {
  return (
    <>
      <Navbar />
      <Meta />
      <KratongPage data={data} />
    </>
  );
};

export default Create;
