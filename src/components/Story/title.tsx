import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud } from "@components/Vector/cloud";
import classNames from "classnames";
import { PageFive, PageFour, PageOne, PageThree, PageTwo } from "./pages";
import { useWindowDimensions } from "@utils/document";

const DURATION = 1500;
const DELAY = 250;

const TitleScreen: NextPage = () => {
  const [page, setPage] = useState(1);
  const [pageTransition, setPageTransition] = useState(false);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (!pageTransition) return;
    setTimeout(() => {
      setPage(page + 1);
      setPageTransition(false);
      console.log(page);
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
      x: width >= 640 ? 235 : 85,
      y: width >= 640 ? -245 : -150,
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
        <AnimatePresence>
          {pageTransition && page !== 4 && (
            <>
              {/* topleft */}
              <motion.div
                key="clouds-topleft"
                initial={{ x: -1000, y: 1000, opacity: 1 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ x: -1000, y: 1000, opacity: 1 }}
                transition={{ type: "tween", duration: DURATION / 1000 }}
                className="absolute w-full h-full z-[-1]"
              >
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] left-[-50%] top-[-62px] sm:top-[-139px]">
                  <Cloud />
                </div>
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] left-[-50%] top-[-62px] sm:top-[-139px]">
                  <Cloud />
                </div>
              </motion.div>

              {/* topright */}
              <motion.div
                key="clouds-topright"
                initial={{ x: 1000, y: 1000, opacity: 1 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ x: 1000, y: 1000, opacity: 1 }}
                transition={{ type: "tween", duration: DURATION / 1000 }}
                className="absolute w-full h-full z-[-1]"
              >
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] right-[-50%] top-[-62px] sm:top-[-139px]">
                  <Cloud />
                </div>
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] right-[-50%] top-[-62px] sm:top-[-139px]">
                  <Cloud />
                </div>
              </motion.div>

              {/* midleft */}
              <motion.div
                key="clouds-midleft"
                initial={{ x: -1000, y: 0, opacity: 1 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ x: -1000, y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: DURATION / 1000 }}
                className="absolute w-full h-full z-[-1]"
              >
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] left-[-50%] top-[25%] sm:top-[calc(5%-139px)]">
                  <Cloud />
                </div>
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] left-[-50%] top-[25%] sm:top-[calc(5%-139px)]">
                  <Cloud />
                </div>
              </motion.div>

              {/* midright */}
              <motion.div
                key="clouds-midright"
                initial={{ x: 1000, y: 0, opacity: 1 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ x: 1000, y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: DURATION / 1000 }}
                className="absolute w-full h-full z-[-1]"
              >
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] right-[-50%] top-[25%] sm:top-[calc(15%-139px)]">
                  <Cloud />
                </div>
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] right-[-50%] top-[25%] sm:top-[calc(15%-139px)]">
                  <Cloud />
                </div>
              </motion.div>

              {/* bottomleft */}
              <motion.div
                key="clouds-bottomleft"
                initial={{ x: -1000, y: -1000, opacity: 1 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ x: -1000, y: -1000, opacity: 1 }}
                transition={{ type: "tween", duration: DURATION / 1000 }}
                className="absolute w-full h-full z-[-1]"
              >
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] left-[-50%] bottom-[-62px] sm:bottom-[-99px]">
                  <Cloud />
                </div>
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] left-[-50%] bottom-[-62px] sm:bottom-[-99px]">
                  <Cloud />
                </div>
              </motion.div>

              {/* bottomright */}
              <motion.div
                key="clouds-bottomright"
                initial={{ x: 1000, y: -1000, opacity: 1 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ x: 1000, y: -1000, opacity: 1 }}
                transition={{ type: "tween", duration: DURATION / 1000 }}
                className="absolute w-full h-full z-[-1]"
              >
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] right-[-50%] bottom-[-62px] sm:bottom-[-99px]">
                  <Cloud />
                </div>
                <div className="absolute z-[99] w-[173vw] sm:w-[117vw] right-[-50%] bottom-[-62px] sm:bottom-[-99px]">
                  <Cloud />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {page >= 2 && page < 5 && !pageTransition && (
            <motion.div
              key="clouds-vertical"
              initial={{ y: 1000, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -1000, opacity: 1 }}
              transition={{ type: "tween", duration: 1, delay: DELAY / 1000 }}
              className="absolute w-full h-full z-[-1]"
            >
              <div className="absolute z-[-5] sm:w-[35%] w-[calc(35%+55px)] left-[-89px] top-[340px] opacity-50">
                <Cloud />
              </div>
              <div className="absolute z-[-4] sm:w-[35%] w-[calc(35%+55px)] left-[-114px] top-[388px] opacity-75">
                <Cloud />
              </div>
              <div className="absolute z-[-5] sm:w-[37%] w-[calc(45%+50px)] left-[-122px] bottom-[29px] opacity-90">
                <Cloud />
              </div>

              <div className="absolute z-[-5] sm:w-[35%] w-[calc(35%+55px)] right-[-89px] top-[340px] opacity-50">
                <Cloud />
              </div>
              <div className="absolute z-[-4] sm:w-[35%] w-[calc(35%+55px)] right-[-114px] top-[388px] opacity-75">
                <Cloud />
              </div>
              <div className="absolute z-[-5] sm:w-[37%] w-[calc(45%+50px)] right-[-122px] bottom-[29px] opacity-90">
                <Cloud />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col items-center justify-center mt-[-30px]">
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
