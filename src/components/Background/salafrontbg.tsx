import type { NextPage } from "next";
import { LightWater } from "@components/Water";
import styles from "@styles/modules/Background.module.scss";
import Image from "next/image";
import { useWindowDimensions } from "@utils/document";

const SalaFrontBG: NextPage = () => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      <div className={styles["create-scene"]}>
        <div className={styles["background"]}>
          <div className={styles["overlay"]} />
          <div className="sky-l">
            <div className={styles["cloud-1"]}></div>
            <div className={styles["cloud-2"]}></div>
          </div>
          <div className="sky-r">
            <div className="moon"></div>
            <div className="cloud-1"></div>
            <div className="cloud-2"></div>
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
