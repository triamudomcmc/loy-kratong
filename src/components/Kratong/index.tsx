import type { NextPage } from "next";
import styles from "@styles/modules/Kratong.module.scss";
import { SalaFrontBG } from "@components/Background";
import { Create } from "./create";

export const KratongPage: NextPage = () => {
  return (
    <>
      <article className={styles["scene"]}>
        <SalaFrontBG />
        <Create />
      </article>
    </>
  );
};
