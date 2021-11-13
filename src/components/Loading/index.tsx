import type { NextPage } from "next";
import Image from "next/image";

export const CatLoading: NextPage = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div>
        <Image src="/assets/images/cat.gif" width={128} height={104} />
      </div>
      <p className="font-ui text-center font-light mt-2">กำลังโหลด...</p>
    </div>
  );
};
