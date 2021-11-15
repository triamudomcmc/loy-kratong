import type { NextPage } from "next";
import styles from "@styles/modules/LoyKratong.module.scss";
import { WaterFour, WaterOne, WaterThree, WaterTwo } from "@components/Water";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cloud } from "@components/Vector/cloud";
import classNames from "classnames";

const LoyKratongBG: NextPage = () => {
  return (
    <div className={styles["loy-scene"]}>
      <div className={styles["sky"]}>
        <div className={styles["clouds"]}>
          <div className="w-[150px] sm:w-[20%] max-w-[200px] absolute z-[3] left-[-50px] top-[75px] sm:top-[55px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[125px] sm:w-[15%] max-w-[175px] absolute z-[3] left-[75px] top-[123px] sm:top-[103px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[150px] sm:w-[20%] max-w-[200px] absolute z-[3] left-[155px] top-[75px] sm:top-[55px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[150px] sm:w-[20%] max-w-[200px] absolute z-[3] left-[275px] top-[95px] sm:top-[85px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[165px] sm:w-[30%] max-w-[200px] absolute z-[3] left-[535px] top-[55px] sm:top-[65px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[125px] sm:w-[15%] max-w-[175px] absolute z-[3] left-[421px] top-[49px] sm:top-[103px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[150px] sm:w-[20%] max-w-[200px] absolute z-[3] left-[695px] top-[75px] sm:top-[55px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[150px] sm:w-[20%] max-w-[200px] absolute z-[3] left-[815px] top-[95px] sm:top-[85px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[165px] sm:w-[30%] max-w-[200px] absolute z-[3] left-[975px] top-[55px] sm:top-[65px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[150px] sm:w-[20%] max-w-[200px] absolute z-[3] left-[1024px] top-[75px] sm:top-[55px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[125px] sm:w-[15%] max-w-[175px] absolute z-[3] left-[1234px] top-[123px] sm:top-[103px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[150px] sm:w-[20%] max-w-[200px] absolute z-[3] left-[1425px] top-[75px] sm:top-[55px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[150px] sm:w-[20%] max-w-[200px] absolute z-[3] left-[1530px] top-[95px] sm:top-[85px] opacity-[15%] ">
            <Cloud />
          </div>
          <div className="w-[165px] sm:w-[30%] max-w-[200px] absolute z-[3] left-[1673px] top-[55px] sm:top-[65px] opacity-[15%] ">
            <Cloud />
          </div>
        </div>

        {/* <div className="absolute top-1/2 w-full object-cover">
          <Image src="/assets/images/scene/buildings.png" width={2328} height={318} />
        </div> */}

        <div className={styles["moon"]}>
          <div className={styles["img"]}>
            <Image src="/assets/images/scene/moon.gif" width={2048} height={2048} objectFit="cover" alt="ดวงจันทร์" />
          </div>
          <div className={styles["blur"]}>
            <Image src="/assets/images/scene/blur.png" width={3414} height={3414} objectFit="cover" alt="ดวงจันทร์" />
          </div>
        </div>
      </div>

      <div className={styles["sala-side"]}>
        <Image width={1350} height={1382} objectFit="contain" src="/assets/images/scene/sala-side.png" alt="ศาลา" />
      </div>

      <div className={styles["background"]}>
        <>
          <div className={classNames("absolute", styles["waterfour-container"])}>
            <div className="relative">
              <WaterFour />
            </div>
          </div>

          <div className={classNames("absolute", styles["waterthree-container"])}>
            <div className="relative">
              <WaterThree />
            </div>
          </div>

          <div className={classNames("absolute", styles["watertwo-container"])}>
            <div className="relative">
              <WaterTwo />
            </div>
          </div>

          <div className={classNames("absolute", styles["waterone-container"])}>
            <div className="relative">
              <WaterOne />
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default LoyKratongBG;
