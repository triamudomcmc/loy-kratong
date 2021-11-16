import type { NextPage } from "next";
import styles from "@styles/modules/LoyKratong.module.scss";
import { WaterFour, WaterOne, WaterThree, WaterTwo } from "@components/Water";
import Image from "next/image";
import { Cloud } from "@components/Vector/cloud";
import classNames from "classnames";
import { BotLane, MidLane, TopLane } from "./kratonglane";
import { ResultData } from "@components/Kratong/create";

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

const LoyKratongBG: NextPage<{ entities: ResultData[] }> = ({ entities }) => {
  shuffle(entities);
  const lanes = chunk(entities, 3);

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
          <Image src="/assets/images/scene/fireworks-white.gif" width={1280} height={960} />
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

      {/* <div className={styles["sala-side"]}>
        <Image width={1350} height={1382} objectFit="contain" src="/assets/images/scene/sala-side.png" alt="ศาลา" />
      </div> */}

      <div className={styles["background"]}>
        <div className={classNames("absolute", styles["waterfour-container"])}>
          <div className="relative">
            <div className={styles["buildings"]}>
              <div className="w-[125%]">
                <Image src="/assets/images/scene/buildings.png" width={2328} height={318} objectFit="cover" alt="ตึก" />
              </div>
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
            <MidLane entities={lanes[1]} />
            <WaterThree />
          </div>
        </div>

        <div className={classNames("absolute", styles["watertwo-container"])}>
          <div className="relative">
            <BotLane entities={lanes[2]} />
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

export default LoyKratongBG;
