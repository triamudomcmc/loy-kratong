import type { NextPage } from "next";
import styles from "@styles/modules/CUPSAA.module.scss";
import { SalaFrontBG } from "@components/Background";
import { Create } from "./create";
import {KratongData} from "@components/CUPSAA/create";

export const CUPSAAPage: NextPage<{data: KratongData}> = ({data}) => {
  return (
    <>
      <article className={styles["scene"]}>
        <SalaFrontBG />
        <Create idata={data} />
      </article>
    </>
  );
};
