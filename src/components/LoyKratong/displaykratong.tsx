import { KratongData, KratongData as NKratongData, Selected as NSelected, Wish } from "@components/Kratong/create";
import type { NextPage } from "next";
import { CUPSAAMap, KratongMap, PrincipalMap } from "@map/kratong";
import styles from "@styles/modules/Kratong.module.scss";
import pstyles from "@styles/modules/Principal.module.scss";
import cstyles from "@styles/modules/CUPSAA.module.scss";
import { Candle, NormalPart, VariantPart } from "@components/Kratong/parts";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useMemo, useState } from "react";
import { useWindowDimensions } from "@utils/useWindowDimensions";
import { WaterFourData } from "@map/animations";
import { XIcon } from "@heroicons/react/solid";
import { KratongData as PKratongData } from "@components/Principal/create";
import { PrincipalPart } from "@components/Principal/parts";
import { useAnimationFrame } from "@utils/useAnimationFrame";
import { random } from "@utils/random";
import { KratongData as CKratongData } from "@components/CUPSAA/create";
import { CUPSAAPart } from "@components/CUPSAA/parts";

const DisplayName: FC<{ name: string }> = ({ name }) => {
  return (
    <span className="absolute w-full text-white z-[99] text-xs sm:text-sm top-[-29px] text-center font-light font-ui">
      {name}
    </span>
  );
};

export const KratongPopup: FC<{
  info: Wish;
  onToggle: (toggle: boolean) => void;
}> = ({ info, onToggle }) => {
  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="w-[275px] absolute z-[99] left-[63px] top-[-165px]"
      >
        <MessageBox />
        <XIcon
          className="w-5 h-5 text-white absolute z-[99] right-4 top-4 cursor-pointer hover:text-gray-100"
          onClick={() => onToggle(false)}
        />
        <div className="absolute z-[98] top-0 left-0 py-6 px-4 flex flex-col min-w-1/4">
          <p className="font-ui font-medium text-[#2256A3] mb-2 pr-4">{info.name}</p>
          <hr className="w-1/2 border-[0.5px] border-[#2256A3] mb-4" />
          <p className="font-ui text-sm font-light text-[#2256A3]">{info.content}</p>
        </div>
      </motion.div>
    </>
  );
};

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
  data: NKratongData;
  height: string;
  zIndex: number;
  onClick: () => void;
  highlighted?: boolean;
}

