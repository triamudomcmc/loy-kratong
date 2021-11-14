import type { NextPage } from "next";
import styles from "@styles/modules/LoyKratong.module.scss";
import { WaterFour, WaterOne, WaterThree, WaterTwo } from "@components/Water";
import Image from "next/image";

const LoyKratongBG: NextPage = () => {
  return (
    <div className={styles["loy-scene"]}>
      <div className={styles["sky"]}>
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
        <>
          <WaterFour />
          <WaterThree />
          <WaterTwo />
          <WaterOne />
        </>
      </div>
    </div>
  );
};

export default LoyKratongBG;
