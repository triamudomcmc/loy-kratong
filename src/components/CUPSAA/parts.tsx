import type { NextPage } from "next";
import { KratongNormalPartType } from "@map/kratong";
import styles from "@styles/modules/CUPSAA.module.scss";

interface KratongNormalPartProps {
  part: KratongNormalPartType;
  selected: string;
}

export const CUPSAAPart: NextPage<KratongNormalPartProps> = ({ part, selected }) => {
  return (
    <div className={styles["container"]} style={{ display: selected === part.id ? "inline-block" : "none" }}>
      <img className={styles["img"]} src={part.url} alt={part.name} />
    </div>
  );
};
