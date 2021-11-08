import type { NextPage } from "next";
import { useState } from "react";
import { Kratong } from "./kratong";

export interface Selected {
  base: string;
  flower: string;
  candle: string;
  decoration: string;
}

export const Create: NextPage = () => {
  const [selected, setSelected] = useState<Selected>({
    base: "banana-leaf",
    flower: "love",
    candle: "yellow",
    decoration: "nak",
  });

  return (
    <>
      <main>
        <Kratong selected={selected} />
      </main>
    </>
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
