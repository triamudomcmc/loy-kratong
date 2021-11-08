import type { NextPage } from "next";
import { KratongMap } from "@map/kratong";
import styles from "@styles/modules/Kratong.module.scss";
import { NormalPart, VariantPart, Candle } from "./parts";
import { Selected } from "./create";

interface KratongProps {
  selected: Selected;
}

export const Kratong: NextPage<KratongProps> = ({ selected }) => {
  return (
    <>
      <div style={{ ["--size" as string]: "300px" }} className={styles["kratong"]}>
        <div className={styles["topping"]}>
          <div style={{ ["--offset-y" as string]: "100px" }} className={styles["decorations"]}>
            {/*<KratongVariantPart part={Kratong.decorations["sign-quote"]}/>*/}
            {Object.keys(KratongMap.decorations).map((decoration: string) => {
              const part = KratongMap.decorations[decoration];
              if (part.type === "normal")
                return <NormalPart key={decoration} part={part} selected={selected.decoration} />;
              else if (part.type === "variant")
                return <VariantPart key={decoration} part={part} selected={selected.decoration} />;
            })}
          </div>
          <div className={styles["candle"]}>
            {Object.keys(KratongMap.candles).map((candle: string) => {
              const part = KratongMap.candles[candle];
              return <Candle key={candle} part={part} selected={selected.candle} />;
            })}
            {/*<Candle part={Kratong.other.candles} />*/}
          </div>
        </div>
        <div className={styles["base"]}>
          <div className={styles["flowers"]}>
            {/*<NormalPart part={Kratong.flowers["cactus"]} />*/}
            {Object.keys(KratongMap.flowers).map((flower: string) => {
              const part = KratongMap.flowers[flower];
              if (part.type === "normal") return <NormalPart key={flower} part={part} selected={selected.flower} />;
              else if (part.type === "variant")
                return <VariantPart key={flower} part={part} selected={selected.flower} />;
            })}
          </div>
          <div className={styles["shell"]}>
            {/*<NormalPart part={Kratong.base["coconut-shell"]} />*/}
            {Object.keys(KratongMap.base).map((base: string) => {
              const part = KratongMap.base[base];
              if (part.type === "normal")
                return <NormalPart key={base} part={KratongMap.base[base]} selected={selected.base} />;
              else if (part.type === "variant") return <VariantPart key={base} part={part} selected={selected.base} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
