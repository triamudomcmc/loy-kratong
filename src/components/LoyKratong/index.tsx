import type { NextPage } from "next";
import { LoyKratongBG } from "@components/Background";
import styles from "@styles/modules/LoyKratong.module.scss";

export const LoyKratongPage: NextPage = () => {
  return (
    <article className={styles["loy-scene"]}>
      <LoyKratongBG />
    </article>
  );
};
