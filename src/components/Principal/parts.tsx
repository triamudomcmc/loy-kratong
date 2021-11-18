import type { NextPage } from "next";
import { KratongNormalPartType } from "@map/kratong";
import styles from "@styles/modules/Principal.module.scss";
import classNames from "classnames";

interface KratongNormalPartProps {
  part: KratongNormalPartType;
  selected: string;
}

export const PrincipalPart: NextPage<KratongNormalPartProps> = ({ part, selected }) => {
  return (
    <div
      className={classNames("select-none", styles["container"])}
      style={{ display: selected === part.id ? "inline-block" : "none" }}
    >
      <img className={classNames("select-none", styles["img"])} src={part.url} alt={part.name} />
    </div>
  );
};
