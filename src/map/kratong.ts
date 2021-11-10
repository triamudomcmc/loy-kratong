export type KratongNormalPartType = {
  id: string;
  type: string;
  name: string;
  description: string;
  url: string;
};

export type KratongVariantPartType = {
  id: string;
  type: string;
  name: string;
  description: string;
  variants: string[];
};

export type KratongNoDescPartType = {
  id: string;
  type: string;
  variants: string[];
};

interface Data {
  name: string;
  description: string;
  id: string;
  type: string;
  url: string;
  offset?: number;
}

export interface KratongMapType {
  base: {
    "coconut-shell-carved": Data;
    "banana-leaf-2": Data;
    "coconut-shell": Data;
    lotus: Data;
    ice: Data;
    "banana-leaf": { name: string; description: string; id: string; type: string; url: string };
  };
  decorations: {
    "sign-quote": { name: string; description: string; id: string; variants: string[]; type: string };
    swan: Data;
    "sign-taken": { name: string; description: string; id: string; variants: string[]; type: string };
    cactus: Data;
    "sign-enttid": { name: string; description: string; id: string; variants: string[]; type: string };
    nak: Data;
    "sign-want-love": { name: string; description: string; id: string; variants: string[]; type: string };
    "sign-want-money": { name: string; description: string; id: string; variants: string[]; type: string };
  };
  flowers: {
    love: Data;
    study: Data;
    luck: Data;
    "summer-fruits": { name: string; description: string; id: string; type: string; url: string };
  };
  candles: {
    orange: Data;
    pink: Data;
    green: Data;
    blue: Data;
    yellow: Data;
    violet: { name: string; description: string; id: string; type: string; url: string };
  };
}

