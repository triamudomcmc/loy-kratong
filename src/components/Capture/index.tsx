import type { NextPage } from "next";
import styles from "@styles/modules/Capture.module.scss";
import { Navbar } from "@components/Nav";
import Image from "next/image";
import { Cloud } from "@components/Vector/cloud";
import { WaterFour, WaterOne, WaterThree, WaterTwo } from "@components/Water";
import classNames from "classnames";
import { PrincipalKratongData, RongPrincipalKratongsData } from "@map/realkratong";
import { IdleKratong } from "@components/LoyKratong/displaykratong";
import { useWindowDimensions } from "@utils/useWindowDimensions";
import { random } from "@utils/random";
import { Kratong } from "@components/Kratong/kratong";
import { Selected } from "@components/Kratong/create";

export const CaptureKratong: NextPage<{ data: Selected }> = ({ data }) => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles["capture-scene"]}>
      <nav className="max-w-[256px] absolute top-12 left-24 z-[99]">
        <Image src="/assets/images/logo.png" width="1024px" height="169px" alt="โลโก้ กช." />
      </nav>
      <div className={styles["sky"]}>
        <div className="w-[490px] absolute z-[3] left-[-96px] top-[201px] opacity-[15%] ">
          <Cloud />
        </div>
        <div className="w-[448px] absolute z-[3] left-[296px] top-[303px] opacity-[15%] ">
          <Cloud />
        </div>
        <div className="w-[465px] absolute z-[3] right-[-96px] top-[231px] opacity-[15%] ">
          <Cloud />
        </div>
        <div className={styles["moon"]}>
          <div className={styles["img"]}>
            <Image src="/assets/images/scene/moon.gif" width={2048} height={2048} objectFit="cover" alt="ดวงจันทร์" />
          </div>
          <div className={styles["blur"]}>
            <Image src="/assets/images/scene/blur.png" width={3414} height={3414} objectFit="cover" alt="ดวงจันทร์" />
          </div>
        </div>
        <div className={styles["fireworks-1"]}>
          <Image src="/assets/images/scene/fireworks-white.gif" width={1280} height={960} />
        </div>
        <div className={styles["fireworks-2"]}>
          <Image src="/assets/images/scene/fireworks.gif" width={1280} height={960} />
        </div>
        {/* todo พลุหลากสี */}
      </div>
      <div className={styles["background"]}>
        <div className={classNames("absolute", styles["waterthree-container"])}>
          <div className="relative w-[150vw] bottom-[-136px]">
            <div className={styles["buildings"]}>
              <div className="w-[275%]">
                <Image src="/assets/images/scene/buildings.png" width={2328} height={318} objectFit="cover" alt="ตึก" />
              </div>
            </div>
            <IdleKratong
              lane="m"
              className="absolute z-[29] left-[380px] top-[-169px]"
              data={{ kratong: data, wish: { content: "", name: "" } }}
              size={["554px", "554px"]}
              initialX={380}
            />
            <WaterThree />
          </div>
        </div>

        <div className={classNames("absolute", styles["watertwo-container"])}>
          <div className="relative w-[150vw] bottom-[243px]">
            <WaterTwo />
          </div>
        </div>

        <div className={classNames("absolute", styles["waterone-container"])}>
          <div className="relative w-[150vw] bottom-[-850px]">
            <WaterOne />
          </div>
        </div>
      </div>
    </div>
  );
};
