import type { NextPage } from "next";
import { SalaFrontBG } from "@components/Background";
import { Create, KratongData } from "./create";

export const KratongPage: NextPage<{ data: KratongData }> = ({ data }) => {
  return (
    <>
      <article>
        <SalaFrontBG />
        <Create idata={data} />
      </article>
    </>
  );
};
