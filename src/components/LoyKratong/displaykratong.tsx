import { Selected as NSelected } from "@components/Kratong/create";
import { Kratong } from "@components/Kratong/kratong";
import type { NextPage } from "next";

interface Data {
  kratong: NSelected;
  wish: {
    name: string;
    content: string;
  };
}

interface KratongProps {
  data: Data;
  height: string;
  zIndex: number;
}

export const DisplayKratong: NextPage<KratongProps> = ({ data, height, zIndex }) => {
  return (
    <>
      <div
        style={{
          width: `calc(${height} + 50px`,
          height: `calc(${height} + 50px`,
          top: 0,
          left: "-25px",
          position: "absolute",
          backgroundColor: "#f3f3c7",
          opacity: "30%",
          borderRadius: "9999px",
          filter: "blur(10px)",
        }}
      ></div>
      <Kratong selected={data.kratong} height={height} zIndex={zIndex} />
    </>
  );
};
