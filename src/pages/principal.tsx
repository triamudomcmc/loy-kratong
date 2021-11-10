import { NextPage } from "next";
import { Meta } from "@components/Meta";
import { PrincipalPage } from "@components/Principal";
import { Navbar } from "@components/Nav";

const Principal: NextPage = () => {
  return (
    <>
      <Meta />
      <Navbar />
      <PrincipalPage />
    </>
  );
};
export default Principal;
