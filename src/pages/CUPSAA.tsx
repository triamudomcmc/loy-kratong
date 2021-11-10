import { SalaFrontBG } from "@components/Background";
import { Meta } from "@components/Meta";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { sendDataContext } from "@handlers/init";
import { useRouter } from "next/router";

export interface Wish {
  name: string;
  content: string;
}

interface CreateWishProps {
  wish: Wish;
  setWish: (wish: Wish) => void;
  nextPage: () => void;
  prevPage: () => void;
}

interface WishError {
  name: string[] | null;
  content: string[] | null;
}

const CreateWish: NextPage<CreateWishProps> = ({ wish, setWish, nextPage, prevPage }) => {
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
        <div className="flex flex-col border border-white bg-white bg-opacity-20 backdrop-blur-lg h-[80vh] max-h-[650px] max-w-[525px] w-full mx-auto rounded-[34px]">
          <div className="h-full pt-8 pb-4 sm:pb-2 w-full">
            <h1 className="text-white text-2xl text-center mb-8">ใส่คำอธิษฐาน</h1>
            <div className="flex flex-col items-center">
              <div className="relative top-[-24px] sm:top-[-12px] mb-[-47px] sm:mb-[-30px] px-16">
                <div className="w-[200px]">
                  <Image src="/assets/images/CUPSA.PNG" width="1563px" height="1587px" />
                </div>
              </div>
              <svg className="w-[240px]" viewBox="0 0 370 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div className="flex flex-col relative z-10 justify-between border border-white bg-white bg-opacity-40 h-full rounded-[34px] w-full pb-2">
            <div>
              <div className="flex flex-col space-y-2 justify-between w-full pt-6 px-4 max-h-[170px] sm:max-h-[240px] mt-3 overflow-y-auto">
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
                      className="block w-full mt-2 bg-transparent placeholder-[#f1f1f1] text-[#fff] outline-none border-b-2 border-white px-2 pt-2 pb-1 mb-4"
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
                      className="block w-full mt-2 bg-transparent placeholder-[#eee] text-[#fdfdfd] outline-none border-b-2 border-white px-2 pt-2 pb-1  mb-4"
                      placeholder="ขอให้ได้คณะที่หวัง ขอให้มีหวานใจ สาธุ"
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
                className="flex items-center bg-[#2256A3] text-white px-6 py-2 rounded-full shadow-lg font-light"
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

export interface PSAResultData {
  wish: Wish;
}

interface ResultProps {
  data: PSAResultData;
  prevPage: () => void;
}

const Result: NextPage<ResultProps> = ({ data, prevPage }) => {
  const router = useRouter();

  const send = async (query: any) => {
    if (query) {
      const res = await sendDataContext.call({ id: "CUPSAA", data: data });
      if (res) {
        console.log(res);
      }
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
          <div className="flex justify-center w-full relative top-[-24px] px-16">
            <Image src="/assets/images/CUPSA.PNG" width="1563px" height="1587px" />
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

const Create: NextPage = () => {
  const [data, setData] = useState<PSAResultData>({
    wish: {
      name: "",
      content: "",
    },
  });

  const [page, setPage] = useState(1);

  const setWish = (newWish: Wish) => {
    setData((oldData) => {
      return {
        wish: newWish,
      };
    });
  };

  const NextPage = () => {
    setPage((currPage) => (currPage === 2 ? currPage : currPage + 1));
  };

  const PrevPage = () => {
    setPage((currPage) => (currPage === 1 ? currPage : currPage - 1));
  };

  return (
    <>
      {page === 1 && <CreateWish wish={data.wish} setWish={setWish} nextPage={NextPage} prevPage={PrevPage} />}
      {page === 2 && <Result data={data} prevPage={PrevPage} />}
    </>
  );
};

const CUSPA: NextPage = () => {
  return (
    <>
      <Meta />
      <Create />
      <SalaFrontBG />
    </>
  );
};

export default CUSPA;
