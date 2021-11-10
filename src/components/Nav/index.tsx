import { NextPage } from "next";
import Image from "next/image";

export const Navbar: NextPage = () => {
  return (
    <div className="flex w-full px-6 py-6 fixed top-0 left-0 z-50">
      <div className="max-w-[124px]">
        <Image src="/assets/images/logo.png" width="1024px" height="169px" alt="โลโก้ กช." />
      </div>
    </div>
  );
};
