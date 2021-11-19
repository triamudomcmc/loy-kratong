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
import { IdleCaptureKratong } from "./capturekratong";

export const CaptureKratong: NextPage<{ data: KratongData }> = ({ data }) => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles["capture-scene"]}>
      <nav className="absolute top-[46px] left-[48px]  w-full z-[99]">
        <div className="max-w-[306px]">
          <Image src="/assets/images/logo.png" width="1024px" height="169px" alt="โลโก้ กช." />
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
            <img src="/assets/images/scene/moon.gif" width={2048} height={2048} alt="ดวงจันทร์" />
          </div>
          <div className={styles["blur"]}>
            <img src="/assets/images/scene/blur.png" width={3414} height={3414} alt="ดวงจันทร์" />
          </div>
        </div>
        {/* <div className={styles["fireworks-1"]}>
          <Image src="/assets/images/scene/fireworks-red.png" width={692} height={754} />
        </div>
        <div className={styles["fireworks-2"]}>
          <Image src="/assets/images/scene/fireworks-purple.png" width={692} height={754} />
        </div> */}
        <div className={styles["fireworks-new"]}>
          <img src="/assets/images/scene/capture-fireworks-flipped.png" width={2048} height={2048} />
        </div>
      </div>
      <div className={styles["background"]}>
        <div className={classNames("absolute", styles["waterfour-container"])}>
          <div className="relative w-[554vw] bottom-[-193px]">
            <div className={styles["buildings"]}>
              <div className="w-[275%]">
                <img src="/assets/images/scene/buildings.png" width={2328} height={318} alt="ตึก" />
              </div>
            </div>
            <WaterFour />
          </div>
        </div>

        <div className={classNames("absolute", styles["waterthree-container"])}>
          <div className="relative w-[554vw] bottom-[-526px]">
            <WaterThree />
            <IdleCaptureKratong
              lane="t"
              className="absolute z-[29] brightness-[40%]"
              data={{
                kratong: {
                  base: "banana-leaf",
                  candles: "candle-yellow",
                  decorations: "sign-want-love",
                  flowers: "love",
                  signVariant: 0,
                },
                wish: { content: "", name: "" },
              }}
              size={"280px"}
              initialX={332}
              initialY={-151}
              highlighted={false}
            />

            <IdleCaptureKratong
              lane="t"
              className="absolute z-[29] brightness-[40%]"
              data={{
                kratong: {
                  base: "ice",
                  candles: "candle-yellow",
                  decorations: "sign-quote",
                  flowers: "luck",
                  signVariant: 1,
                },
                wish: { content: "", name: "" },
              }}
              size={"280px"}
              initialX={1222}
              initialY={-181}
              highlighted={false}
            />
          </div>
        </div>

        <div className={classNames("absolute", styles["watertwo-container"])}>
          <div className="relative w-[554vw] bottom-[-344px]">
            <IdleCaptureKratong
              lane="m"
              className="absolute z-[29]"
              data={{ kratong: data.kratong, wish: { content: "", name: "" } }}
              size={"550px"}
              initialX={662}
              initialY={-451}
              highlighted={true}
            />
            <WaterTwo />
          </div>
        </div>

        <div className={classNames("absolute", styles["waterone-container"])}>
          <div className="relative w-[554vw] bottom-[-1049px]">
            <IdleCaptureKratong
              lane="b"
              className="absolute z-[29] brightness-[65%]"
              data={{
                kratong: {
                  base: "ice",
                  candles: "candle-blue",
                  decorations: "sign-want-money",
                  flowers: "study",
                  signVariant: 1,
                },
                wish: { content: "", name: "" },
              }}
              size={"380px"}
              initialX={332}
              initialY={-281}
              highlighted={false}
            />
            <WaterOne />

            <IdleCaptureKratong
              lane="b"
              className="absolute z-[29] brightness-[65%]"
              data={{
                kratong: {
                  base: "coconut-shell",
                  candles: "candle-yellow",
                  decorations: "sign-enttid",
                  flowers: "summer-fruits",
                  signVariant: 0,
                },
                wish: { content: "", name: "" },
              }}
              size={"380px"}
              initialX={1112}
              initialY={-251}
              highlighted={false}
            />
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-[90px] z-[99] px-[75px]">
        <p className="font-display font-light text-7xl text-white w-full text-center">{data.wish.name}</p>
      </div>
    </div>
  );
};
