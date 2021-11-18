import { KratongData, ResultData } from "@components/Kratong/create";
import { DownloadIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
const InApp = require("detect-inapp");

export const Navbar: NextPage = () => {
  return (
    <header className="flex w-full px-6 py-6 fixed top-0 left-0 z-[99]">
      <nav className="max-w-[124px]">
        <Image src="/assets/images/logo.png" width="1024px" height="169px" alt="โลโก้ กช." />
      </nav>
    </header>
  );
};

export const NavLoy: NextPage = () => {
  const [waiting, setWaiting] = useState(false);
  const [prevEntity, setPrevEntity] = useState<undefined | ResultData>(undefined);

  useEffect(() => {
    setPrevEntity(JSON.parse(localStorage.getItem("entity") || "{}"));
  }, []);

  const onClick = async () => {
    if (!prevEntity || waiting) return;
    const imgUrl = `/api/capture?data=${JSON.stringify(prevEntity)}`;

    setWaiting(true);

    const res = await fetch(imgUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (res.ok) {
      const inapp = new InApp(navigator.userAgent || navigator.vendor);
      if (inapp.browser === "line" || inapp.browser === "messenger" || inapp.browser === "facebook") {
        const a = document.createElement("a");
        a.href = imgUrl;
        a.download = `loykratong.jpg`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        const a = document.createElement("a");
        a.href = window.URL.createObjectURL(await res.blob());
        a.download = `loykratong.jpg`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
    }

    setWaiting(false);
  };

  return (
    <header className="flex justify-between items-center w-screen px-6 py-6 fixed top-0 left-0 z-[99]">
      <nav className="max-w-[124px]">
        <Image src="/assets/images/logo.png" width="1024px" height="169px" alt="โลโก้ กช." />
      </nav>
      <div
        onClick={onClick}
        className="flex text-[12px] cursor-pointer sm:text-sm hover:bg-gray-600 transition-colors rounded-full border text-white border-white bg-[#051018] px-6 py-2 space-x-1 font-light"
      >
        <DownloadIcon className="sm:w-5 sm:h-5 h-4 w-4" />
        <span className="font-ui">{waiting ? "กำลังโหลด..." : "บันทึกภาพกระทง"}</span>
      </div>
    </header>
  );
};
