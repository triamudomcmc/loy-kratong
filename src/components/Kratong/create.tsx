import type { NextPage } from "next";
import { useState } from "react";
import { Kratong } from "./kratong";
import { KratongMap, KratongMapType } from "@map/kratong";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import classnames from "classnames";

export interface Selected {
  base: string;
  flowers: string;
  candles: string;
  decorations: string;
  offset: number;
}

interface CreateKratongProps {
  selected: Selected;
  setSelected: (selection: Selected) => void;
  nextPage: () => void;
}

const CreateKratong: NextPage<CreateKratongProps> = ({ selected, setSelected, nextPage }) => {
  const [section, setSection] = useState<"base" | "flowers" | "candles" | "decorations">("base");

  const generate = (part: "base" | "flowers" | "candles" | "decorations") => {
    let parts: any[] = [];

    Object.values(KratongMap[part]).forEach((k, i) => {
      // @ts-ignore
      const data = k;
      const partLoc = Math.ceil((i + 1) / 3) - 1;
      parts[partLoc] = [
        ...(parts[partLoc] || []),
        <div
          key={`part_${k.id}`}
          onClick={() => {
            setSelected({ ...selected, [part]: data.id, offset: data.offset || 0 });
          }}
          className={classnames(
            "w-40 h-[140px] rounded-lg cursor-pointer",
            selected[part] === data.id && "border-2 border-white"
          )}
        >
          <div className="mt-[-4px] mx-[-6px]">
            <Image
              alt={k["name"]}
              priority={true}
              width={2388}
              height={1668}
              src={"url" in data ? data.url : data.variants[0]}
            />
          </div>
        </div>,
      ];
    });

    return parts.map((d, i) => (
      <div key={`col-${i}`} className="flex space-x-4">
        {d.map((g: Element) => g)}
      </div>
    ));
  };

  return (
    <div className="flex items-center fixed min-h-screen w-full top-0 z-20 px-10 font-ui">
      <div className="flex border border-white bg-white bg-opacity-20 backdrop-blur-lg max-w-[978px] w-full mx-auto rounded-[34px]">
        <div className="h-full w-4/12 py-28 min-w-[400px]">
          <h1 className="text-white text-2xl text-center mb-14">สร้างกระทง</h1>
          <div className="flex flex-col items-center">
            <div className="mb-[-44px]">
              <Kratong selected={selected} />
            </div>
            <svg className="w-[320px]" viewBox="0 0 370 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div className="flex flex-col justify-between border border-white bg-white bg-opacity-40 h-max rounded-[34px] w-8/12 px-8 py-10">
          <div>
            <div className="flex justify-between w-full mb-12 px-4">
              <button
                onClick={() => {
                  setSection("base");
                }}
                className={classnames(
                  "px-14 py-2 rounded-full shadow-lg font-light",
                  section === "base" ? "bg-[#2256A3] text-white" : "bg-white text-[#2256A3]"
                )}
              >
                ฐาน
              </button>
              <button
                onClick={() => {
                  setSection("flowers");
                }}
                className={classnames(
                  "px-12 py-2 rounded-full shadow-lg font-light",
                  section === "flowers" ? "bg-[#2256A3] text-white" : "bg-white text-[#2256A3]"
                )}
              >
                ดอกไม้
              </button>
              <button
                onClick={() => {
                  setSection("decorations");
                }}
                className={classnames(
                  "px-8 py-2 rounded-full shadow-lg font-light",
                  section === "decorations" ? "bg-[#2256A3] text-white" : "bg-white text-[#2256A3]"
                )}
              >
                ของตกแต่ง
              </button>
            </div>
            <div className="space-y-6">{generate(section)}</div>
          </div>
          <div className="flex justify-end px-4">
            <button
              className="flex items-center bg-[#2256A3] text-white px-6 py-2 space-x-1 rounded-full shadow-lg font-light"
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

    console.log(wish.name.length === 0);
    console.log(wish.content.length === 0);
    console.log(nameErrors.length === 0 && contentErrors.length === 0);

    return nameErrors.length === 0 && contentErrors.length === 0;
  };

  const formatError = (err: string[]) => {
    if (err.length === 1) return err[0];
    else return err.join(", ");
  };

  return (
    <>
      <div className="flex items-center fixed min-h-screen w-full top-0 z-20 px-10 font-ui">
        <div className="flex border border-white bg-white bg-opacity-20 backdrop-blur-lg max-w-[978px] w-full mx-auto rounded-[34px]">
          <div className="h-full w-4/12 py-28 min-w-[400px]">
            <h1 className="text-white text-2xl text-center mb-14">ใส่คำอธิษฐาน</h1>
            <div className="flex flex-col items-center">
              <div className="mb-[-44px]">
                <Kratong selected={selected} />
              </div>
              <svg className="w-[320px]" viewBox="0 0 370 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div className="flex flex-col justify-between border border-white bg-white bg-opacity-40 h-max rounded-[34px] w-8/12 px-8 py-10">
            <div>
              <div className="flex flex-col space-y-12 justify-between w-full my-4 p-4">
                <div className="w-full">
                  <fieldset>
                    <label className="text-white" htmlFor="name">
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
                      className="block w-full mt-2 bg-transparent placeholder-[#eee] text-[#fdfdfd] outline-none border-b-2 border-white px-2 pt-2 pb-1 mb-4"
                      placeholder="นายเรียนเด่น เล่นดี"
                    />
                  </fieldset>
                  <div className="block mt-2 w-full">
                    <span className="text-red-600 float-left">{error.name && formatError(error.name)}</span>
                    <span className="text-white float-right">{CharLimits.name - wish.name.length}</span>
                  </div>
                </div>

                <div className="w-full">
                  <fieldset>
                    <label className="text-white" htmlFor="content">
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
                      className="block w-full mt-2 bg-transparent placeholder-[#eee] text-[#fdfdfd] outline-none border-b-2 border-white px-2 pt-2 pb-1  mb-4"
                      placeholder="ขอให้ได้คณะที่หวัง ขอให้มีหวานใจ สาธุ"
                    />
                  </fieldset>

                  <div className="block mt-2 w-full">
                    <span className="text-red-600 float-left">{error.content && formatError(error.content)}</span>
                    <span className="text-white float-right">{CharLimits.content - wish.content.length}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-2 px-4">
              <button
                className="flex items-center bg-transparent text-white border border-white px-6 py-2 space-x-1 rounded-full font-light"
                onClick={() => prevPage()}
              >
                <ChevronLeftIcon className="w-5 h-5" />
                <span>ย้อนกลับ</span>
              </button>

              <button
                className="flex items-center bg-[#2256A3] text-white px-6 py-2 rounded-full shadow-lg font-light"
                onClick={() => {
                  if (!validateValues()) return;

                  nextPage();
                }}
              >
                <span>ลอยกระทง !</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface ResultData {
  kratong: Selected;
  wish: Wish;
}

interface ResultProps {
  data: ResultData;
}

const Result: NextPage<ResultProps> = ({ data }) => {
  console.log(data);

  return (
    <>
      <div className="flex items-center fixed min-h-screen w-full top-0 z-20 px-10 font-ui">
        <h1>success!</h1>
      </div>
    </>
  );
};

interface KratongData {
  kratong: Selected;
  wish: Wish;
}

export const Create: NextPage = () => {
  const [data, setData] = useState<KratongData>({
    kratong: {
      base: "banana-leaf",
      flowers: "love",
      candles: "yellow",
      decorations: "nak",
      offset: 0,
    },
    wish: {
      name: "",
      content: "",
    },
  });

  const [page, setPage] = useState(1);

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
      {page === 3 && <Result data={data} />}
    </>
  );
};

const Draft = () => {
  return <></>;
};
