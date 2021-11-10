import { NextPage } from "next";
import { Meta } from "@components/Meta";
import { PrincipalPage } from "@components/Principal";

const Principal: NextPage = () => {
  return (
    <>
      <Meta />
      <PrincipalPage />
    </>
  );
};
export default Principal;
