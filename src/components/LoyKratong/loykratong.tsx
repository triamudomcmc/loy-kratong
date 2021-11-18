import type { NextPage } from "next";
import styles from "@styles/modules/LoyKratong.module.scss";
import { WaterFour, WaterOne, WaterThree, WaterTwo } from "@components/Water";
import Image from "next/image";
import { Cloud } from "@components/Vector/cloud";
import classNames from "classnames";
import { BotLane, Fish, MidLane, TopLane } from "./kratonglane";
import { ResultData } from "@components/Kratong/create";
import { motion } from "framer-motion";
import { Kratong } from "@components/Kratong/kratong";
import { CUPSAAIdleKratong, DraggableKratong, IdleKratong, PrincipalIdleKratong } from "./displaykratong";
import { useWindowDimensions } from "@utils/useWindowDimensions";
import { CUPSAAKratongData, PrincipalKratongData, RongPrincipalKratongsData } from "@map/realkratong";
import { useEffect, useState } from "react";

function random(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array: Array<any>) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function chunk(arr: Array<any>, cCount: number) {
  const len = Math.ceil(arr.length / cCount);
  let chunks = [],
    i = 0,
    n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }

  return chunks;
}

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

const LoyKratongScene: NextPage<{ entities: ResultData[] }> = ({ entities }) => {
  const { width, height } = useWindowDimensions();
  const [loy, setloy] = useState(false);
  const [prevEntity, setPrevEntity] = useState<undefined | ResultData>(undefined);

  useEffect(() => {
    setloy(localStorage.getItem("released") === "true");
    setPrevEntity(JSON.parse(localStorage.getItem("entity") || "{}"));
  }, []);

  shuffle(entities);
  const lanes = chunk(entities, 3);

  // @ts-ignore
  return (
    <div className={styles["loy-scene"]}>
      <div className={styles["sky"]}>
        <div className={styles["clouds"]}>
          <div className="w-[150px] sm:w-[125px] absolute z-[3] left-[-50px] top-[75px] sm:top-[55px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[125px] sm:w-[105px] absolute z-[3] left-[75px] top-[123px] sm:top-[103px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[150px] sm:w-[125px] absolute z-[3] left-[155px] top-[75px] sm:top-[55px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[150px] sm:w-[125px] absolute z-[3] left-[275px] top-[95px] sm:top-[85px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[165px] sm:w-[135px] absolute z-[3] left-[535px] top-[55px] sm:top-[65px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[125px] sm:w-[105px] absolute z-[3] left-[421px] top-[49px] sm:top-[103px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[150px] sm:w-[125px] absolute z-[3] left-[695px] top-[75px] sm:top-[55px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[150px] sm:w-[125px] absolute z-[3] left-[815px] top-[95px] sm:top-[85px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[165px] sm:w-[135px] absolute z-[3] left-[975px] top-[55px] sm:top-[65px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[150px] sm:w-[125px] absolute z-[3] left-[1024px] top-[75px] sm:top-[55px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[125px] sm:w-[105px] absolute z-[3] left-[1234px] top-[123px] sm:top-[103px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[150px] sm:w-[125px] absolute z-[3] left-[1425px] top-[75px] sm:top-[55px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[150px] sm:w-[125px] absolute z-[3] left-[1530px] top-[95px] sm:top-[85px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[165px] sm:w-[135px] absolute z-[3] left-[1673px] top-[55px] sm:top-[65px] opacity-[15%] ">
            <Cloud />
          </div>
        </div>

        <div className={styles["fireworks-1"]}>
          <Image src="/assets/images/scene/fireworks-blue.gif" width={441} height={480} />
        </div>

        <div className={styles["fireworks-2"]}>
          <Image src="/assets/images/scene/fireworks-orange.gif" width={441} height={481} />
        </div>

        <div className={styles["fireworks-3"]}>
          <Image src="/assets/images/scene/fireworks-purple.gif" width={441} height={481} />
        </div>

        <div className={styles["fireworks-4"]}>
          <Image src="/assets/images/scene/fireworks-white.gif" width={1280} height={960} />
        </div>

        <div className={styles["fireworks-5"]}>
          <Image src="/assets/images/scene/fireworks-yellow-single.gif" width={692} height={754} />
        </div>

        <div className={styles["fireworks-6"]}>
          <Image src="/assets/images/scene/fireworks-red.gif" width={692} height={754} />
        </div>

        <div className={styles["moon"]}>
          <div className={styles["img"]}>
            <Image src="/assets/images/scene/moon.gif" width={2048} height={2048} objectFit="cover" alt="ดวงจันทร์" />
          </div>
          <div className={styles["blur"]}>
            <Image src="/assets/images/scene/blur.png" width={3414} height={3414} objectFit="cover" alt="ดวงจันทร์" />
          </div>
        </div>
      </div>

      <div className={styles["background"]}>
        <div className={classNames("absolute", styles["waterfour-container"])}>
          <div className="relative">
            <div className={styles["buildings"]}>
              <div className="w-[125%]">
                <Image src="/assets/images/scene/buildings.png" width={2328} height={318} objectFit="cover" alt="ตึก" />
              </div>
            </div>
            <TopLane entities={lanes[0]} />
            <WaterFour />
          </div>
        </div>

        <div className={classNames("absolute", styles["waterthree-container"])}>
          <div className="relative">
            <IdleKratong
              highlighted
              className={
                "transition-opacity absolute left-[250px] top-[-50px] sm:top-[-90px] lg:top-[-46px] hover:brightness-100 active:brightness-110"
              }
              lane="m"
              size={["155px", "115px"]}
              initialX={width > 640 ? 450 : 350}
              data={RongPrincipalKratongsData[random(0, 3)]}
            />
            <CUPSAAIdleKratong
              highlighted
              initialX={width > 640 ? 865 : 565}
              data={CUPSAAKratongData}
              lane="m"
              size={["185px", "135px"]}
              className={
                "transition-opacity absolute top-[-48px] sm:top-[-90px] lg:top-[-44px] hover:brightness-100 active:brightness-110"
              }
            />
            <MidLane entities={lanes[1]} />
            <WaterThree />
          </div>
        </div>

        <div className={classNames("absolute", styles["watertwo-container"])}>
          <div className="relative">
            <div className="relative">
              <div className={styles["sala-side"]}>
                <Image
                  width={1350}
                  height={1382}
                  objectFit="contain"
                  src="/assets/images/scene/sala-side.png"
                  alt="ศาลา"
                />
              </div>
              {!loy && prevEntity && prevEntity?.kratong && prevEntity?.wish && (
                <DraggableKratong
                  className={classNames(styles["loying-kratong"], width > 640 && "ml-16")}
                  data={prevEntity}
                  height={width > 640 ? "170px" : "155px"}
                  zIndex={[42, 39]}
                />
              )}
            </div>
            <PrincipalIdleKratong
              className="transition-opacity absolute top-[-54px] sm:top-[-102px] lg:top-[-68px] brightness-[99%] hover:brightness-100 active:brightness-110"
              lane="b"
              size={["200px", "170px"]}
              initialX={width > 640 ? 650 : 440}
              data={PrincipalKratongData}
            />
            <BotLane entities={loy ? [...lanes[2], prevEntity] : lanes[2]} />
            <WaterTwo />
          </div>
        </div>

        <div className={classNames("absolute", styles["waterone-container"])}>
          <div className="relative">
            <WaterOne />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyKratongScene;
