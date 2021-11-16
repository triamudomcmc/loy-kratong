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

const Mock = {
  kratong: {
    base: "banana-leaf",
    candles: "candle-green",
    decorations: "swan",
    flowers: "luck",
    signVariant: 0,
  },
  wish: {
    name: "hi",
    content: "tis content waz sponsored",
  },
};

interface KratongData {
  kratong: NSelected | PSelected | CSelected;
  wish: Wish;
}

interface KratongProps {
  data: KratongData;
}

const TopMovingKratong: NextPage<KratongProps> = ({ data }) => {
  const { width, height } = useWindowDimensions();
  const [toggle, setToggle] = useState(false);
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
        style={{ left: x, zIndex: 15 }}
        className="absolute top-[-5px] brightness-50 hover:brightness-100 active:brightness-110"
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
                <p className="font-medium text-[#2256A3] mb-2">{data.wish.name}</p>
                <hr className="w-1/2 border-[0.5px] border-[#2256A3] mb-4" />
                <p className="text-sm font-light text-[#2256A3]">{data.wish.content}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        <DisplayKratong
          height={width > 640 ? "125px" : "75px"}
          zIndex={15}
          onClick={() => setToggle(!toggle)}
          data={data.kratong as NSelected}
        />
      </motion.div>
    </>
  );
};

export const TopLane: NextPage = () => {
  return (
    <>
      <TopMovingKratong data={Mock} />
    </>
  );
};

const MidMovingKratong: NextPage<KratongProps> = ({ data }) => {
  const { width, height } = useWindowDimensions();
  const [toggle, setToggle] = useState(false);
  const [x, setX] = useState(250);

  useAnimationFrame(
    (delta: number) => {
      // delta - time elapsed in ms
      setX((prevX) => prevX + delta * 0.01 * 0.45);
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
        style={{ left: x, zIndex: 25 }}
        className="absolute top-[-44px] brightness-[60%] hover:brightness-100 active:brightness-110"
      >
        {toggle && (
          <AnimatePresence>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              className="w-[275px] absolute z-[99] left-[63px] top-[-165px]"
            >
              <MessageBox />
              <XIcon
                className="w-5 h-5 text-white absolute right-4 top-4 cursor-pointer hover:text-gray-100"
                onClick={() => setToggle(false)}
              />
              <div className="absolute top-4 left-4 flex flex-col min-w-1/4">
                <p className="font-medium text-[#2256A3] mb-2">{data.wish.name}</p>
                <hr className="w-1/2 border-[0.5px] border-[#2256A3] mb-4" />
                <p className="text-sm font-light text-[#2256A3]">{data.wish.content}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        <DisplayKratong
          height={width > 640 ? "175px" : "125px"}
          zIndex={25}
          onClick={() => setToggle(!toggle)}
          data={data.kratong as NSelected}
        />
      </motion.div>
    </>
  );
};

export const MidLane: NextPage = () => {
  return (
    <>
      <MidMovingKratong data={Mock} />
    </>
  );
};

const BotMovingKratong: NextPage<KratongProps> = ({ data }) => {
  const { width, height } = useWindowDimensions();
  const [toggle, setToggle] = useState(false);
  const [x, setX] = useState(250);

  useAnimationFrame(
    (delta: number) => {
      // delta - time elapsed in ms
      setX((prevX) => prevX + delta * 0.01 * 0.425);
    },
    (delta: number) => {
      return x > width + 750;
    }
  );

  return (
    <div>
      <motion.div
        animate={WaterFourData.animate}
        transition={WaterFourData.transition}
        style={{ left: x, zIndex: 35 }}
        className="absolute top-[-44px] brightness-90 hover:brightness-100 active:brightness-110"
      >
        {toggle && (
          <AnimatePresence>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              className="w-[300px] absolute z-[99] left-[63px] top-[-165px]"
            >
              <MessageBox />
              <XIcon
                className="w-5 h-5 text-white absolute right-4 top-4 cursor-pointer hover:text-gray-100"
                onClick={() => setToggle(false)}
              />
              <div className="absolute top-4 left-4 flex flex-col min-w-1/4">
                <p className="font-medium text-[#2256A3] mb-2">{data.wish.name}</p>
                <hr className="w-1/2 border-[0.5px] border-[#2256A3] mb-4" />
                <p className="text-sm font-light text-[#2256A3]">{data.wish.content}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        <DisplayKratong
          height={width > 640 ? "175px" : "125px"}
          zIndex={35}
          onClick={() => setToggle(!toggle)}
          data={data.kratong as NSelected}
        />
      </motion.div>
    </div>
  );
};

export const BotLane: NextPage = () => {
  return (
    <>
      <BotMovingKratong data={Mock} />
    </>
  );
};
