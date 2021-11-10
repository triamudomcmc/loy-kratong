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

interface KratongType {
  name: string;
  description: string;
  id: string;
  type: string;
  url: string;
  offset?: number;
}

interface KratongTypeVariant {
  name: string;
  description: string;
  id: string;
  type: string;
  variants: string[];
  offset?: number;
}

export interface KratongMapType {
  base: {
    "coconut-shell-carved": KratongType;
    "banana-leaf-2": KratongType;
    "coconut-shell": KratongType;
    lotus: KratongType;
    ice: KratongType;
    "banana-leaf": KratongType;
  };
  decorations: {
    "sign-quote": KratongTypeVariant;
    swan: KratongType;
    "sign-taken": KratongTypeVariant;
    cactus: KratongType;
    "sign-enttid": KratongTypeVariant;
    nak: KratongType;
    "sign-want-love": KratongTypeVariant;
    "sign-want-money": KratongTypeVariant;
  };
  flowers: {
    love: KratongType;
    study: KratongType;
    luck: KratongType;
    "summer-fruits": KratongType;
  };
  candles: {
    orange: KratongType;
    pink: KratongType;
    green: KratongType;
    blue: KratongType;
    yellow: KratongType;
    violet: KratongType;
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
      id: "candle-yellow",
      type: "normal",
      name: "สีเหลือง",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/candles/yellow.png",
    },
    blue: {
      id: "candle-blue",
      type: "normal",
      name: "สีฟ้า",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/candles/blue.png",
    },
    green: {
      id: "candle-green",
      type: "normal",
      name: "สีเขียว",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/candles/green.png",
    },
    orange: {
      id: "candle-orange",
      type: "normal",
      name: "สีส้ม",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/candles/orange.png",
    },
    pink: {
      id: "candle-pink",
      type: "normal",
      name: "สีชมพู",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/candles/pink.png",
    },
    violet: {
      id: "candle-violet",
      type: "normal",
      name: "สีม่วง",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/candles/violet.png",
    },
  },
};

interface PrincipalMapType {
  base: {
    blue: KratongType,
    indigo: KratongType,
    pink: KratongType,
    violet: KratongType,
  },
  candles: {
    blue: KratongType,
    green: KratongType,
    pink: KratongType,
    red: KratongType
  },
  description: {
    rice1: KratongType,
    rice2: KratongType
  },
  swan: {
    blue: KratongType,
    green: KratongType,
    pink: KratongType,
    yellow: KratongType,
  }
}

export const PrincipalMap: PrincipalMapType = {
  base: {
    blue: {
      type: "normal",
      id: "base-blue",
      name: "สีฟ้า",
      description: "คำอธิบาย",
      url: "/assets/images/principal/base/blue.png",
    },
    indigo: {
      type: "normal",
      id: "base-indigo",
      name: "สีคราม",
      description: "คำอธิบาย",
      url: "/assets/images/principal/base/indigo.png",
    },
    pink: {
      type: "normal",
      id: "base-pink",
      name: "สีชมพู",
      description: "คำอธิบาย",
      url: "/assets/images/principal/base/pink.png",
    },
    violet: {
      type: "normal",
      id: "base-violet",
      name: "สีม่วง",
      description: "คำอธิบาย",
      url: "/assets/images/principal/base/violet.png",
    },
  },
  candles: {
    blue: {
      type: "normal",
      id: "candle-blue",
      name: "สีฟ้า",
      description: "คำอธิบาย",
      url: "/assets/images/principal/candles/blue.png",
    },
    green: {
      type: "normal",
      id: "candle-green",
      name: "สีเขียว",
      description: "คำอธิบาย",
      url: "/assets/images/principal/candles/green.png",
    },
    pink: {
      type: "normal",
      id: "candle-pink",
      name: "สีชมพู",
      description: "คำอธิบาย",
      url: "/assets/images/principal/candles/pink.png",
    },
    red: {
      type: "normal",
      id: "candle-red",
      name: "สีแดง",
      description: "คำอธิบาย",
      url: "/assets/images/principal/candles/red.png",
    },
  },
  description: {
    rice1: {
      type: "normal",
      id: "rice1",
      name: "ข้าว 1",
      description: "คำอธิบาย",
      url: "/assets/images/principal/rice/rice1.png"
    },
    rice2: {
      type: "normal",
      id: "rice2",
      name: "ข้าว 2",
      description: "คำอธิบาย",
      url: "/assets/images/principal/rice/rice2.png"
    },
  },
  swan: {
    blue: {
      type: "normal",
      id: "swan-blue",
      name: "สีฟ้า",
      description: "คำอธิบาย",
      url: "/assets/images/principal/swan/blue.png"
    },
    green: {
      type: "normal",
      id: "swan-green",
      name: "สีเขียว",
      description: "คำอธิบาย",
      url: "/assets/images/principal/swan/green.png"
    },
    pink: {
      type: "normal",
      id: "swan-pink",
      name: "สีชมพู",
      description: "คำอธิบาย",
      url: "/assets/images/principal/swan/pink.png"
    },
    yellow: {
      type: "normal",
      id: "swan-yellow",
      name: "สีเหลือง",
      description: "คำอธิบาย",
      url: "/assets/images/principal/swan/yellow.png"
    },
  },
};
