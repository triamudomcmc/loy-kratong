import type { NextPage } from "next";
import TitleScreen from "./title";
import styles from "@styles/modules/Background.module.scss";
import classNames from "classnames";

export const Story: NextPage = () => {
  return (
    <>
      <div className={classNames("z-[-50]", styles["story-scene"])}></div>
      <TitleScreen />
    </>
  );
};
