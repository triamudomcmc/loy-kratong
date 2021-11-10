import { NextPage } from "next";
import { Meta } from "@components/Meta";
import { PrincipalPage } from "@components/Principal";
import { Navbar } from "@components/Nav";

import Router from "next/router";
import {useEffect} from "react";

const PrinciPal: NextPage<{query: any}> = ({query}) => {

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
      <PrincipalPage />
    </>
  );
};

PrinciPal.getInitialProps = ({query}) => {
  return {query}
}

export default PrinciPal
