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
import { KratongData, Selected } from "@components/Kratong/create";

export const CaptureKratong: NextPage<{ data: KratongData }> = ({ data }) => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles["capture-scene"]}>
      <nav className="absolute bottom-12 flex justify-center w-full z-[99]">
        <div className="max-w-[306px]">
          <img src="/assets/images/logo.png" width="1024px" height="169px" alt="โลโก้ กช." />
        </div>
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
            <img
              src="/assets/images/scene/moon.gif"
              className="object-cover"
              width={2048}
              height={2048}
              alt="ดวงจันทร์"
            />
          </div>
          <div className={styles["blur"]}>
            <img
              src="/assets/images/scene/blur.png"
              className="object-cover"
              width={3414}
              height={3414}
              alt="ดวงจันทร์"
            />
          </div>
        </div>
        <div className={styles["fireworks-1"]}>
          <img src="/assets/images/scene/fireworks-red.png" width={692} height={754} />
        </div>
        <div className={styles["fireworks-2"]}>
          <img src="/assets/images/scene/fireworks-purple.png" width={692} height={754} />
        </div>
        {/* todo พลุหลากสี */}
      </div>
      <div className={styles["background"]}>
        <div className={classNames("absolute", styles["waterthree-container"])}>
          <div className="relative w-[554vw] bottom-[-526px]">
            <div className={styles["buildings"]}>
              <div className="w-[275%]">
                <img
                  src="/assets/images/scene/buildings.png"
                  width={2328}
                  height={318}
                  className="object-cover"
                  alt="ตึก"
                />
              </div>
            </div>
            <WaterThree />
          </div>
        </div>

        <div className={classNames("absolute", styles["watertwo-container"])}>
          <div className="relative w-[554vw] bottom-[-344px]">
            <IdleKratong
              lane="m"
              className="absolute z-[29] left-[32px] top-[-451px]"
              data={{ kratong: data.kratong, wish: { content: "", name: "" } }}
              size={["550px", "550px"]}
              initialX={632}
              highlighted={false}
            />
            <WaterTwo />
          </div>
        </div>

        <div className={classNames("absolute", styles["waterone-container"])}>
          <div className="relative w-[554vw] bottom-[-1049px]">
            <WaterOne />
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-[490px] z-[99]">
        <p className="font-display font-light text-7xl text-white px-4 text-center">{data.wish.name}</p>
      </div>
    </div>
  );
};
