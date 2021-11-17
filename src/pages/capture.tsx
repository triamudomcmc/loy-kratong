import { CaptureKratong } from "@components/Capture";
import { KratongData, Selected } from "@components/Kratong/create";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";

const sample = {
  kratong: {
    base: "banana-leaf",
    candles: "candle-yellow",
    decorations: "swan",
    flowers: "luck",
    signVariant: 0,
  },
  wish: {
    name: "hi",
    content: "hi",
  },
};

const Capture: NextPage<{ data: KratongData }> = ({ data }) => {
  return <CaptureKratong data={data} />;
};

Capture.getInitialProps = ({ query }) => {
  const data = query?.data ? JSON.parse(query?.data as string) : sample;

  return {
    data,
  };
};

export default Capture;
