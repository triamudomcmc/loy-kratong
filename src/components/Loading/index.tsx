import type { NextPage } from "next";
import Image from "next/image";

export const CatLoading: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-white animate-pulse">
      <p className="font-ui text-center font-light mt-2 text-white">กำลังโหลด...</p>
    </div>
  );
};
