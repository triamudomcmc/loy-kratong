import type { NextPage } from "next";
import styles from "@styles/modules/CUPSAA.module.scss";
import { SalaFrontBG } from "@components/Background";
import { Create } from "./create";

export const CUPSAAPage: NextPage = () => {
  return (
    <>
      <article className={styles["scene"]}>
        <SalaFrontBG />
        <Create />
      </article>
    </>
  );
};
