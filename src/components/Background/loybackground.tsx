import type { NextPage } from "next";
import styles from "@styles/modules/Background.module.scss";
import { DarkWater } from "@components/Water";

const LoyKratongBG: NextPage = () => {
  return (
    <>
      <div className={styles["loy-scene"]}>
        <div className={styles["background"]}>
          <DarkWater />
        </div>
      </div>
    </>
  );
};

export default LoyKratongBG;
