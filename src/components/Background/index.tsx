import type { NextPage } from "next";
import { LightWater } from "@components/Water";
import styles from "@styles/modules/Background.module.scss";

export const SalaFrontBG: NextPage = () => {
  return (
    <>
      <div className={styles["background"]}>
        <div className="sky-l">
          <div className={styles["cloud-1"]}></div>
          <div className={styles["cloud-2"]}></div>
        </div>
        <div className="sky-r">
          <div className="moon"></div>
          <div className="cloud-1"></div>
          <div className="cloud-2"></div>
        </div>
        <div className={styles["overlay"]}></div>
        <div className={styles["water"]}>
          <LightWater />
        </div>
        <img className={styles["sala"]} src="/assets/images/scene/sala-front.png" alt="ศาลา" />
      </div>
    </>
  );
};
