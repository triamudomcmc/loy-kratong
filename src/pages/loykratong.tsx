import { LoyKratongPage } from "@components/LoyKratong";
import { Meta } from "@components/Meta";
import { Navbar } from "@components/Nav";
import type { NextPage } from "next";

const LoyKratong: NextPage = () => {
  return (
    <>
      <Navbar />
      <Meta />
      <LoyKratongPage />
    </>
  );
};

export default LoyKratong;
