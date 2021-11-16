import { Selected as CSelected } from "@components/CUPSAA/create";
import { Selected as NSelected, Wish } from "@components/Kratong/create";
import { Selected as PSelected } from "@components/Principal/create";
import { XIcon } from "@heroicons/react/solid";
import { WaterFourData } from "@map/animations";
import { useAnimationFrame } from "@utils/useAnimationFrame";
import { useWindowDimensions } from "@utils/useWindowDimensions";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";
import type { NextPage } from "next";
import { useRef, useState } from "react";
import { DisplayKratong, MessageBox } from "./displaykratong";
import { KratongData, ResultData } from "@components/Kratong/create";
import classNames from "classnames";

const random = (from: number, to: number) => {
  return Math.floor(Math.random() * to) + from;
};
const MovingKratong: NextPage<{
  initialX?: number;
  speed?: number;
  data: KratongData;
  className: string;
  size: Array<string>;
  lane: string;
}> = ({ initialX = 0, speed = 0.5, data, className, size, lane }) => {
  const { width, height } = useWindowDimensions();
  const [toggle, setToggle] = useState(false);
  const [x, setX] = useState(initialX);

  const zIndex = lane === "t" ? 15 : lane === "m" ? 25 : 35;

  useAnimationFrame(
    (delta: number) => {
      // delta - time elapsed in ms
      setX((prevX) => (prevX < 1400 ? prevX + delta * 0.01 * speed : prevX - (random(20, 200) + 1840)));
    },
    (delta: number) => {
      return false;
    }
  );

  return (
    <>
      <motion.div
        animate={WaterFourData.animate}
        transition={WaterFourData.transition}
        style={{ left: x, zIndex }}
        className={className}
      >
        {toggle && (
          <AnimatePresence>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              className="w-[250px] absolute z-[99] left-[63px] top-[-165px]"
            >
              <MessageBox />
              <XIcon
                className="w-5 h-5 text-white absolute right-4 top-4 cursor-pointer hover:text-gray-100"
                onClick={() => setToggle(false)}
              />
              <div className="absolute top-4 left-4 flex flex-col min-w-1/4">
                <p className="font-ui font-medium text-[#2256A3] mb-2">{data.wish.name}</p>
                <hr className="w-1/2 border-[0.5px] border-[#2256A3] mb-4" />
                <p className="font-ui text-sm font-light text-[#2256A3]">{data.wish.content}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        <DisplayKratong
          height={width > 640 ? size[0] : size[1]}
          zIndex={zIndex}
          onClick={() => setToggle(!toggle)}
          data={data}
        />
      </motion.div>
    </>
  );
};

const sample = {
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
};

export const TopLane: NextPage<{ entities: ResultData[] }> = ({ entities }) => {
  return (
    <>
      {entities &&
        entities.map((e, i) => {
          return (
            <MovingKratong
              key={`lane-t-${i}`}
              className={
                "absolute left-[550px] top-0 sm:top-[-5px] brightness-50 hover:brightness-100 active:brightness-110"
              }
              initialX={i * random(260, 360) + random(80, 120)}
              data={e}
              size={["105px", "65px"]}
              lane="t"
            />
          );
        })}
    </>
  );
};

export const MidLane: NextPage<{ entities: ResultData[] }> = ({ entities }) => {
  return (
    <>
      {entities &&
        entities.map((e, i) => {
          return (
            <MovingKratong
              key={`lane-m-${i}`}
              className={
                "absolute left-[250px] top-[-24px] sm:top-[-64px] brightness-[60%] hover:brightness-100 active:brightness-110"
              }
              initialX={i * random(280, 320) + random(200, 320)}
              data={e}
              size={["155px", "105px"]}
              lane="m"
            />
          );
        })}
    </>
  );
};

export const BotLane: NextPage<{ entities: ResultData[] }> = ({ entities }) => {
  return (
    <>
      {entities &&
        entities.map((e, i) => {
          return (
            <MovingKratong
              key={`lane-b-${i}`}
              className={"absolute left-[350px] top-[-64px] brightness-90 hover:brightness-100 active:brightness-110"}
              initialX={i * random(300, 360) + random(60, 130)}
              data={e}
              size={["205px", "155px"]}
              lane="b"
            />
          );
        })}
    </>
  );
};
