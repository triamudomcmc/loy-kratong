import type { NextPage } from "next";
import LoyKratongBG from "./loykratong";

export const LoyKratongPage: NextPage = () => {
  return (
    <>
      <style jsx>{`
        body {
          overflow-y: hidden;
        }
      `}</style>
      <article>
        <LoyKratongBG />
      </article>
    </>
  );
};
