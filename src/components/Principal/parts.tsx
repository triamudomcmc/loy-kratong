import type { NextPage } from "next";
import { KratongVariantPartType } from "@map/kratong";
import styles from "@styles/modules/Principal.module.scss";

interface KratongVariantPartProps {
  part: KratongVariantPartType;
  selected: string;
}

export const PrincipalPart: NextPage<KratongVariantPartProps> = ({ part, selected }) => {
  return (
    <div className={styles["container"]} style={{ display: selected === part.id ? "inline-block" : "none" }}>
      <img className={styles["img"]} src={part.variants[0]} alt={part.name} />
    </div>
  );
};
