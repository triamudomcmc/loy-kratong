import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud } from "@components/Vector/cloud";
import classNames from "classnames";
import { PageFive, PageFour, PageOne, PageThree, PageTwo } from "./pages";
import { useWindowDimensions } from "@utils/useWindowDimensions";

const DURATION = 500;
const DELAY = 650;

const TitleScreen: NextPage = () => {
  const [page, setPage] = useState(1);
  const [pageTransition, setPageTransition] = useState(false);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (!pageTransition) return;
    setTimeout(() => {
      setPage(page + 1);
      setPageTransition(false);
    }, DURATION + DELAY);
  }, [pageTransition]);

  const nextPage = () => {
    setPageTransition(true);
  };

  const moonVariants = {
    start: {
      x: 0,
      y: 0,
      scale: 1,
    },
    end: {
      x: width >= 640 ? 255 : 165,
      y: width >= 640 ? -165 : -180,
      scale: width >= 640 ? 0.65 : 0.35,
    },
  };

  return (
    <>
      <div
        className={classNames(
          "flex items-center justify-center fixed w-full h-screen font-ui text-white",
          page < 4 && "cursor-pointer"
        )}
        onClick={() => {
          if (pageTransition || page >= 4) return;
          setPageTransition(true);
        }}
      >
        {/* overlay clouds */}
        {/* todo redo clouds */}
        <AnimatePresence>
          {pageTransition && page !== 4 && (
            <>
              {/* topleft */}
              <motion.div
                key="clouds-topleft"
                initial={{ y: 1000, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -1000, opacity: 1 }}
                transition={{ type: "tween", duration: DURATION / 1000 }}
                className="absolute w-full h-full z-[40]"
              >
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] left-[-472px] lg:left-[-532px] top-[-109px] sm:top-[-139px]">
                  <Cloud />
                </div>
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] left-[-472px] top-[32px] sm:top-[-199px]">
                  <Cloud />
                </div>
              </motion.div>

              {/* topright */}
              <motion.div
                key="clouds-topright"
                initial={{ y: 1000, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -1000, opacity: 1 }}
                transition={{ type: "tween", duration: DURATION / 1000 }}
                className="absolute w-full h-full z-[40]"
              >
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] right-[-197px] lg:right-[-307px] top-[-109px] sm:top-[-139px]">
                  <Cloud />
                </div>
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] right-[-197px] top-[32px] sm:top-[-199px]">
                  <Cloud />
                </div>
              </motion.div>

              {/* bottomleft */}
              <motion.div
                key="clouds-bottomleft"
                initial={{ y: 1000, opacity: 1 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ y: -1000, opacity: 1 }}
                transition={{ type: "tween", duration: DURATION / 1000 }}
                className="absolute w-full h-full z-[40]"
              >
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] left-[-472px] lg:left-[-532px] bottom-[-62px] sm:bottom-[-99px]">
                  <Cloud />
                </div>
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] left-[-472px] bottom-[39px] sm:bottom-[-99px]">
                  <Cloud />
                </div>
              </motion.div>

              {/* bottomright */}
              <motion.div
                key="clouds-bottomright"
                initial={{ y: 1000, opacity: 1 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ y: -1000, opacity: 1 }}
                transition={{ type: "tween", duration: DURATION / 1000 }}
                className="absolute w-full h-full z-[40]"
              >
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] right-[-197px] lg:right-[-307px] bottom-[-62px] sm:bottom-[-57px]">
                  <Cloud />
                </div>
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] right-[-197px] bottom-[39px] sm:bottom-[-57px]">
                  <Cloud />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <>
          {page >= 2 && page < 5 && !pageTransition && (
            <div className="absolute w-full h-full z-[-1]">
              <div className="absolute z-[-5] sm:w-[280px] w-[175px] left-[-89px] top-[340px] opacity-50">
                <Cloud />
              </div>
              <div className="absolute z-[-4] sm:w-[280px] w-[175px] left-[-114px] top-[388px] opacity-75">
                <Cloud />
              </div>
              <div className="absolute z-[-5] sm:w-[320px] w-[185px] left-[-122px] bottom-[29px] opacity-90">
                <Cloud />
              </div>

              <div className="absolute z-[-5] sm:w-[280px] w-[175px] right-[-89px] top-[340px] opacity-50">
                <Cloud />
              </div>
              <div className="absolute z-[-4] sm:w-[280px] w-[175px] right-[-114px] top-[388px] opacity-75">
                <Cloud />
              </div>
              <div className="absolute z-[-5] sm:w-[320px] w-[185px] right-[-122px] bottom-[29px] opacity-90">
                <Cloud />
              </div>
            </div>
          )}
        </>

        <div className="flex flex-col items-center static z-[3] justify-center mt-[-30px]">
          <motion.div
            animate={page === 5 ? "end" : "start"}
            variants={moonVariants}
            className="relative w-[350px] h-[350px] z-[-5]"
            transition={{
              duration: DURATION / 1000,
            }}
          >
            <div className="absolute w-[65%] left-[50%] z-[-1] top-[50%] -translate-x-1/2 -translate-y-1/2">
              <Image src="/assets/images/scene/moon.gif" width={2048} height={2048} objectFit="cover" alt="ดวงจันทร์" />
            </div>
            <div className="absolute top-0 z-[-2]">
              <Image src="/assets/images/scene/blur.png" width={3414} height={3414} objectFit="cover" alt="ดวงจันทร์" />
            </div>
          </motion.div>
          <AnimatePresence>
            {!pageTransition && page === 1 && <PageOne />}
            {!pageTransition && page === 2 && <PageTwo />}
            {!pageTransition && page === 3 && <PageThree />}
            {!pageTransition && page === 4 && <PageFour nextPage={nextPage} />}
            {!pageTransition && page === 5 && <PageFive />}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default TitleScreen;
