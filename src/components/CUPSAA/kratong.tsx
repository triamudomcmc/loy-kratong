import type { NextPage } from "next";
import { CUPSAAMap } from "@map/kratong";
import styles from "@styles/modules/CUPSAA.module.scss";
import { CUPSAAPart } from "./parts";
import { Selected } from "./create";

interface KratongProps {
  selected: Selected;
  height: string;
}

/*
height: 240px
*/

export const CUPSAAKratong: NextPage<KratongProps> = ({ selected, height }) => {
  return (
    <>
      <div style={{ ["--size" as string]: height }} className={styles["kratong"]}>
        <div className={styles["topping"]}>
          <div className={styles["logo"]}>
            <div className={styles["container"]}>
              <img className={styles["img"]} src="/assets/images/CUPSAA/logo.png" alt="CUPSAA Logo" />
            </div>
          </div>
          <div className={styles["candle"]}>
            {Object.keys(CUPSAAMap.candles).map((candle: string) => {
              // @ts-ignore
              const part = CUPSAAMap.candles[candle];
              return <CUPSAAPart key={candle} part={part} selected={selected.candles} />;
            })}
          </div>
        </div>
        <div className={styles["base"]}>
          <div className={styles["flowers"]}>
            {Object.keys(CUPSAAMap.flowers).map((flower: string) => {
              // @ts-ignore
              const part = CUPSAAMap.flowers[flower];
              return <CUPSAAPart key={flower} part={part} selected={selected.flowers} />;
            })}
          </div>
          <div className={styles["shell"]}>
            {Object.keys(CUPSAAMap.base).map((base: string) => {
              // @ts-ignore
              const part = CUPSAAMap.base[base];
              return <CUPSAAPart key={base} part={part} selected={selected.base} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
