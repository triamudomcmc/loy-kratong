import { Selected as NSelected } from "@components/Kratong/create";
import type { NextPage } from "next";
import { KratongMap } from "@map/kratong";
import styles from "@styles/modules/Kratong.module.scss";
import { Candle, NormalPart, VariantPart } from "@components/Kratong/parts";
import classNames from "classnames";
import { motion } from "framer-motion";
import { FC, useState } from "react";

export const MessageBox: FC = () => {
  return (
    <>
      <svg
        style={{ width: "100%", height: "100%", opacity: 0.9 }}
        width="2096"
        height="1625"
        viewBox="0 0 2096 1625"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_889_12776)">
          <mask id="path-1-inside-1_889_12776" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M136 0C60.8893 0 0 60.8894 0 136V1367.51C0 1442.62 60.8891 1503.51 136 1503.51H325.057L397.391 1625L469.725 1503.51H1959.8C2034.91 1503.51 2095.8 1442.62 2095.8 1367.51V136C2095.8 60.8893 2034.91 0 1959.8 0H136Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M136 0C60.8893 0 0 60.8894 0 136V1367.51C0 1442.62 60.8891 1503.51 136 1503.51H325.057L397.391 1625L469.725 1503.51H1959.8C2034.91 1503.51 2095.8 1442.62 2095.8 1367.51V136C2095.8 60.8893 2034.91 0 1959.8 0H136Z"
            fill="url(#paint0_linear_889_12776)"
            fillOpacity="0.9"
          />
          <path
            d="M325.057 1503.51L328.494 1501.46L327.331 1499.51H325.057V1503.51ZM397.391 1625L393.954 1627.05L397.391 1632.82L400.828 1627.05L397.391 1625ZM469.725 1503.51V1499.51H467.451L466.288 1501.46L469.725 1503.51ZM4 136C4 63.0986 63.0984 4 136 4V-4C58.6801 -4 -4 58.6803 -4 136H4ZM4 1367.51V136H-4V1367.51H4ZM136 1499.51C63.0983 1499.51 4 1440.41 4 1367.51H-4C-4 1444.83 58.68 1507.51 136 1507.51V1499.51ZM325.057 1499.51H136V1507.51H325.057V1499.51ZM400.828 1622.95L328.494 1501.46L321.621 1505.56L393.954 1627.05L400.828 1622.95ZM466.288 1501.46L393.954 1622.95L400.828 1627.05L473.162 1505.56L466.288 1501.46ZM1959.8 1499.51H469.725V1507.51H1959.8V1499.51ZM2091.8 1367.51C2091.8 1440.41 2032.7 1499.51 1959.8 1499.51V1507.51C2037.12 1507.51 2099.8 1444.83 2099.8 1367.51H2091.8ZM2091.8 136V1367.51H2099.8V136H2091.8ZM1959.8 4C2032.7 4 2091.8 63.0984 2091.8 136H2099.8C2099.8 58.6801 2037.12 -4 1959.8 -4V4ZM136 4H1959.8V-4H136V4Z"
            fill="url(#paint1_linear_889_12776)"
            mask="url(#path-1-inside-1_889_12776)"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_889_12776"
            x="-19.4818"
            y="-19.4818"
            width="2134.76"
            height="1663.96"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="9.74088" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_889_12776" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_889_12776" result="shape" />
          </filter>
          <linearGradient
            id="paint0_linear_889_12776"
            x1="2095.8"
            y1="7.92483e-05"
            x2="34.0089"
            y2="1625.95"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.11632" stopColor="white" />
            <stop offset="0.855903" stopColor="#E9E9E9" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_889_12776"
            x1="1047.9"
            y1="0"
            x2="1047.9"
            y2="1625"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
interface KratongProps {
  data: NSelected;
  height: string;
  zIndex: number;
  onClick: () => void;
}

export const DisplayKratong: FC<KratongProps> = ({ data, height, zIndex, onClick }) => {
  const selected = data;
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
        {hovered && <div className={styles["aura"]}></div>}
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
