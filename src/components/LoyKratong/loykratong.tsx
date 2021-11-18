import type { NextPage } from "next";
import styles from "@styles/modules/LoyKratong.module.scss";
import { WaterFour, WaterOne, WaterThree, WaterTwo } from "@components/Water";
import Image from "next/image";
import { Cloud } from "@components/Vector/cloud";
import classNames from "classnames";
import { BotLane, Fish, MidLane, MovingKratong, TopLane } from "./kratonglane";
import { ResultData } from "@components/Kratong/create";
import { AnimatePresence, motion } from "framer-motion";
import { Kratong } from "@components/Kratong/kratong";
import { CUPSAAIdleKratong, DraggableKratong, IdleKratong, PrincipalIdleKratong } from "./displaykratong";
import { useWindowDimensions } from "@utils/useWindowDimensions";
import { CUPSAAKratongData, PrincipalKratongData, RongPrincipalKratongsData } from "@map/realkratong";
import { useEffect, useState } from "react";
import { Pantoloy } from "@components/Vector/pantoloy";
import Router from "next/router";

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
  const [localLoy, setLocalLoy] = useState(false);
  const [done, setDone] = useState(false);
  const [prevEntity, setPrevEntity] = useState<undefined | ResultData>(undefined);

  useEffect(() => {
    setloy(localStorage.getItem("released") === "true");
    setLocalLoy(localStorage.getItem("released") === "true");
    setPrevEntity(JSON.parse(localStorage.getItem("entity") || "{}"));
    setDone(true);
  }, []);

  shuffle(entities);
  const lanes = chunk(entities, 3);

  // @ts-ignore
  return (
    // <div className={styles["loy-scene"]}>
    <div className="w-[250vw] sm:w-[175vw]">
      {!localLoy && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="blinking-text w-[250px] absolute bottom-[75px] left-[50px] z-[99]"
          >
            <Pantoloy />
          </motion.div>
        </AnimatePresence>
      )}
      {/* <div className={styles["sky"]}> */}
      <div className="fixed w-[100vw] top-0 z-[9] xl:top-[-31px]">
        {/* <div className={styles["clouds"]}> */}
        <div className="absolute w-full top-[50px] z-[4]">
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

        {/* <div className={styles["fireworks-1"]}> */}
        <div className="absolute w-[225px] h-[225px] top-[75px] left-[9px] z-[10]">
          <Image src="/assets/images/scene/fireworks-blue.gif" width={441} height={480} />
        </div>

        {/* <div className={styles["fireworks-2"]}> */}
        <div className="absolute w-[174px] h-[200px] top-[105px] left-[189px] z-[10]">
          <Image src="/assets/images/scene/fireworks-orange.gif" width={441} height={481} />
        </div>

        {/* <div className={styles["fireworks-3"]}> */}
        <div className="absolute w-[174px] h-[200px] top-[55px] left-[551px] z-[10]">
          <Image src="/assets/images/scene/fireworks-purple.gif" width={441} height={481} />
        </div>

        {/* <div className={styles["fireworks-4"]}> */}
        <div className="absolute w-[305px] h-[205px] top-[45px] left-[741px] z-[10]">
          <Image src="/assets/images/scene/fireworks-white.gif" width={1280} height={960} />
        </div>

        {/* <div className={styles["fireworks-5"]}> */}
        <div className="absolute w-[225px] h-[419px] top-[55px] right-[401px] z-[10]">
          <Image src="/assets/images/scene/fireworks-yellow-single.gif" width={692} height={754} />
        </div>

        {/* <div className={styles["fireworks-6"]}> */}
        <div className="absolute w-[185px] h-[185px] top-[55px] right-[19px] z-[10]">
          <Image src="/assets/images/scene/fireworks-red.gif" width={692} height={754} />
        </div>

        {/* <div className={styles["moon"]}> */}
        <div className="absolute w-[150px] h-[150px] right-[10vw] top-[35px] z-[8]">
          {/* <div className={styles["img"]}> */}
          <div className="absolute w-[65%] left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-[7]">
            <Image src="/assets/images/scene/moon.gif" width={2048} height={2048} objectFit="cover" alt="ดวงจันทร์" />
          </div>
          {/* <div className={styles["blur"]}> */}
          <div className="absolute top-0 z-[6]">
            <Image src="/assets/images/scene/blur.png" width={3414} height={3414} objectFit="cover" alt="ดวงจันทร์" />
          </div>
        </div>
      </div>

      {/* <div className={styles["background"]}> */}
      <div className="h-[100vh] bg-black bg-loy relative overflow-hidden w-[250vw] sm:w-[175vw]">
        {/* <div className={classNames("absolute", styles["waterfour-container"])}> */}
        <div className={done ? "absolute left-[-50px] bottom-[70px] custom:bottom-[70px] lg:bottom-[-150px]" : ""}>
          <div className="relative">
            {/* <div className={styles["buildings"]}> */}
            <div className="absolute z-[5] flex width-[500vw] top-[-110px] custom:top-[-138px] sm:top-[-231px] lg:top-[-240px]  sm:w-[353vw] lg:w-[253vw]">
              <div className="w-[125%]">
                <Image src="/assets/images/scene/buildings.png" width={2328} height={318} objectFit="cover" alt="ตึก" />
              </div>
            </div>
            <TopLane entities={lanes[0]} />
            <WaterFour />
          </div>
        </div>

        {/* <div className={classNames("absolute", styles["waterthree-container"])}> */}
        <div className={done ? "absolute left-[-50px] bottom-[20px] custom:bottom-[20px] lg:bottom-[-220px]" : ""}>
          <div className="relative">
            <IdleKratong
              highlighted
              className={
                "transition-opacity absolute left-[250px] top-[-50px] sm:top-[-90px] lg:top-[-46px] hover:brightness-100 active:brightness-110"
              }
              lane="m"
              size={["155px", "115px"]}
              initialX={width > 640 ? 550 : 350}
              data={RongPrincipalKratongsData[random(0, 3)]}
            />
            <CUPSAAIdleKratong
              highlighted
              initialX={width > 640 ? 965 : 665}
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

        {/* <div className={classNames("absolute", styles["watertwo-container"])}> */}
        <div className={done ? "absolute left-[-50px] bottom-[-40px] custom:bottom-[-30px] lg:bottom-[-315px]" : ""}>
          <div className="relative">
            <div className="relative">
              {/* <div className={styles["sala-side"]}> */}
              <div className="absolute left-[22px] z-[35] top-[-215px] w-[342px] max-w-[450px] select-none sm:top-[-334px] sm:w-[450px]">
                <Image
                  width={1350}
                  height={1382}
                  objectFit="contain"
                  src="/assets/images/scene/sala-side.png"
                  alt="ศาลา"
                />
              </div>
              {!localLoy && prevEntity && prevEntity?.kratong && prevEntity?.wish && (
                <DraggableKratong
                  setLoy={setLocalLoy}
                  // className={classNames(styles["loying-kratong"], width > 640 && "ml-16")}
                  className={classNames(
                    "absolute z-[36] top-[-88px] left-[112px] cursor-pointer sm:top-[-111px] sm:left-[183px]",
                    width > 640 && "ml-16"
                  )}
                  data={prevEntity}
                  height={width > 640 ? "170px" : "155px"}
                  zIndex={[100, 39]}
                />
              )}
            </div>
            <PrincipalIdleKratong
              className="transition-opacity absolute top-[-54px] sm:top-[-102px] lg:top-[-68px] brightness-[99%] hover:brightness-100 active:brightness-110"
              lane="b"
              size={["200px", "170px"]}
              initialX={width > 640 ? 750 : 490}
              data={PrincipalKratongData}
            />
            {localLoy && prevEntity && (
              <MovingKratong
                className={
                  "transition-opacity absolute left-[350px] top-[-54px] sm:top-[-88px] lg:top-[-40px] brightness-[90%] hover:brightness-100 active:brightness-110"
                }
                initialX={width > 640 ? 62 : -25}
                data={prevEntity}
                size={["170px", "155px"]}
                lane="b"
              />
            )}
            <BotLane entities={loy ? [...lanes[2], prevEntity] : lanes[2]} />
            <WaterTwo />
          </div>
        </div>

        {/* <div className={classNames("absolute", styles["waterone-container"])}> */}
        <div className={done ? "absolute left-[-50px] bottom-[-120px] custom:bottom-[-105px] lg:bottom-[-396px]" : ""}>
          <div className="relative">
            <WaterOne />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyKratongScene;
