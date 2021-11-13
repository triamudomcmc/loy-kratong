import type { NextPage } from "next";
import { SalaFrontBG } from "@components/Background";
import { Create } from "./create";

export const KratongPage: NextPage = () => {
  return (
    <>
      <article>
        <SalaFrontBG />
        <Create />
      </article>
    </>
  );
};
