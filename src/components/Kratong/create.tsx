import type { NextPage } from "next";
import { Fragment, useEffect, useState } from "react";
import { Kratong } from "./kratong";
import { KratongMap, KratongType, KratongTypeVariant } from "@map/kratong";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, DownloadIcon } from "@heroicons/react/solid";
import classnames from "classnames";
import { sendDataContext } from "@handlers/init";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

export interface Selected {
  base: string;
  flowers: string;
  candles: string;
  decorations: string;
  signVariant: number;
}

interface CreateKratongProps {
  selected: Selected;
  setSelected: (selection: Selected) => void;
  nextPage: () => void;
}

interface KratongTileProps {
  part: "base" | "flowers" | "candles" | "decorations";
  setSelected: (selection: Selected) => void;
  selected: Selected;
  data: KratongType | KratongTypeVariant;
}

const KratongTile: NextPage<KratongTileProps> = ({ part, setSelected, selected, data }) => {
  // @ts-ignore
  return (
    <>
      <motion.div
        key={`part_${data.id}`}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setSelected({ ...selected, [part]: data.id });
        }}
        className={classnames(
          "border-2 rounded-[20%] cursor-pointer bg-[#F5F5FB] transition-opacity bg-opacity-40 hover:bg-opacity-60",
          selected[part] === data.id ? "border-white" : "border-transparent"
        )}
      >
        <div className="flex flex-col items-center mt-[-4px] mx-[-6px]">
          <Image
            objectFit="contain"
            alt={data["name"]}
            priority={true}
            width={2388}
            height={1668}
            src={
              "url" in data
                ? data?.thumbnail ?? data.url
                : data?.thumbnails
                ? data.thumbnails[selected.signVariant]
                : data.variants[selected.signVariant]
            }
          />
          <span className="text-sm text-center text-[#726EA5] my-2 break-words w-full px-1">{data.name}</span>
        </div>
      </motion.div>
    </>
  );
};

const signColors = ["#c93139", "#ffa654", "#f38de5", "#ff97b2", "#5076e7", "#53f028"];

