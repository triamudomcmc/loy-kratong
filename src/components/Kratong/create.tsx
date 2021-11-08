import type {NextPage} from "next";
import {useState} from "react";
import {Kratong} from "./kratong";
import {KratongMap, KratongMapType} from "@map/kratong";
import Image from "next/image";
import {ChevronRightIcon} from "@heroicons/react/solid";
import classnames from "classnames";

export interface Selected {
  base: string;
  flowers: string;
  candles: string;
  decorations: string;
  offset: number;
}

export const Create: NextPage = () => {

  const [selected, setSelected] = useState<Selected>({
    base: "banana-leaf",
    flowers: "love",
    candles: "yellow",
    decorations: "nak",
    offset: 0
  });

  const [section, setSection] = useState<"base" | "flowers" | "candles" | "decorations">("base")

  const generate = (part: "base" | "flowers" | "candles" | "decorations") => {

    let parts: any[] = []

    Object.keys(KratongMap[part]).forEach((k, i) => {
      // @ts-ignore
      const data = KratongMap[part][k]
      const partLoc = Math.ceil((i + 1) / 3) - 1
      parts[partLoc] = [...parts[partLoc] || [],
        <div key={`part_${k}`} onClick={() => {setSelected(prev => ({...prev, [part]: data.id, offset: data.offset || 0}))}} className={classnames("w-40 h-[140px] rounded-lg cursor-pointer", selected[part] === data.id && "border-2 border-white")}>
          <div className="mt-[-4px] mx-[-6px]">
            <Image priority={true} width={2388} height={1668} src={"url" in data ? data.url : data.variants[0]}/>
          </div>
        </div>
      ]
    })

    return parts.map((d, i) => (
      <div key={`col-${i}`} className="flex space-x-4">
        {
          d.map((g: Element) => (g))
        }
      </div>
    ))

  }

  return (
    <div className="flex items-center fixed min-h-screen w-full top-0 z-20 px-10">
      <div className="flex border border-white bg-white bg-opacity-20 max-w-[978px] w-full mx-auto rounded-[34px]">
        <div className="h-full w-4/12 py-28 min-w-[400px]">
          <h1 className="text-white text-2xl text-center mb-14">สร้างกระทง</h1>
          <div className="flex flex-col items-center">
            <div className="mb-[-44px]">
              <Kratong selected={selected}/>
            </div>
            <svg className="w-[320px]" viewBox="0 0 370 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="184.709" cy="20" rx="184.5" ry="20" fill="white" fillOpacity="0.3" style={{mixBlendMode: "soft-light"}}/>
            </svg>
          </div>
        </div>
        <div
          className="flex flex-col justify-between border border-white rounded-lg bg-white bg-opacity-40 h-max w-full rounded-[34px] w-8/12 px-8 py-10">
          <div>
            <div className="flex justify-between w-full mb-12 px-4">
              <button onClick={() => {setSection("base")}} className={classnames("px-14 py-2 rounded-full shadow-lg font-light", section === "base" ? "bg-[#2256A3] text-white" : "bg-white text-[#2256A3]")}>ฐาน</button>
              <button onClick={() => {setSection("flowers")}} className={classnames("px-12 py-2 rounded-full shadow-lg font-light", section === "flowers" ? "bg-[#2256A3] text-white" : "bg-white text-[#2256A3]")}>ดอกไม้</button>
              <button onClick={() => {setSection("decorations")}} className={classnames("px-8 py-2 rounded-full shadow-lg font-light", section === "decorations" ? "bg-[#2256A3] text-white" : "bg-white text-[#2256A3]")}>ของตกแต่ง</button>
            </div>
            <div className="space-y-6">
              {generate(section)}
            </div>
          </div>
          <div className="flex justify-end px-4">
            <button className="flex items-center bg-[#2256A3] text-white px-6 py-2 space-x-1 rounded-full shadow-lg font-light">
              <span>ถัดไป</span>
              <ChevronRightIcon className="w-5 h-5"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
sales [x]
- ส่งเดือนที่ 10 ได้เดือนที่ 9
customer []
- query ผิด
- join member table แทน
customers-stat []
- ตอนนี้มันเป็นจำนวนบิล
- เอาจำนวนของ all spenders มาใส่แทน
- เพิ่ม field daily visit: จำนวนลูกค้าที่ order วันนี้
- recurring นับจากลูกค้าที่เคยเปิด order ปีก่อนหน้า
stat-monthly []
- recurring - ลูกค้าที่เคยเปิด order ในเดือนก่อนหน้า

*/
