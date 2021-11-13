import type { NextPage } from "next";
import styles from "@styles/modules/Principal.module.scss";
import { SalaFrontBG } from "@components/Background";
import { Create } from "./create";
import {KratongData} from "@components/Principal/create";

export const PrincipalPage: NextPage<{data: KratongData}> = ({data}) => {
  return (
    <>
      <article className={styles["scene"]}>
        <SalaFrontBG />
        <Create idata={data}/>
      </article>
    </>
  );
};
