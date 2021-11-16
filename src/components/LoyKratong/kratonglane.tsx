import { Kratong } from "@components/Kratong/kratong";
import { WaterFourData } from "@map/animations";
import { useAnimationFrame } from "@utils/useAnimationFrame";
import { useWindowDimensions } from "@utils/useWindowDimensions";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { NextPage } from "next";
import { useRef, useState } from "react";
import { DisplayKratong } from "./displaykratong";
import {KratongData, ResultData} from "@components/Kratong/create";

const random = (from:number, to:number) => {
  return Math.floor(Math.random() * to) + from
}
const MovingKratong: NextPage<{initialX?: number,speed?: number, data: KratongData, className: string, size: Array<string>}> = ({initialX= 0,speed = 0.5, data, className, size}) => {
  const { width, height } = useWindowDimensions();
  const [x, setX] = useState(initialX);

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
        style={{ left: x }}
        className={className}
      >
        <DisplayKratong
          height={width > 640 ? size[0] : size[1]}
          zIndex={25}
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
}

export const TopLane: NextPage<{entities: ResultData[]}> = ({entities}) => {
  return (
    <>
      {entities && entities.map((e, i) => {
        return <MovingKratong key={`lane-t-${i}`} className={"absolute left-[550px] top-[0px] z-[25] brightness-50"} initialX={(i * random(260, 360)) + random(80 ,120)} data={e} size={["125px", "75px"]}/>
      })}
    </>
  );
};

export const MidLane: NextPage<{entities: ResultData[]}> = ({entities}) => {

  return (
    <>
      {entities && entities.map((e, i) => {
        return <MovingKratong key={`lane-m-${i}`} className={"absolute left-[250px] top-[-64px] z-[25] brightness-90"} initialX={(i * random(280, 320)) + random(200,320)} data={e} size={["175px", "125px"]}/>
      })}
    </>
  )
};

export const BotLane: NextPage<{entities: ResultData[]}> = ({entities}) => {

  return (
    <>
      {entities && entities.map((e, i) => {
        return <MovingKratong key={`lane-b-${i}`} className={"absolute left-[350px] top-[-64px] z-[25]"} initialX={(i * random(300, 360)) + random(60, 130)} data={e} size={["225px", "175px"]}/>
      })}
    </>
  )

};
