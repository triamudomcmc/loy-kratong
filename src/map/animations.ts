export const DURATION = 4000;
export const WAVEUP = 5;
export const WAVEDOWN = -5;

export const WaterOneData = {
  animate: {
    y: [0, WAVEUP, 0, WAVEDOWN, 0, WAVEUP, 0, WAVEDOWN, 0],
  },
  transition: {
    type: "tween",
    repeat: Infinity,
    duration: DURATION / 1000,
    delay: 250 / 1000,
  },
};

export const WaterTwoData = {
  animate: {
    y: [0, WAVEUP, 0, WAVEDOWN, 0, WAVEUP, 0, WAVEDOWN, 0],
  },
  transition: {
    type: "tween",
    repeat: Infinity,
    duration: DURATION / 1000,
    delay: 450 / 1000,
  },
};

export const WaterThreeData = {
  animate: {
    y: [0, WAVEUP, 0, WAVEDOWN, 0, WAVEUP, 0, WAVEDOWN, 0],
  },
  transition: {
    type: "tween",
    repeat: Infinity,
    duration: DURATION / 1000,
    delay: 650 / 1000,
  },
};

export const WaterFourData = {
  animate: {
    y: [0, WAVEUP, 0, WAVEDOWN, 0, WAVEUP, 0, WAVEDOWN, 0],
  },
  transition: {
    type: "tween",
    repeat: Infinity,
    duration: DURATION / 1000,
    delay: 850 / 1000,
  },
};
