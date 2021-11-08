import type { NextPage } from "next";
import styles from "@styles/modules/Kratong.module.scss";
import { useState } from "react";
import { NormalPart, VariantPart, Candle } from "./parts";
import { Kratong } from "./kratong";

export interface Selected {
  base: string;
  flower: string;
  candle: string;
  decoration: string;
}

export const Create: NextPage = () => {
  const [selected, setSelected] = useState<Selected>({
    base: "banana-leaf",
    flower: "love",
    candle: "yellow",
    decoration: "nak",
  });

  return (
    <>
      <main>
        <Kratong selected={selected} />
      </main>
    </>
  );
};
