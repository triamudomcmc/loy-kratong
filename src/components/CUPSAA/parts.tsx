import type { NextPage } from "next";
import { KratongNormalPartType } from "@map/kratong";
import styles from "@styles/modules/CUPSAA.module.scss";
import classNames from "classnames";

interface KratongNormalPartProps {
  part: KratongNormalPartType;
  selected: string;
}

export const CUPSAAPart: NextPage<KratongNormalPartProps> = ({ part, selected }) => {
  return (
    <div
      className={classNames(styles["container"], "select-none")}
      style={{ display: selected === part.id ? "inline-block" : "none" }}
    >
      <img className={classNames("select-none", styles["img"])} src={part.url} alt={part.name} />
    </div>
  );
};
