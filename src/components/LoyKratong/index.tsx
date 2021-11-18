import type { NextPage } from "next";
import LoyKratongScene from "./loykratong";
import { ResultData } from "@components/Kratong/create";

export const LoyKratongPage: NextPage<{ entities: ResultData[] }> = ({ entities }) => {
  return (
    <>
      <style jsx>{`
        body {
          overflow-y: hidden;
          height: 100vh;
        }
      `}</style>
      <article>
        <LoyKratongScene entities={entities} />
      </article>
    </>
  );
};