export const DisplayKratong: FC<KratongProps> = ({ data, height, zIndex, onClick, highlighted = false }) => {
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
        {highlighted ? <div className={styles["aura"]}></div> : hovered && <div className={styles["aura"]}></div>}
        <DisplayName name={data.wish.name} />
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

export const CUPSAAIdleKratong: NextPage<{
  data: CKratongData;
  className?: string;
  size: Array<string>;
  lane: string;
  initialX: number;
  highlighted: boolean;
}> = ({ className, data, size, lane, initialX, highlighted }) => {
  const { width } = useWindowDimensions();
  const selected = data.kratong;
  const zIndex = lane === "t" ? 19 : lane === "m" ? 29 : 39;
  const textZIndex = lane === "t" ? 15 : lane === "m" ? 25 : 35;
  const [toggle, setToggle] = useState(false);
  const height = width > 640 ? size[0] : size[1];

  return (
    <motion.div
      animate={WaterFourData.animate}
      transition={WaterFourData.transition}
      style={{ left: initialX, zIndex: zIndex }}
      className="relative"
    >
      <div className={className} style={{ zIndex }}>
        {toggle && (
          <AnimatePresence>
            <KratongPopup info={data.wish} onToggle={setToggle} />
          </AnimatePresence>
        )}
        <div
          onClick={() => setToggle(!toggle)}
          style={{ ["--size" as string]: height, ["--z-index" as string]: zIndex }}
          className={classNames(cstyles["kratong"], "cursor-pointer")}
        >
          {highlighted && <div className={styles["aura"]}></div>}
          <DisplayName name={data.wish.name} />
          <div className={cstyles["topping"]}>
            <div className={cstyles["logo"]}>
              <div className={cstyles["container"]}>
                <img className={cstyles["img"]} src="/assets/images/CUPSAA/logo.png" alt="CUPSAA Logo" />
              </div>
            </div>
            <div className={cstyles["candle"]}>
              {Object.keys(CUPSAAMap.candles).map((candle: string) => {
                // @ts-ignore
                const part = CUPSAAMap.candles[candle];
                return <CUPSAAPart key={candle} part={part} selected={selected.candles} />;
              })}
            </div>
          </div>
          <div className={cstyles["base"]}>
            <div className={cstyles["flowers"]}>
              {Object.keys(CUPSAAMap.flowers).map((flower: string) => {
                // @ts-ignore
                const part = CUPSAAMap.flowers[flower];
                return <CUPSAAPart key={flower} part={part} selected={selected.flowers} />;
              })}
            </div>
            <div className={cstyles["shell"]}>
              {Object.keys(CUPSAAMap.base).map((base: string) => {
                // @ts-ignore
                const part = CUPSAAMap.base[base];
                return <CUPSAAPart key={base} part={part} selected={selected.base} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const PrincipalIdleKratong: NextPage<{
  data: PKratongData;
  className?: string;
  size: Array<string>;
  lane: string;
  initialX: number;
}> = ({ className, data, size, lane, initialX }) => {
  const { width } = useWindowDimensions();
  const [toggle, setToggle] = useState(false);

  const zIndex = lane === "t" ? 15 : lane === "m" ? 25 : 35;
  const textZIndex = lane === "t" ? 15 : lane === "m" ? 25 : 35;

  const selected = data.kratong;
  const height = width > 640 ? size[0] : size[1];

  return (
    <>
      <motion.div
        animate={WaterFourData.animate}
        transition={WaterFourData.transition}
        style={{ left: initialX, zIndex: zIndex + 6 }}
        className="relative"
      >
        <div className={className} style={{ zIndex }}>
          {toggle && (
            <AnimatePresence>
              <KratongPopup info={data.wish} onToggle={setToggle} />
            </AnimatePresence>
          )}
          <div
            onClick={() => setToggle(!toggle)}
            style={{ ["--size" as string]: height, ["--z-index" as string]: zIndex }}
            className={classNames(pstyles["kratong"], "cursor-pointer")}
          >
            {<div className={pstyles["aura"]}></div>}
            <DisplayName name={data.wish.name} />
            <div className={pstyles["topping"]}>
              <div className={pstyles["decorations"]}>
                {Object.keys(PrincipalMap.decorations).map((decoration: string) => {
                  // @ts-ignore
                  const part = PrincipalMap.decorations[decoration];
                  return <PrincipalPart key={decoration} part={part} selected={selected.decorations} />;
                })}
              </div>
              <div className={pstyles["candle"]}>
                {Object.keys(PrincipalMap.candles).map((candle: string) => {
                  // @ts-ignore
                  const part = PrincipalMap.candles[candle];
                  return <PrincipalPart key={candle} part={part} selected={selected.candles} />;
                })}
              </div>
            </div>
            <div className={pstyles["base"]}>
              <div className={pstyles["swan"]}>
                {Object.keys(PrincipalMap.swan).map((swan: string) => {
                  // @ts-ignore
                  const part = PrincipalMap.swan[swan];
                  return <PrincipalPart key={swan} part={part} selected={selected.swan} />;
                })}
              </div>
              {/* changeme */}
              <div className={pstyles["shell"]}>
                {Object.keys(PrincipalMap.base).map((base: string) => {
                  // @ts-ignore
                  const part = PrincipalMap.base[base];
                  return <PrincipalPart key={base} part={part} selected={selected.base} />;
                })}
              </div>
            </div>
          </div>
        </div>
        {/* <p className="w-full absolute z-[99] bottom-[-225px] text-white font-ui font-light text-center">
          {data.wish.name}
        </p> */}
      </motion.div>
    </>
  );
};

export const IdleKratong: NextPage<{
  data: NKratongData;
  className?: string;
  size: Array<string>;
  lane: string;
  initialX: number;
  highlighted: boolean;
}> = ({ className, data, size, lane, initialX, highlighted }) => {
  const { width, height } = useWindowDimensions();
  const [toggle, setToggle] = useState(false);

  const zIndex = lane === "t" ? 19 : lane === "m" ? 29 : 39;
  const textZIndex = lane === "t" ? 15 : lane === "m" ? 25 : 35;

  return (
    <>
      <motion.div
        animate={WaterFourData.animate}
        transition={WaterFourData.transition}
        style={{ left: initialX, zIndex }}
        className={className}
      >
        <div style={{ zIndex }}>
          {toggle && (
            <AnimatePresence>
              <KratongPopup info={data.wish} onToggle={setToggle} />
            </AnimatePresence>
          )}
          <DisplayKratong
            height={width > 640 ? size[0] : size[1]}
            zIndex={zIndex}
            onClick={() => setToggle(!toggle)}
            highlighted={highlighted}
            data={data}
          />
        </div>
        {/* <p className="w-full absolute z-[99] bottom-[-225px] text-white font-ui font-light text-center">
          {data.wish.name}
        </p> */}
      </motion.div>
    </>
  );
};

interface DrKratongProps {
  data: KratongData;
  height: string;
  zIndex: [number, number];
  className: string;
}

export const DraggableKratong: NextPage<DrKratongProps> = ({ className, data, height, zIndex }) => {
  const { width } = useWindowDimensions();
  const [finished, setFinished] = useState(false);
  const [x, setX] = useState(112);
  const [toggle, setToggle] = useState(false);
  const [hover, setHover] = useState(false);

  const selected = data.kratong;

  // todo map x, y values to other viewports using useTransform

  // 320
  // 400
  // 450

  const speedX = 1.25;

  useAnimationFrame(
    (delta: number) => {
      // delta - time elapsed in ms
      setX((prevX) => (prevX < width + 1400 ? prevX + delta * 0.01 * speedX : prevX - (random(20, 200) + 1840)));
    },
    (delta: number) => {
      return false;
    },
    finished
  );

  useEffect(() => {
    if (finished) {
      localStorage.setItem("released", "true");
    }
  }, [finished]);

  const elementProps = () => {
    if (finished) {
      return {
        animate: WaterFourData.animate,
        transition: WaterFourData.transition,
      };
    } else {
      return {};
    }
  };

  return (
    <motion.div
      {...elementProps()}
      style={{
        zIndex: finished ? zIndex[1] : zIndex[0],
        top: `${!finished ? (width > 640 ? -146 : -116) : width > 640 ? -66 : -60}px`,
        left: `${x}px`,
      }}
      className={classNames("absolute", className)}
    >
      {toggle && data?.wish && (
        <AnimatePresence>
          <KratongPopup info={data.wish} onToggle={setToggle} />
        </AnimatePresence>
      )}
      <motion.div
        drag={!finished}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.65}
        onClick={() => setToggle(!toggle)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onDrag={(e, { point }) => {
          if (
            (point.x > 320 && width < 640) ||
            (point.x > 400 && width >= 640 && width < 1024) ||
            (point.x > 450 && width >= 1024)
          ) {
            setFinished(true);
          }
        }}
        style={{
          ["--size" as string]: height,
          ["--z-index" as string]: finished ? zIndex : 35,
          zIndex: finished ? zIndex[1] : zIndex[0],
        }}
        className={classNames(styles["kratong"])}
      >
        {data?.wish && <DisplayName name={data.wish.name} />}
        {hover && <div className={styles["aura"]}></div>}
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
      </motion.div>
    </motion.div>
  );
};