const CreateKratong: NextPage<CreateKratongProps> = ({ selected, setSelected, nextPage }) => {
  const [section, setSection] = useState<"base" | "flowers" | "candles" | "decorations">("base");

  const generate = (part: "base" | "flowers" | "candles" | "decorations") => {
    let parts: any[] = [];

    Object.values(KratongMap[part]).forEach((k, i) => {
      // @ts-ignore
      const data = k;
      parts[i] = [
        ...(parts[i] || []),
        <KratongTile key={i} selected={selected} setSelected={setSelected} data={data} part={part} />,
      ];
    });

    return parts.map((d, i) => (
      <Fragment key={`col-${i}`}>
        {d.map((g: Element, idx: number) => (
          <Fragment key={idx}>{g}</Fragment>
        ))}
      </Fragment>
    ));
  };

  const generateDecorations = (index: number) => {
    let parts: any[] = [];

    Object.values(KratongMap["decorations"])
      .filter((data) => (index === 1 ? data.type === "variant" : data.type !== "variant"))
      .forEach((data, i) => {
        // @ts-ignore
        parts[i] = [
          ...(parts[i] || []),
          <KratongTile key={i} selected={selected} setSelected={setSelected} data={data} part={"decorations"} />,
        ];
      });

    return parts.map((d, i) => (
      <Fragment key={`col-${i}`}>
        {d.map((g: Element, idx: number) => (
          <Fragment key={idx}>{g}</Fragment>
        ))}
      </Fragment>
    ));
  };

  return (
    <div className="flex items-center fixed min-h-screen w-full top-0 z-20 px-10 font-ui">
      <div className="flex flex-col border border-white bg-white bg-opacity-20 backdrop-blur-lg max-w-[525px] w-full mx-auto rounded-[34px]">
        <div className="h-full pt-8 pb-4 sm:pb-2 w-full">
          <h1 className="text-white text-2xl text-center mb-0 sm:mb-1">สร้างกระทง</h1>
          <div className="flex flex-col items-center">
            <div className="relative h-[150px] mb-[10px]">
              <Kratong zIndex={7} height="150px" selected={selected} />
            </div>
            <svg className="w-[225px]" viewBox="0 0 370 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse
                cx="184.709"
                cy="20"
                rx="184.5"
                ry="20"
                fill="white"
                fillOpacity="0.3"
                style={{ mixBlendMode: "soft-light" }}
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col relative z-10 space-y-2 justify-between border border-white bg-white bg-opacity-40 h-full rounded-[34px] w-full pb-2">
          <div className="space-y-6">
            <div className="flex justify-center w-full mb-4 py-2 px-4 space-x-4 sm:space-x-6 rounded-t-[34px] bg-white bg-opacity-40">
              <button
                onClick={() => {
                  setSection("base");
                }}
                className={classnames(
                  "px-3 sm:px-8 py-2 rounded-[20%] sm:rounded-full font-light text-sm transition-colors",
                  section === "base"
                    ? "bg-[#2256A3] text-white shadow-lg"
                    : "bg-transparent text-[#2256A3] hover:text-[#0d264c]"
                )}
              >
                ฐาน
              </button>
              <button
                onClick={() => {
                  setSection("flowers");
                }}
                className={classnames(
                  "px-2 sm:px-4 py-2 rounded-[20%] sm:rounded-full font-light text-sm transition-colors",
                  section === "flowers"
                    ? "bg-[#2256A3] text-white shadow-lg"
                    : "bg-transparent text-[#2256A3] hover:text-[#0d264c]"
                )}
              >
                ดอกไม้
              </button>
              <button
                onClick={() => {
                  setSection("candles");
                }}
                className={classnames(
                  "px-2 sm:px-4 py-2 rounded-[20%] sm:rounded-full font-light text-sm transition-colors",
                  section === "candles"
                    ? "bg-[#2256A3] text-white shadow-lg"
                    : "bg-transparent text-[#2256A3] hover:text-[#0d264c]"
                )}
              >
                เทียน
              </button>
              <button
                onClick={() => {
                  setSection("decorations");
                }}
                className={classnames(
                  "px-2 sm:px-6 py-2 rounded-[20%] sm:rounded-full font-light text-sm transition-colors",
                  section === "decorations"
                    ? "bg-[#2256A3] text-white shadow-lg"
                    : "bg-transparent text-[#2256A3] hover:text-[#0d264c]"
                )}
              >
                ของตกแต่ง
              </button>
            </div>
          </div>
          {section === "decorations" ? (
            <div className="px-1 mx-1 sm:px-6 sm:mx-3 h-[112px] sm:h-[154px] overflow-y-auto">
              <div>
                <div className="mb-4">
                  <p className="px-0 py-0 mb-2 text-xl text-[#293d5b]">ป้าย</p>
                  <div className="flex">
                    {Array.from({ length: 6 }, (_, i) => i).map((i) => {
                      return (
                        <motion.div
                          key={`col-${i}`}
                          whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.1 },
                          }}
                          whileTap={{ scale: 0.9 }}
                          className={classnames(
                            "p-4 mr-2 rounded-full border border-white hover:opacity-90 cursor-pointer shadow-md",
                            selected.signVariant === i ? "border-2 opacity-100" : "opacity-50"
                          )}
                          style={{ backgroundColor: signColors[i] }}
                          onClick={() => {
                            setSelected({
                              ...selected,
                              signVariant: i,
                            });
                          }}
                        ></motion.div>
                      );
                    })}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">{generateDecorations(1)}</div>
              </div>

              <div className="mt-6">
                <p className="px-0 py-0 mb-2 text-xl text-[#293d5b]">ของตกแต่ง</p>
              </div>
              <div className="grid grid-cols-3 gap-4">{generateDecorations(0)}</div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4 px-1 mx-1 sm:px-6 sm:mx-3 h-[112px] sm:h-[154px] overflow-y-auto">
              {generate(section)}
            </div>
          )}
          <div className="flex justify-end px-4 mt-1">
            <button
              className="flex items-center text-[12px] sm:text-md bg-[#2256A3] text-white px-6 py-2 space-x-1 rounded-full font-light"
              onClick={() => nextPage()}
            >
              <span>ถัดไป</span>
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface Wish {
  name: string;
  content: string;
}

interface CreateWishProps {
  selected: Selected;
  wish: Wish;
  setWish: (wish: Wish) => void;
  nextPage: () => void;
  prevPage: () => void;
}

interface WishError {
  name: string[] | null;
  content: string[] | null;
}

