import { XIcon } from "@heroicons/react/solid";
import { WaterFourData } from "@map/animations";
import { useAnimationFrame } from "@utils/useAnimationFrame";
import { useWindowDimensions } from "@utils/useWindowDimensions";
import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import { useState } from "react";
import { DisplayKratong, KratongPopup, MessageBox } from "./displaykratong";
import { KratongData, ResultData } from "@components/Kratong/create";
import classNames from "classnames";

function random(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const MovingKratong: NextPage<{
  initialX?: number;
  speed?: number;
  data: KratongData;
  className: string;
  size: Array<string>;
  lane: string;
}> = ({ initialX = 0, speed = 1.25, data, className, size, lane }) => {
  const { width, height } = useWindowDimensions();
  const [toggle, setToggle] = useState(false);
  const [x, setX] = useState(initialX);

  const zIndex = lane === "t" ? 15 : lane === "m" ? 25 : 35;
  const textZIndex = lane === "t" ? 31 : lane === "m" ? 41 : 51;

  useAnimationFrame(
    (delta: number) => {
      // delta - time elapsed in ms
      setX((prevX) => (prevX < width + 1400 ? prevX + delta * 0.01 * speed : prevX - (random(20, 200) + 1840)));
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
        style={{ left: x, zIndex: zIndex + 6 }}
        className="relative"
      >
        <div className={className} style={{ zIndex }}>
          {toggle && (
            <AnimatePresence>
              <KratongPopup info={data.wish} onToggle={setToggle} />
            </AnimatePresence>
          )}
          <DisplayKratong
            height={width > 640 ? size[0] : size[1]}
            zIndex={zIndex}
            onClick={() => setToggle(!toggle)}
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

export const TopLane: NextPage<{ entities: ResultData[] }> = ({ entities }) => {
  return (
    <>
      {entities &&
        entities.map((e, i) => {
          return (
            <MovingKratong
              key={`lane-t-${i}`}
              className={
                "transition-opacity absolute left-[550px] top-0 sm:top-[5px] brightness-50 hover:brightness-100 active:brightness-110"
              }
              initialX={i * random(260, 360) + random(640, 850)}
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
                "transition-opacity absolute left-[250px] top-[-48px] sm:top-[-64px] lg:top-[-44px] brightness-[60%] hover:brightness-100 active:brightness-110"
              }
              initialX={i * random(340, 580) + random(580, 740)}
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
              className={
                "transition-opacity absolute left-[350px] top-[-64px] sm:top-[-84px] lg:top-[-64px] brightness-90 hover:brightness-100 active:brightness-110"
              }
              initialX={i * random(300, 460) + random(640, 850)}
              data={e}
              size={["205px", "155px"]}
              lane="b"
            />
          );
        })}
    </>
  );
};
