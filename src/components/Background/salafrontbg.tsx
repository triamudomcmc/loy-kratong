import type { NextPage } from "next";
import { LightWater } from "@components/Water";
import styles from "@styles/modules/Background.module.scss";
import Image from "next/image";
import { useWindowDimensions } from "@utils/document";
import classNames from "classnames";

const SalaFrontBG: NextPage = () => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      <div className={styles["create-scene"]}>
        <div className={classNames(styles["background"], "blur-sm")}>
          <div className={styles["overlay"]} />
          <div className={styles["moon"]}>
            <div className={styles["img"]}>
              <Image src="/assets/images/scene/moon.gif" width={2048} height={2048} objectFit="cover" />
            </div>
            <div className={styles["blur"]}>
              <Image src="/assets/images/scene/blur.png" width={3414} height={3414} objectFit="cover" />
            </div>
          </div>
          <div className={styles["water"]}>
            <LightWater />
          </div>
          <div className={styles["front-sala-container"]}>
            <div className={styles["sala"]}>
              {width >= 640 ? (
                <Image
                  width={1350}
                  height={753}
                  objectFit={"cover"}
                  src="/assets/images/scene/sala-front.png"
                  alt="ศาลา"
                />
              ) : (
                <Image layout={"fill"} objectFit={"cover"} src="/assets/images/scene/sala-front.png" alt="ศาลา" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalaFrontBG;
