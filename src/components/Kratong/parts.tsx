import type { NextPage } from "next";
import { KratongNormalPartType, KratongVariantPartType } from "@map/kratong";
import styles from "@styles/modules/Kratong.module.scss";

interface KratongNormalPartProps {
  part: KratongNormalPartType;
  selected: string;
}

interface KratongVariantPartProps {
  part: KratongVariantPartType;
  selected: string;
}

export const NormalPart: NextPage<KratongNormalPartProps> = ({ part, selected }) => {
  return (
    <div className={styles["container"]} style={{ display: selected === part.id ? "inline-block" : "none" }}>
      <img className={styles["img"]} src={part.url} alt={part.name} />
    </div>
  );
};

export const Candle: NextPage<KratongNormalPartProps> = ({ part, selected }) => {
  return (
    <div className={styles["container"]} style={{ display: selected === part.id ? "inline-block" : "none" }}>
      <img className={styles["img"]} src={part.url} alt={part.name} />
    </div>
  );
};

export const VariantPart: NextPage<KratongVariantPartProps> = ({ part, selected }) => {
  return (
    <div className={styles["container"]} style={{ display: selected === part.id ? "inline-block" : "none" }}>
      <img className={styles["img"]} src={part.variants[0]} alt={part.name} />
    </div>
  );
};
