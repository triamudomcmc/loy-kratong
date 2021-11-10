import { PrincipalKratong } from "@components/Principal/kratong";
import { NextPage } from "next";
import { Selected } from "@components/Principal/create";
import { Meta } from "@components/Meta";

const defaultValue: Selected = {
  base: "base-blue",
  candles: "candle-blue",
  decorations: "rice1",
  swan: "swan-blue",
  offset: 0
}

const Principal: NextPage = () => {
  return (
    <>
      <Meta />
      <PrincipalKratong selected={defaultValue} height="240px" offset="60px" />;
    </>
  ) 
  
};
export default Principal;
