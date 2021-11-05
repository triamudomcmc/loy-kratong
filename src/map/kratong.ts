export type KratongNormalPartType = {
  name: string;
  description: string;
  url: string;
};

export type KratongVariantPartType = {
  name: string;
  description: string;
  variants: string[];
};

export type KratongNoDescPartType = {
  variants: string[];
};

export const Kratong = {
  base: {
    "banana-leaf": {
      name: "ใบตอง",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/base/banana-leaf.png",
    },
    lotus: {
      name: "ดอกบัว",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/base/lotus.png",
    },
    "coconut-shell": {
      name: "กะลามะพร้าว",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/base/coconut-shell.png",
    },
    "coconut-shell-carved": {
      name: "กาบมะพร้าว",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/base/coconut-shell-carved.png",
    },
    ice: {
      name: "น้ำแข็ง",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/base/ice.png",
    },
    "banana-leaf-2": {
      name: "ใบตอง",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/base/banana-leaf-2.png",
    },
  },
  decorations: {
    nak: {
      name: "พญานาค",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/decorations/nak.png",
    },
    swan: {
      name: "หงส์",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/decorations/swan.png",
    },
    sign: {
      "want-love": {
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
      name: "ชุดความรัก",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/flowers/love.png",
    },
    luck: {
      name: "ชุดหนทางสู่เศรษฐี",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/flowers/luck.png",
    },
    "summer-fruits": {
      name: "ชุดรวมมิตรผลไม้ฤดูร้อน",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/flowers/summer-fruits.png",
    },
    study: {
      name: "ชุดการเรียน",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/flowers/study.png",
    },
    cactus: {
      name: "กระบองเพชร",
      description: "คำอธิบาย",
      url: "/assets/images/kratong/flowers/cactus.png",
    },
  },
  other: {
    candles: {
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

export const Principa = {
  base: {
    variants: [
      "/assets/images/principal/base/blue.png",
      "/assets/images/principal/base/indigo.png",
      "/assets/images/principal/base/pink.png",
      "/assets/images/principal/base/violet.png",
    ],
  },
  candles: {
    variants: [
      "/assets/images/principal/candles/blue.png",
      "/assets/images/principal/candles/green.png",
      "/assets/images/principal/candles/pink.png",
      "/assets/images/principal/candles/red.png",
    ],
  },
  rice: {
    variants: ["/assets/images/principal/rice/rice1.png", "/assets/images/principal/rice/rice2.png"],
  },
  swan: {
    variants: [
      "/assets/images/principal/swan/blue.png",
      "/assets/images/principal/swan/green.png",
      "/assets/images/principal/swan/pink.png",
      "/assets/images/principal/swan/yellow.png",
    ],
  },
};
