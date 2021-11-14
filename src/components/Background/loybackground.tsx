import type { NextPage } from "next";
import styles from "@styles/modules/LoyKratong.module.scss";
import { WaterFour, WaterOne, WaterThree, WaterTwo } from "@components/Water";
import Image from "next/image";

const LoyKratongBG: NextPage = () => {
  return (
    <>
      <div className={styles["background"]}>
        <div className={styles["clouds"]}></div>
        <div className={styles["moon"]}>
          <div className={styles["img"]}>
            <Image src="/assets/images/scene/moon.gif" width={2048} height={2048} objectFit="cover" />
          </div>
          <div className={styles["blur"]}>
            <Image src="/assets/images/scene/blur.png" width={3414} height={3414} objectFit="cover" />
          </div>
        </div>

        <>
          <WaterFour />
          <WaterThree />
          <WaterTwo />
          <WaterOne />
        </>
      </div>
    </>
  );
};

export default LoyKratongBG;
