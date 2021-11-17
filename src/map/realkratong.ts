import { KratongData } from "@components/Kratong/create";
import { KratongData as PKratongData } from "@components/Principal/create";

export const PrincipalKratongData: PKratongData = {
  kratong: {
    base: "base-blue",
    candles: "candle-green",
    decorations: "rice2",
    swan: "swan-pink",
  },
  wish: {
    content: "ขอขมาพระแม่คงคา และขออธิษฐานให้นักเรียนทุกคนประสบความสุขโชคดีตลอดไป",
    name: "ผอ.วรรณดี นาคสุขปาน",
  },
};

export const RongPrincipalKratongsData: KratongData[] = [
  {
    kratong: {
      base: "banana-leaf",
      candles: "candle-green",
      decorations: "swan",
      flowers: "luck",
      signVariant: 0,
    },
    wish: {
      content: "ขอให้ประสบความสำเร็จทุกประการเอาชนะปัญหาต่าง ๆ",
      name: "รองผอ. ทรงเกียรติ เทพประเสน",
    },
  },
  {
    kratong: {
      base: "lotus",
      candles: "candle-yellow",
      decorations: "none",
      flowers: "summer-fruits",
      signVariant: 0,
    },
    wish: {
      content: "ขอให้คุณครูและนักเรียนเตรียมอุดมศึกษามีความสุข ปราศจากทุกข์",
      name: "รองผอ. ว่าที่ ร.ต.มานพ เพ็ญรัศมี",
    },
  },
  {
    kratong: {
      base: "lotus",
      candles: "candle-yellow",
      decorations: "none",
      flowers: "love",
      signVariant: 0,
    },
    wish: {
      content: "ขอให้มีความสุข ปราศจากความทุกข์และภยันตรายใด ๆ สุขภาพแข็งแรง เจริญรุ่งเรืองยิ่งๆขึ้นไป",
      name: "รองผอ. กิตติภพ ภวณัฐกุลธร",
    },
  },
  {
    kratong: {
      base: "banana-leaf",
      candles: "candle-green",
      decorations: "none",
      flowers: "luck",
      signVariant: 5,
    },
    wish: {
      content: "ได้แสดงถึงประเพณีไทย และ ขอบคุณพระแม่คงคา",
      name: "รองผอ. เจริญ บุตะเขียว",
    },
  },
];
