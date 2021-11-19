import { KratongData, KratongData as NKratongData, Selected as NSelected, Wish } from "@components/Kratong/create";
import type { NextPage } from "next";
import { CUPSAAMap, KratongMap, PrincipalMap } from "@map/kratong";
import styles from "@styles/modules/Kratong.module.scss";
import { Candle, NormalPart, VariantPart } from "@components/Kratong/parts";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useMemo, useState } from "react";
import { useWindowDimensions } from "@utils/useWindowDimensions";
import { WaterFourData } from "@map/animations";

interface KratongProps {
  data: NKratongData;
  height: string;
  zIndex: number;
  onClick: () => void;
  highlighted?: boolean;
}

const DisplayKratong: FC<KratongProps> = ({ data, height, zIndex, onClick, highlighted = false }) => {
  const selected = data.kratong;
  const { width } = useWindowDimensions();
  const [toggle, setToggle] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => onClick()}
        style={{ ["--size" as string]: height, ["--z-index" as string]: zIndex }}
        className={classNames(styles["kratong"], "cursor-pointer")}
      >
        {highlighted && <div className={classNames(styles["caura"])}></div>}
        <div className={styles["topping"]}>
          <div className={styles["decorations"]}>
            {Object.keys(KratongMap.decorations).map((decoration: string) => {
              // @ts-ignore
              const part = KratongMap.decorations[decoration];
              if (part.type === "normal")
                return <NormalPart key={decoration} part={part} selected={selected.decorations} />;
              else if (part.type === "variant")
                return (
                  <VariantPart
                    key={decoration}
                    part={part}
                    selected={selected.decorations}
                    signVariant={selected.signVariant}
                  />
                );
            })}
          </div>
          <div className={styles["candle"]}>
            {Object.keys(KratongMap.candles).map((candle: string) => {
              // @ts-ignore
              const part = KratongMap.candles[candle];
              return <Candle key={candle} part={part} selected={selected.candles} />;
            })}
          </div>
        </div>
        <div className={styles["base"]}>
          <div className={styles["flowers"]}>
            {Object.keys(KratongMap.flowers).map((flower: string) => {
              // @ts-ignore
              const part = KratongMap.flowers[flower];
              if (part.type === "normal") return <NormalPart key={flower} part={part} selected={selected.flowers} />;
              else if (part.type === "variant")
                return (
                  <VariantPart
                    key={flower}
                    part={part}
                    selected={selected.flowers}
                    signVariant={selected.signVariant}
                  />
                );
            })}
          </div>
          <div className={styles["shell"]}>
            {Object.keys(KratongMap.base).map((base: string) => {
              // @ts-ignore
              const part = KratongMap.base[base];
              if (part.type === "normal") {
                // @ts-ignore
                return <NormalPart key={base} part={KratongMap.base[base]} selected={selected.base} />;
              } else if (part.type === "variant")
                return (
                  <VariantPart key={base} part={part} selected={selected.base} signVariant={selected.signVariant} />
                );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export const IdleCaptureKratong: NextPage<{
  data: NKratongData;
  className?: string;
  size: string;
  lane: string;
  initialX: number;
  initialY: number;
  highlighted: boolean;
}> = ({ className, data, size, lane, initialX, highlighted, initialY }) => {
  const { width, height } = useWindowDimensions();
  const [toggle, setToggle] = useState(false);

  const zIndex = lane === "t" ? 19 : lane === "m" ? 29 : 39;
  const textZIndex = lane === "t" ? 15 : lane === "m" ? 25 : 35;

  return (
    <>
      <div style={{ left: initialX, top: initialY, zIndex }} className={className}>
        <div style={{ zIndex }}>
          <DisplayKratong
            height={size}
            zIndex={zIndex}
            onClick={() => setToggle(!toggle)}
            highlighted={highlighted}
            data={data}
          />
        </div>
        {/* <p className="w-full absolute z-[99] bottom-[-225px] text-white font-ui font-light text-center">
            {data.wish.name}
          </p> */}
      </div>
    </>
  );
};
