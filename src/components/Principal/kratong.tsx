import type { NextPage } from "next";
import { PrincipalMap } from "@map/kratong";
import styles from "@styles/modules/Principal.module.scss";
import { PrincipalPart } from "./parts";  
import { Selected } from "./create";

interface KratongProps {
  selected: Selected;
  height: string;
  offset: string;
}

/*
height: 240px
offset: 60px
*/

export const PrincipalKratong: NextPage<KratongProps> = ({ selected, height, offset }) => {
  console.log(Object.keys(PrincipalMap.decorations))
  
  return (
    <>
      <div style={{ ["--size" as string]: height }} className={styles["kratong"]}>
        <div className={styles["topping"]}>
          <div style={{ ["--offset-y" as string]: offset }} className={styles["decorations"]}>
            {Object.keys(PrincipalMap.decorations).map((decoration: string) => {
              // @ts-ignore
              const part = PrincipalMap.decorations[decoration];
              return <PrincipalPart key={decoration} part={part} selected={selected.decorations} />
            })}
          </div>
          <div className={styles["candle"]}>
            {Object.keys(PrincipalMap.candles).map((candle: string) => {
              // @ts-ignore
              const part = PrincipalMap.candles[candle];
              return <PrincipalPart key={candle} part={part} selected={selected.candles} />;
            })}
          </div>
        </div>
        <div className={styles["base"]}>
          <div className={styles["swan"]}>
            {Object.keys(PrincipalMap.swan).map((swan: string) => {
              // @ts-ignore
              const part = PrincipalMap.swan[swan];
              return <PrincipalPart key={swan} part={part} selected={selected.swan} />;
            })}
          </div>
          { /* changeme */ }
          <div className={styles["shell"]}>
            {Object.keys(PrincipalMap.base).map((base: string) => {
              // @ts-ignore
              const part = PrincipalMap.base[base];
              return <PrincipalPart key={base} part={part} selected={selected.base} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
