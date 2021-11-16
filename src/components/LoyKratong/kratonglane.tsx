import { Kratong } from "@components/Kratong/kratong";
import { WaterFourData } from "@map/animations";
import { useAnimationFrame } from "@utils/useAnimationFrame";
import { useWindowDimensions } from "@utils/useWindowDimensions";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { NextPage } from "next";
import { useRef, useState } from "react";
import { DisplayKratong } from "./displaykratong";

const TopMovingKratong: NextPage = () => {
  const { width, height } = useWindowDimensions();
  const [x, setX] = useState(0);

  useAnimationFrame(
    (delta: number) => {
      // delta - time elapsed in ms
      setX((prevX) => prevX + delta * 0.01 * 0.5);
    },
    (delta: number) => {
      return x > width + 750;
    }
  );

  return (
    <>
      <motion.div
        animate={WaterFourData.animate}
        transition={WaterFourData.transition}
        style={{ left: x }}
        className="absolute left-[550px] top-[0px] z-[25] brightness-50"
      >
        <DisplayKratong
          height={width > 640 ? "125px" : "75px"}
          zIndex={25}
          data={{
            kratong: {
              base: "banana-leaf",
              candles: "candle-green",
              decorations: "swan",
              flowers: "luck",
              signVariant: 0,
            },
            wish: {
              name: "hi",
              content: "hi",
            },
          }}
        />
      </motion.div>
    </>
  );
};

export const TopLane: NextPage = () => {
  return (
    <>
      <TopMovingKratong />
    </>
  );
};

export const MidLane: NextPage = () => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      <motion.div
        animate={WaterFourData.animate}
        transition={WaterFourData.transition}
        className="absolute left-[250px] top-[-64px] z-[25] brightness-90"
      >
        <Kratong
          height={width > 640 ? "175px" : "125px"}
          zIndex={25}
          selected={{
            base: "banana-leaf",
            candles: "candle-green",
            decorations: "swan",
            flowers: "luck",
            signVariant: 0,
          }}
        />
      </motion.div>
    </>
  );
};

export const BotLane: NextPage = () => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      <motion.div
        animate={WaterFourData.animate}
        transition={WaterFourData.transition}
        className="absolute left-[350px] top-[-64px] z-[25]"
      >
        <Kratong
          height={width > 640 ? "225px" : "175px"}
          zIndex={25}
          selected={{
            base: "banana-leaf",
            candles: "candle-green",
            decorations: "swan",
            flowers: "luck",
            signVariant: 0,
          }}
        />
      </motion.div>
    </>
  );
};
