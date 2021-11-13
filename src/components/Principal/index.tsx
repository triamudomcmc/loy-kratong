import type { NextPage } from "next";
import styles from "@styles/modules/Principal.module.scss";
import { SalaFrontBG } from "@components/Background";
import { Create } from "./create";

export const PrincipalPage: NextPage = () => {
  return (
    <>
      <article className={styles["scene"]}>
        <SalaFrontBG />
        <Create />
      </article>
    </>
  );
};
