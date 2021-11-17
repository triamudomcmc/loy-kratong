import type { NextPage } from "next";
import { KratongNormalPartType, KratongVariantPartType } from "@map/kratong";
import styles from "@styles/modules/Kratong.module.scss";
import classNames from "classnames";

interface KratongNormalPartProps {
  part: KratongNormalPartType;
  selected: string;
}

interface KratongVariantPartProps {
  part: KratongVariantPartType;
  selected: string;
  signVariant: number;
}

export const NormalPart: NextPage<KratongNormalPartProps> = ({ part, selected }) => {
  return (
    <div className={styles["container"]} style={{ display: selected === part.id ? "inline-block" : "none" }}>
      <img className={classNames(styles["img"], "select-none")} src={part.url} alt={part.name} />
    </div>
  );
};

export const Candle: NextPage<KratongNormalPartProps> = ({ part, selected }) => {
  return (
    <div className={styles["container"]} style={{ display: selected === part.id ? "inline-block" : "none" }}>
      <img className={classNames(styles["img"], "select-none")} src={part.url} alt={part.name} />
    </div>
  );
};

export const VariantPart: NextPage<KratongVariantPartProps> = ({ part, selected, signVariant }) => {
  return (
    <>
      {part.variants.map((variant: string, variantIdx) => {
        return (
          <div
            key={variantIdx}
            className={styles["container"]}
            style={{ display: selected === part.id && variantIdx === signVariant ? "inline-block" : "none" }}
          >
            <img className={classNames(styles["img"], "select-none")} src={variant} alt={part.name} />
          </div>
        );
      })}
    </>
  );
};

/*
{Object.keys(KratongMap.base).map((base: string) => {
  // @ts-ignore
  const part = KratongMap.base[base];
  if (part.type === "normal") {
    // @ts-ignore
    return <NormalPart key={base} part={KratongMap.base[base]} selected={selected.base} />;
  } else if (part.type === "variant")
    return <VariantPart key={base} part={part} selected={selected.base} />;
})}
*/
