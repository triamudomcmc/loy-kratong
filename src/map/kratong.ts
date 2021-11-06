export type KratongNormalPartType = {
  type: string;
  name: string;
  description: string;
  url: string;
};

export type KratongVariantPartType = {
  type: string;
  name: string;
  description: string;
  variants: string[];
};

export type KratongNoDescPartType = {
  type: string;
  variants: string[];
};

export const Kratong = {
  base: {
    "banana-leaf": {
      type: "normal",
      name: "ใบตอง",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/base/banana-leaf.png",
    },
    lotus: {
      type: "normal",
      name: "ดอกบัว",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/base/lotus.png",
    },
    "coconut-shell": {
      type: "normal",
      name: "กะลามะพร้าว",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/base/coconut-shell.png",
    },
    "coconut-shell-carved": {
      type: "normal",
      name: "กาบมะพร้าว",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/base/coconut-shell-carved.png",
    },
    ice: {
      type: "normal",
      name: "น้ำแข็ง",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/base/ice.png",
    },
    "banana-leaf-2": {
      type: "normal",
      name: "ใบตอง",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/base/banana-leaf-2.png",
    },
  },
  decorations: {
    nak: {
      type: "normal",
      name: "พญานาค",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/decorations/nak.png",
    },
    swan: {
      type: "normal",
      name: "หงส์",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/decorations/swan.png",
    },
    cactus: {
      type: "normal",
      name: "กระบองเพชร",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/decorations/cactus.png",
    },
    sign: {
      type: "sign",
      "want-love": {
        type: "variant",
        name: "ป้ายอยากมีหวานใจ",
        description: "คำอธิบาย",
        variants: [
          "/assets/images/kratong/decorations/sign/want-love/blue.png",
          "/assets/images/kratong/decorations/sign/want-love/green.png",
          "/assets/images/kratong/decorations/sign/want-love/orange.png",
          "/assets/images/kratong/decorations/sign/want-love/pink.png",
          "/assets/images/kratong/decorations/sign/want-love/red.png",
          "/assets/images/kratong/decorations/sign/want-love/violet.png",
        ],
      },
      "want-money": {
        type: "variant",
        name: "ป้ายอยากเป็นเศรษฐี",
        description: "คำอธิบาย",
        variants: [
          "/assets/images/kratong/decorations/sign/want-money/blue.png",
          "/assets/images/kratong/decorations/sign/want-money/green.png",
          "/assets/images/kratong/decorations/sign/want-money/orange.png",
          "/assets/images/kratong/decorations/sign/want-money/pink.png",
          "/assets/images/kratong/decorations/sign/want-money/red.png",
          "/assets/images/kratong/decorations/sign/want-money/violet.png",
        ],
      },
      enttid: {
        type: "variant",
        name: "ป้ายเอนท์ติด",
        description: "คำอธิบาย",
        variants: [
          "/assets/images/kratong/decorations/sign/enttid/blue.png",
          "/assets/images/kratong/decorations/sign/enttid/green.png",
          "/assets/images/kratong/decorations/sign/enttid/orange.png",
          "/assets/images/kratong/decorations/sign/enttid/pink.png",
          "/assets/images/kratong/decorations/sign/enttid/red.png",
          "/assets/images/kratong/decorations/sign/enttid/violet.png",
        ],
      },
      quote: {
        name: "ป้ายคำคมสุดปัง",
        description: "คำอธิบาย",
        variants: [
          "/assets/images/kratong/decorations/sign/quote/blue.png",
          "/assets/images/kratong/decorations/sign/quote/green.png",
          "/assets/images/kratong/decorations/sign/quote/orange.png",
          "/assets/images/kratong/decorations/sign/quote/pink.png",
          "/assets/images/kratong/decorations/sign/quote/red.png",
          "/assets/images/kratong/decorations/sign/quote/violet.png",
        ],
      },
      taken: {
        type: "variant",
        name: "ป้ายมีคนจองแล้ว",
        description: "คำอธิบาย",
        variants: [
          "/assets/images/kratong/decorations/sign/taken/blue.png",
          "/assets/images/kratong/decorations/sign/taken/green.png",
          "/assets/images/kratong/decorations/sign/taken/orange.png",
          "/assets/images/kratong/decorations/sign/taken/pink.png",
          "/assets/images/kratong/decorations/sign/taken/red.png",
          "/assets/images/kratong/decorations/sign/taken/violet.png",
        ],
      },
    },
  },
  flowers: {
    love: {
      type: "normal",
      name: "ชุดความรัก",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/flowers/love.png",
    },
    luck: {
      type: "normal",
      name: "ชุดหนทางสู่เศรษฐี",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/flowers/luck.png",
    },
    "summer-fruits": {
      type: "normal",
      name: "ชุดรวมมิตรผลไม้ฤดูร้อน",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/flowers/summer-fruits.png",
    },
    study: {
      type: "normal",
      name: "ชุดการเรียน",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/flowers/study.png",
    },
  },
  other: {
    candles: {
      type: "variant",
      variants: [
        "/assets/images/kratong/other/candles/blue.png",
        "/assets/images/kratong/other/candles/green.png",
        "/assets/images/kratong/other/candles/orange.png",
        "/assets/images/kratong/other/candles/pink.png",
        "/assets/images/kratong/other/candles/violet.png",
        "/assets/images/kratong/other/candles/yellow.png",
      ],
    },
  },
};

export const Principal = {
  base: {
    type: "variant",
    variants: [
      "/assets/images/principal/base/blue.png",
      "/assets/images/principal/base/indigo.png",
      "/assets/images/principal/base/pink.png",
      "/assets/images/principal/base/violet.png",
    ],
  },
  candles: {
    type: "variant",
    variants: [
      "/assets/images/principal/candles/blue.png",
      "/assets/images/principal/candles/green.png",
      "/assets/images/principal/candles/pink.png",
      "/assets/images/principal/candles/red.png",
    ],
  },
  rice: {
    type: "variant",
    variants: ["/assets/images/principal/rice/rice1.png", "/assets/images/principal/rice/rice2.png"],
  },
  swan: {
    type: "variant",
    variants: [
      "/assets/images/principal/swan/blue.png",
      "/assets/images/principal/swan/green.png",
      "/assets/images/principal/swan/pink.png",
      "/assets/images/principal/swan/yellow.png",
    ],
  },
};
