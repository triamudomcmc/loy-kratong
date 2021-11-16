import type { NextPage } from "next";
import LoyKratongBG from "./loykratong";
import {ResultData} from "@components/Kratong/create";

export const LoyKratongPage: NextPage<{entities: ResultData[]}> = ({entities}) => {
  return (
    <>
      <style jsx>{`
        body {
          overflow-y: hidden;
        }
      `}</style>
      <article>
        <LoyKratongBG entities={entities}/>
      </article>
    </>
  );
};
