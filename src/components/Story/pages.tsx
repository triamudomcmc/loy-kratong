import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import { LightWater } from "@components/Water";
import { useWindowDimensions } from "@utils/useWindowDimensions";
import { Cloud } from "@components/Vector/cloud";
import Link from "next/link";

const DURATION = 2000;
const DELAY = 250;

export const PageOne: NextPage = () => {
  return (
    <motion.div
      key="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: DURATION / 1000 }}
      className="flex flex-col"
    >
      <h1 className="font-title font-bold text-center text-4xl sm:text-6xl">
        ลอยกระทง
        <br />
        ออนไลน์ <span className="font-semibold block text-xl sm:text-2xl">๒๕๖๔</span>
      </h1>
      <p className="text-center font-normal mt-4 text-gray-300 sm:text-lg blinking-text">แตะเพื่อไปต่อ</p>
    </motion.div>
  );
};

export const PageTwo: NextPage = () => {
  return (
    <motion.div
      key="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: DURATION / 1000 }}
      className="flex flex-col"
    >
      <p className="font-display font-light text-center text-3xl sm:text-4xl">
        &quot;...สายัณห์สวัสดี
        <br />
        ราตรีนี้วันลอยกระทง
        <br />
        ขอชวนมาร่วมส่ง
        <br />
        ลอยกระทง ณ สระน้ำคูบัว...&quot;
      </p>
      <p className="text-center font-normal mt-4 text-gray-300 sm:text-lg blinking-text">แตะเพื่อไปต่อ</p>
    </motion.div>
  );
};

export const PageThree: NextPage = () => {
  return (
    <motion.div
      key="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: DURATION / 1000 }}
      className="flex flex-col"
    >
      <p className="font-display font-light text-center text-3xl sm:text-4xl">
        &quot;...วันนี้วันเพ็ญ
        <br />
        เดือนสิบสองนะ...&quot;
      </p>
      <p className="text-center font-normal mt-4 text-gray-300 sm:text-lg blinking-text">แตะเพื่อไปต่อ</p>
    </motion.div>
  );
};

interface PageFourProps {
  nextPage: () => void;
}

export const PageFour: NextPage<PageFourProps> = ({ nextPage }) => {
  const [going, setGoing] = useState<null | boolean>(null);

  return (
    <motion.div
      key="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: DURATION / 1000 }}
      className="flex flex-col"
    >
      {typeof going === "boolean" && going === false ? (
        <>
          <p className="font-display font-light text-center text-3xl sm:text-4xl">
            &quot;มาเถอะหน่า
            <br />
            อยากไปกับเธอ
            <br />
            จริง ๆ นะ !&quot;
          </p>
          <div className="flex w-full items-center mt-2 relative z-40">
            <button
              onClick={() => nextPage()}
              className="cursor-pointer transition-colors hover:bg-gray-300 px-4 py-2 w-[135px] text-center font-normal sm:text-lg mt-4 rounded-full text-[#4A4A4A] bg-white border-white border"
            >
              โอเค ๆ ไปก็ได้
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="font-display font-light relative z-40 text-center text-3xl sm:text-4xl">
            &quot;...มาลอยกระทง
            <br />
            ด้วยกันไหม...&quot;
          </p>
          <div className="flex w-full items-center mt-2 relative z-40">
            <button
              onClick={() => setGoing(false)}
              className="cursor-pointer transition-colors hover:text-gray-200 px-4 py-2 w-[100px] mr-4 text-center font-normal sm:text-lg mt-4 rounded-full text-white bg-transparent border-white border"
            >
              ไม่ไป
            </button>
            <button
              onClick={() => nextPage()}
              className="cursor-pointer transition-colors hover:bg-gray-300 px-4 py-2 w-[100px] text-center font-normal sm:text-lg mt-4 rounded-full text-[#4A4A4A] bg-white border-white border"
            >
              ไป
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export const PageFive: NextPage = () => {
  const { width, height } = useWindowDimensions();

  return (
    <motion.div
      key="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: DURATION / 1000, delay: DELAY / 1000 }}
      className="absolute w-full h-full z-[-2]"
    >
      <div className="absolute w-full h-full z-[-33]">
        <div className="absolute z-[-5] sm:w-[30%] w-[calc(30%+55px)] left-[-89px] top-[125px] opacity-50">
          <Cloud />
        </div>
        <div className="absolute z-[-4] sm:w-[30%] w-[calc(30%+55px)] left-[-134px] top-[175px] opacity-75">
          <Cloud />
        </div>

        <div className="absolute z-[-5] sm:w-[30%] w-[calc(30%+55px)] right-[-89px] top-[125px] opacity-50">
          <Cloud />
        </div>
        <div className="absolute z-[-4] sm:w-[30%] w-[calc(30%+55px)] right-[-84px] top-[184px] opacity-75">
          <Cloud />
        </div>
      </div>

      <div className="flex flex-col items-center absolute z-[30] top-[calc(7%+175px)] sm:top-[calc(5%+70px)] w-full">
        <p className="font-display font-light text-center text-3xl sm:text-4xl">โอเค ไปลอยกระทงกัน !</p>
        <Link href="/create">
          <a className="cursor-pointer transition-colors hover:bg-gray-300 px-4 py-2 w-[130px] text-center font-normal sm:text-lg mt-4 rounded-full text-[#4A4A4A] bg-white border-white border">
            สร้างกระทง
          </a>
        </Link>
      </div>

      <div className="w-full absolute bottom-0 z-[-5]">
        <LightWater />
      </div>
      <div className="absolute bottom-[-30px] z-[-1] left-[50%] -translate-x-1/2 min-w-full min-h-[50%]">
        <div className="w-full h-full flex justify-center">
          {width >= 640 ? (
            <Image
              width={1350}
              height={753}
              priority={true}
              objectFit={"cover"}
              src="/assets/images/scene/sala-front.png"
              alt="ศาลา"
            />
          ) : (
            <Image
              layout={"fill"}
              objectFit={"cover"}
              priority={true}
              src="/assets/images/scene/sala-front.png"
              alt="ศาลา"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};
