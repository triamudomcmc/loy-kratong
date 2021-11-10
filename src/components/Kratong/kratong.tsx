import type { NextPage } from "next";
import {KratongMap, KratongType, KratongTypeVariant} from "@map/kratong";
import styles from "@styles/modules/Kratong.module.scss";
import { NormalPart, VariantPart, Candle } from "./parts";
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

export const Kratong: NextPage<KratongProps> = ({ selected, height, offset }) => {

  return (
    <>
      <div style={{ ["--size" as string]: height }} className={styles["kratong"]}>
        <div className={styles["topping"]}>
          <div style={{ ["--offset-y" as string]: `${Object.values(KratongMap.decorations).find((b: KratongType | KratongTypeVariant) => b.id === selected.decorations)?.decorationOffset ?? 80}px` }} className={styles["decorations"]}>
            {/*<KratongVariantPart part={Kratong.decorations["sign-quote"]}/>*/}
            {Object.keys(KratongMap.decorations).map((decoration: string) => {
              // @ts-ignore
              const part = KratongMap.decorations[decoration];
              if (part.type === "normal")
                return <NormalPart key={decoration} part={part} selected={selected.decorations} />;
              else if (part.type === "variant")
                return <VariantPart key={decoration} part={part} selected={selected.decorations} />;
            })}
          </div>
          <div className={styles["candle"]}>
            {Object.keys(KratongMap.candles).map((candle: string) => {
              // @ts-ignore
              const part = KratongMap.candles[candle];
              return <Candle key={candle} part={part} selected={selected.candles} />;
            })}
            {/*<Candle part={Kratong.other.candles} />*/}
          </div>
        </div>
        <div className={styles["base"]}>
          <div style={{["--padding-flower-x" as string]: `${Object.values(KratongMap.flowers).find((b: KratongType) => b.id === selected.flowers)?.paddingXFlower ?? 0}px`}} className={styles["flowers"]}>
            {/*<NormalPart part={Kratong.flowers["cactus"]} />*/}
            {Object.keys(KratongMap.flowers).map((flower: string) => {
              // @ts-ignore
              const part = KratongMap.flowers[flower];
              if (part.type === "normal") return <NormalPart key={flower} part={part} selected={selected.flowers} />;
              else if (part.type === "variant")
                return <VariantPart key={flower} part={part} selected={selected.flowers} />;
            })}
          </div>
          <div style={{ ["--offset-shell-y" as string]: `${Object.values(KratongMap.base).find((b: KratongType) => b.id === selected.base)?.offset ?? 0}px`}} className={styles["shell"]}>
            {/*<NormalPart part={Kratong.base["coconut-shell"]} />*/}
            {Object.keys(KratongMap.base).map((base: string) => {
              // @ts-ignore
              const part = KratongMap.base[base];
              if (part.type === "normal") {
                // @ts-ignore
                return <NormalPart key={base} part={KratongMap.base[base]} selected={selected.base} />;
              } else if (part.type === "variant")
                return <VariantPart key={base} part={part} selected={selected.base} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
