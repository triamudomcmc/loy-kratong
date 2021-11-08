import type { NextPage } from "next";
import { Kratong } from "@map/kratong";
import styles from "@styles/modules/Kratong.module.scss";
import { SalaFrontBG } from "@components/Background";
import { useState } from "react";
import { NormalPart, VariantPart, Candle } from "./parts";

interface Selected {
  base: string;
  flower: string;
  candle: string;
  decoration: string;
}

export const KratongPage: NextPage = () => {
  const [selected, setSelected] = useState<Selected>({
    base: "banana-leaf",
    flower: "love",
    candle: "yellow",
    decoration: "nak",
  });

  return (
    <>
      <main className={styles["scene"]}>
        <SalaFrontBG />
        <div style={{ ["--size" as string]: "300px" }} className={styles["kratong"]}>
          <div className={styles["topping"]}>
            <div style={{ ["--offset-y" as string]: "100px" }} className={styles["decorations"]}>
              {/*<KratongVariantPart part={Kratong.decorations["sign-quote"]}/>*/}
              {Object.keys(Kratong.decorations).map((decoration: string) => {
                const part = Kratong.decorations[decoration];
                if (part.type === "normal")
                  return <NormalPart key={decoration} part={part} selected={selected.decoration} />;
                else if (part.type === "variant")
                  return <VariantPart key={decoration} part={part} selected={selected.decoration} />;
              })}
            </div>
            <div className={styles["candle"]}>
              {Object.keys(Kratong.candles).map((candle: string) => {
                const part = Kratong.candles[candle];
                return <Candle key={candle} part={part} selected={selected.candle} />;
              })}
              {/*<Candle part={Kratong.other.candles} />*/}
            </div>
          </div>
          <div className={styles["base"]}>
            <div className={styles["flowers"]}>
              {/*<NormalPart part={Kratong.flowers["cactus"]} />*/}
              {Object.keys(Kratong.flowers).map((flower: string) => {
                const part = Kratong.flowers[flower];
                if (part.type === "normal") return <NormalPart key={flower} part={part} selected={selected.flower} />;
                else if (part.type === "variant")
                  return <VariantPart key={flower} part={part} selected={selected.flower} />;
              })}
            </div>
            <div className={styles["shell"]}>
              {/*<NormalPart part={Kratong.base["coconut-shell"]} />*/}
              {Object.keys(Kratong.base).map((base: string) => {
                const part = Kratong.base[base];
                if (part.type === "normal")
                  return <NormalPart key={base} part={Kratong.base[base]} selected={selected.base} />;
                else if (part.type === "variant")
                  return <VariantPart key={base} part={part} selected={selected.base} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