const CreateWish: NextPage<CreateWishProps> = ({ selected, wish, setWish, nextPage, prevPage }) => {
  const CharLimits = {
    name: 64,
    content: 280,
  };

  const [error, setError] = useState<WishError>({ name: null, content: null });

  const validateValues = () => {
    let nameErrors = [];
    let contentErrors = [];

    if (wish.name.length === 0) nameErrors.push("โปรดกรอกข้อมูลดังกล่าว");
    if (wish.content.length === 0) contentErrors.push("โปรดกรอกข้อมูลดังกล่าว");

    setError({
      name: nameErrors.length === 0 ? null : nameErrors,
      content: contentErrors.length === 0 ? null : contentErrors,
    });

    return nameErrors.length === 0 && contentErrors.length === 0;
  };

  const formatError = (err: string[]) => {
    if (err.length === 1) return err[0];
    else return err.join(", ");
  };

  return (
    <>
      <div className="flex items-center fixed min-h-screen w-full top-0 z-20 px-10 font-ui">
        <div className="flex flex-col border border-white bg-white bg-opacity-20 backdrop-blur-lg max-w-[525px] w-full mx-auto rounded-[34px]">
          <div className="h-full pt-8 pb-4 sm:pb-2 w-full">
            <h1 className="text-white text-2xl text-center mb-0 sm:mb-1">ใส่คำอธิษฐาน</h1>
            <div className="flex flex-col items-center">
              <div className="relative h-[150px] mb-[10px]">
                <Kratong zIndex={7} height="150px" selected={selected} />
              </div>
              <svg className="w-[225px]" viewBox="0 0 370 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse
                  cx="184.709"
                  cy="20"
                  rx="184.5"
                  ry="20"
                  fill="white"
                  fillOpacity="0.3"
                  style={{ mixBlendMode: "soft-light" }}
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col relative z-10 space-y-2 justify-between border border-white bg-white bg-opacity-40 h-full rounded-[34px] w-full pb-2">
            <div>
              <div className="flex flex-col space-y-2 justify-between w-full pt-6 px-4 sm:px-8 flex-grow-1 mt-3 overflow-y-auto">
                <div className="w-full">
                  <fieldset>
                    <label className="text-sm text-white" htmlFor="name">
                      ชื่อ
                    </label>
                    <input
                      name="name"
                      type="text"
                      onChange={(e) => {
                        if (CharLimits.name - e.target.value.length < 0) return;

                        setWish({
                          name: e.target.value,
                          content: wish.content,
                        });
                      }}
                      value={wish.name ?? ""}
                      className="block w-full mt-2 bg-transparent placeholder-[#eee] placeholder-opacity-70 text-[#fff] outline-none border-b-2 border-white px-2 pt-2 pb-1 mb-4"
                      placeholder="นายเรียนเด่น เล่นดี"
                    />
                  </fieldset>
                  <div className="block mt-2 w-full">
                    <span className="text-sm text-red-600 float-left">{error.name && formatError(error.name)}</span>
                    <span className="text-sm text-white float-right">{CharLimits.name - wish.name.length}</span>
                  </div>
                </div>

                <div className="w-full">
                  <fieldset>
                    <label className="text-sm text-white" htmlFor="content">
                      ใส่คำอธิษฐาน
                    </label>
                    <input
                      name="content"
                      type="text"
                      onChange={(e) => {
                        if (CharLimits.content - e.target.value.length < 0) return;

                        setWish({
                          name: wish.name,
                          content: e.target.value,
                        });
                      }}
                      value={wish.content ?? ""}
                      className="block w-full mt-2 bg-transparent placeholder-opacity-70 placeholder-[#eee] text-[#fdfdfd] outline-none border-b-2 border-white px-2 pt-2 pb-1  mb-4"
                      placeholder="กรอกคำอธิษฐานของท่าน"
                    />
                  </fieldset>

                  <div className="block mt-2 w-full">
                    <span className="text-sm text-red-600 float-left">
                      {error.content && formatError(error.content)}
                    </span>
                    <span className="text-sm text-white float-right">{CharLimits.content - wish.content.length}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-2 px-4">
              <button
                className="flex items-center text-[12px] sm:text-md bg-transparent text-white border border-white px-6 py-2 space-x-1 rounded-full font-light"
                onClick={() => prevPage()}
              >
                <ChevronLeftIcon className="w-5 h-5" />
                <span>ย้อนกลับ</span>
              </button>

              <button
                className="flex items-center bg-[#2256A3] text-[12px] sm:text-md text-white px-6 py-2 rounded-full shadow-lg font-light"
                onClick={() => {
                  if (!validateValues()) return;

                  nextPage();
                }}
              >
                <span>บันทึกกระทง</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export interface ResultData {
  kratong: Selected;
  wish: Wish;
}

interface ResultProps {
  data: ResultData;
  prevPage: () => void;
}

const Result: NextPage<ResultProps> = ({ data, prevPage }) => {
  const router = useRouter();

  const send = async (query: any) => {
    const res = await sendDataContext.call({ id: query?.id ?? "", data: data });

    if (res) {
      if (!res.status) {
        send(query);
      }
    } else {
      send(query);
    }
  };

  useEffect(() => {
    send(router.query);
  }, [router]);

  return (
    <>
      <div className="flex items-center fixed min-h-screen w-full top-0 z-20 px-10 font-ui">
        <div className="flex flex-col justify-center items-center space-y-6 border border-white bg-white bg-opacity-20 backdrop-blur-lg h-[80vh] max-h-[650px] max-w-[525px] w-full mx-auto rounded-[34px]">
          <div className="pt-8 pb-4 sm:pb-2 w-full">
            <h1 className="text-white text-2xl text-center mb-8">สำเร็จ</h1>
            <p className="text-white font-light text-lg text-center mb-2">{data.wish.name}:</p>
            <p className="text-white font-light text-sm text-center mb-2">{data.wish.content}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative h-[150px] mb-[15px]">
              <Kratong zIndex={7} height="150px" selected={data.kratong} />
            </div>
            <svg className="w-[225px]" viewBox="0 0 370 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse
                cx="184.709"
                cy="20"
                rx="184.5"
                ry="20"
                fill="white"
                fillOpacity="0.3"
                style={{ mixBlendMode: "soft-light" }}
              />
            </svg>
          </div>
          <div className="justify-self-end flex justify-end space-x-2 px-4">
            <button
              className="relative z-40 flex items-center text-md bg-white text-[#2256A3] border border-white px-6 py-2 space-x-1 rounded-full font-light"
              onClick={() => prevPage()}
            >
              <ChevronLeftIcon className="w-5 h-5" />
              <span>กลับไปแก้ไขกระทง</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export interface KratongData {
  kratong: Selected;
  wish: Wish;
}

export const Create: NextPage<{ idata: KratongData }> = ({ idata }) => {
  const [data, setData] = useState<KratongData>(
    Object.keys(idata).length > 1
      ? idata
      : {
          kratong: {
            base: "banana-leaf",
            flowers: "love",
            candles: "candle-yellow",
            decorations: "none",
            signVariant: 0,
          },
          wish: {
            name: "",
            content: "",
          },
        }
  );

  const [page, setPage] = useState(1);
  const [saving, setSaving] = useState<null | boolean>(null);

  const router = useRouter();

  const send = async (query: any) => {
    if (query) {
      const res = await sendDataContext.call({ id: query.id, data: data });
      if (res) {
        if (!res.status) {
          send(query);
        }
      } else {
        send(query);
      }
    }
  };

  useEffect(() => {
    if (!(typeof saving === "boolean")) {
      setSaving(false);
      return;
    }

    send(router.query);
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
    }, 3000);
  }, [page]);

  const setKratong = (selection: Selected) => {
    setData((oldData) => {
      return {
        kratong: selection,
        wish: oldData.wish,
      };
    });
  };

  const setWish = (newWish: Wish) => {
    setData((oldData) => {
      return {
        kratong: oldData.kratong,
        wish: newWish,
      };
    });
  };

  const NextPage = () => {
    setPage((currPage) => (currPage === 3 ? currPage : currPage + 1));
  };

  const PrevPage = () => {
    setPage((currPage) => (currPage === 1 ? currPage : currPage - 1));
  };

  return (
    <>
      <AnimatePresence>
        {saving && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed font-ui flex justify-start items-center z-[99] height-[35px] left-1/2 -translate-x-1/2 top-[30px] py-2 px-4 rounded-lg text-blue-700 border border-white w-3/4 bg-white"
          >
            <p className="text-light">
              <DownloadIcon className="w-5 h-5 mr-2 inline" />
              บันทึกกระทงแล้ว
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      {page === 1 && <CreateKratong selected={data.kratong} setSelected={setKratong} nextPage={NextPage} />}
      {page === 2 && (
        <CreateWish
          wish={data.wish}
          setWish={setWish}
          selected={data.kratong}
          nextPage={NextPage}
          prevPage={PrevPage}
        />
      )}
      {page === 3 && <Result data={data} prevPage={PrevPage} />}
    </>
  );
};
