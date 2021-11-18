import type { NextPage } from "next";
import LoyKratongScene from "./loykratong";
import { ResultData } from "@components/Kratong/create";

export const LoyKratongPage: NextPage<{ entities: ResultData[] }> = ({ entities }) => {
  return (
    <>
      <style jsx>{`
        body {
          overflow-y: hidden;
          min-height: 100vh;
          min-height: -webkit-fill-available;
        }

        html {
          height: -webkit-fill-available;
        }
      `}</style>
      <article>
        <LoyKratongScene entities={entities} />
      </article>
    </>
  );
};