export const KratongMap: KratongMapType = {
  base: {
    "banana-leaf": {
      id: "banana-leaf",
      type: "normal",
      name: "ใบตอง",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/base/banana-leaf.png",
    },
    lotus: {
      id: "lotus",
      type: "normal",
      name: "ดอกบัว",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/base/lotus.png",
      offset: 12,
    },
    "coconut-shell": {
      id: "coconut-shell",
      type: "normal",
      name: "กะลามะพร้าว",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/base/coconut-shell.png",
    },
    "coconut-shell-carved": {
      id: "coconut-shel-carvedl",
      type: "normal",
      name: "กาบมะพร้าว",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/base/coconut-shell-carved.png",
      offset: 20,
    },
    ice: {
      id: "ice",
      type: "normal",
      name: "น้ำแข็ง",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/base/ice.png",
    },
    "banana-leaf-2": {
      id: "banana-leaf-2",
      type: "normal",
      name: "ใบตอง",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/base/banana-leaf-2.png",
    },
  },
  decorations: {
    nak: {
      id: "nak",
      type: "normal",
      name: "พญานาค",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/decorations/nak.png",
    },
    swan: {
      id: "swan",
      name: "หงส์",
      type: "normal",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/decorations/swan.png",
    },
    cactus: {
      id: "cactus",
      type: "normal",
      name: "กระบองเพชร",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/decorations/cactus.png",
    },
    "sign-want-love": {
      id: "sign-want-love",
      type: "variant",
      name: "ป้ายอยากมีหวานใจ",
      description: "คำอธิบาย",
      variants: [
        "/assets/images/kratong/decorations/sign/want-love/red.png",
        "/assets/images/kratong/decorations/sign/want-love/blue.png",
        "/assets/images/kratong/decorations/sign/want-love/green.png",
        "/assets/images/kratong/decorations/sign/want-love/orange.png",
        "/assets/images/kratong/decorations/sign/want-love/pink.png",
        "/assets/images/kratong/decorations/sign/want-love/violet.png",
      ],
    },
    "sign-want-money": {
      id: "sign-want-money",
      type: "variant",
      name: "ป้ายอยากเป็นเศรษฐี",
      description: "คำอธิบาย",
      variants: [
        "/assets/images/kratong/decorations/sign/want-money/red.png",
        "/assets/images/kratong/decorations/sign/want-money/blue.png",
        "/assets/images/kratong/decorations/sign/want-money/green.png",
        "/assets/images/kratong/decorations/sign/want-money/orange.png",
        "/assets/images/kratong/decorations/sign/want-money/pink.png",
        "/assets/images/kratong/decorations/sign/want-money/violet.png",
      ],
    },
    "sign-enttid": {
      id: "sign-enttid",
      type: "variant",
      name: "ป้ายเอนท์ติด",
      description: "คำอธิบาย",
      variants: [
        "/assets/images/kratong/decorations/sign/enttid/red.png",
        "/assets/images/kratong/decorations/sign/enttid/blue.png",
        "/assets/images/kratong/decorations/sign/enttid/green.png",
        "/assets/images/kratong/decorations/sign/enttid/orange.png",
        "/assets/images/kratong/decorations/sign/enttid/pink.png",
        "/assets/images/kratong/decorations/sign/enttid/violet.png",
      ],
    },
    "sign-quote": {
      id: "sign-quote",
      type: "variant",
      name: "ป้ายคำคมสุดปัง",
      description: "คำอธิบาย",
      variants: [
        "/assets/images/kratong/decorations/sign/quote/red.png",
        "/assets/images/kratong/decorations/sign/quote/blue.png",
        "/assets/images/kratong/decorations/sign/quote/green.png",
        "/assets/images/kratong/decorations/sign/quote/orange.png",
        "/assets/images/kratong/decorations/sign/quote/pink.png",
        "/assets/images/kratong/decorations/sign/quote/violet.png",
      ],
    },
    "sign-taken": {
      id: "sign-taken",
      type: "variant",
      name: "ป้ายมีคนจองแล้ว",
      description: "คำอธิบาย",
      variants: [
        "/assets/images/kratong/decorations/sign/taken/red.png",
        "/assets/images/kratong/decorations/sign/taken/blue.png",
        "/assets/images/kratong/decorations/sign/taken/green.png",
        "/assets/images/kratong/decorations/sign/taken/orange.png",
        "/assets/images/kratong/decorations/sign/taken/pink.png",
        "/assets/images/kratong/decorations/sign/taken/violet.png",
      ],
    },
  },
  flowers: {
    love: {
      id: "love",
      type: "normal",
      name: "ชุดความรัก",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/flowers/love.png",
    },
    luck: {
      id: "luck",
      type: "normal",
      name: "ชุดหนทางสู่เศรษฐี",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/flowers/luck.png",
    },
    "summer-fruits": {
      id: "summer-fruits",
      type: "normal",
      name: "ชุดรวมมิตรผลไม้ฤดูร้อน",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/flowers/summer-fruits.png",
    },
    study: {
      id: "study",
      type: "normal",
      name: "ชุดการเรียน",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/flowers/study.png",
    },
  },
  candles: {
    yellow: {
      id: "yellow",
      type: "normal",
      name: "สีเหลือง",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/candles/yellow.png",
    },
    blue: {
      id: "blue",
      type: "normal",
      name: "สีฟ้า",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/candles/blue.png",
    },
    green: {
      id: "green",
      type: "normal",
      name: "สีเขียว",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/candles/green.png",
    },
    orange: {
      id: "orange",
      type: "normal",
      name: "สีส้ม",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/candles/orange.png",
    },
    pink: {
      id: "pink",
      type: "normal",
      name: "สีชมพู",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/candles/pink.png",
    },
    violet: {
      id: "violet",
      type: "normal",
      name: "สีม่วง",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/candles/violet.png",
    },
  },
};

export const PrincipalMap: { [key: string]: any } = {
  base: {
    type: "variant",
    name: "ฐานกระทง",
    description: "คำอธิบาย",
    variants: [
      "/assets/images/principal/base/blue.png",
      "/assets/images/principal/base/indigo.png",
      "/assets/images/principal/base/pink.png",
      "/assets/images/principal/base/violet.png",
    ],
  },
  candles: {
    type: "variant",
    name: "ธูปเทียน",
    description: "คำอธิบาย",
    variants: [
      "/assets/images/principal/candles/blue.png",
      "/assets/images/principal/candles/green.png",
      "/assets/images/principal/candles/pink.png",
      "/assets/images/principal/candles/red.png",
    ],
  },
  rice: {
    type: "variant",
    name: "ข้าว",
    description: "คำอธิบาย",
    variants: ["/assets/images/principal/rice/rice1.png", "/assets/images/principal/rice/rice2.png"],
  },
  swan: {
    type: "variant",
    name: "หงส์",
    description: "คำอธิบาย",
    variants: [
      "/assets/images/principal/swan/blue.png",
      "/assets/images/principal/swan/green.png",
      "/assets/images/principal/swan/pink.png",
      "/assets/images/principal/swan/yellow.png",
    ],
  },
};
