import type { NextPage } from "next";
import styles from "@styles/modules/LoyKratong.module.scss";
import { motion } from "framer-motion";
import { WaterFourData, WaterOneData, WaterThreeData, WaterTwoData } from "@map/animations";

export const WaterOne: NextPage = () => {
  return (
    <motion.svg
      style={{ width: "125%", height: "100%", zIndex: 40, position: "relative" }}
      animate={WaterOneData.animate}
      transition={WaterOneData.transition}
      width="2992"
      height="605"
      viewBox="0 0 2992 605"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_714_12226)">
        <path
          d="M75 44.5006C54.5 31.7901 30.9962 32.5011 30.9981 44.5006C31.0001 56.5001 30.998 579.061 30.998 579.061L2962 563V48.5782C2925.86 62.6821 2907.84 62.6821 2871.7 48.5782C2835.55 34.4743 2799.41 34.4743 2763.26 48.5782C2727.12 62.6821 2690.98 62.6821 2654.83 48.5782C2618.69 34.4743 2582.54 34.4743 2546.4 48.5782C2510.25 62.6821 2474.11 62.6821 2437.96 48.5782C2401.82 34.4743 2365.68 34.4743 2329.53 48.5782C2293.39 62.6821 2257.24 62.6821 2221.1 48.5782C2184.95 34.4743 2148.81 34.4743 2112.66 48.5782C2076.52 62.6821 2040.38 62.6821 2004.23 48.5782C1968.09 34.4743 1931.94 34.4743 1895.8 48.5782C1859.65 62.6821 1823.51 62.6821 1787.36 48.5782C1751.22 34.4743 1715.07 34.4743 1678.93 48.5782C1642.78 62.6821 1606.64 62.6821 1570.49 48.5782C1534.35 34.4743 1498.21 34.4743 1462.06 48.5782C1425.92 62.6821 1389.77 62.6821 1353.63 48.5782C1317.48 34.4743 1281.34 34.4743 1245.2 48.5782C1209.05 62.6821 1172.91 62.6821 1136.76 48.5782C1100.62 34.4743 1064.47 34.4743 1028.33 48.5782C992.184 62.6821 956.041 62.6821 919.897 48.5782C883.752 34.4743 847.608 34.4743 811.463 48.5782C775.319 62.6821 739.175 62.6821 703.03 48.5782C666.886 34.4743 630.741 34.4743 594.597 48.5782C558.452 62.6821 522.308 62.6821 486.163 48.5782C450.019 34.4743 413.874 34.4743 377.729 48.5782C341.585 62.6821 305.441 62.6821 269.296 48.5782C233.152 34.4743 197.007 34.4743 160.863 48.5782C124.718 62.6821 95.5 57.2112 75 44.5006Z"
          fill="#17559D"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_714_12226"
          x="0.998047"
          y="0.232422"
          width="2991"
          height="603.829"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-5" />
          <feGaussianBlur stdDeviation="15" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_714_12226" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_714_12226" result="shape" />
        </filter>
      </defs>
    </motion.svg>
  );
};

export const WaterTwo: NextPage = () => {
  return (
    <motion.svg
      style={{ width: "125%", height: "100%", zIndex: 30, position: "relative" }}
      animate={WaterTwoData.animate}
      transition={WaterTwoData.transition}
      width="2992"
      height="603"
      viewBox="0 0 2992 603"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_714_12225)">
        <path
          d="M95.9961 49.5004C63.085 35.3965 63.9072 29.897 30.9961 44.0009V577.06H2962V46.5C2929.09 60.6039 2866.17 60.6822 2833.26 46.5783C2800.35 32.4744 2767.44 32.4744 2734.53 46.5783C2701.62 60.6822 2668.71 60.6822 2635.8 46.5783C2602.89 32.4744 2569.97 32.4744 2537.06 46.5783C2504.15 60.6822 2471.24 60.6822 2438.33 46.5783C2405.42 32.4744 2372.51 32.4744 2339.6 46.5783C2306.68 60.6822 2273.77 60.6822 2240.86 46.5783C2207.95 32.4744 2175.04 32.4744 2142.13 46.5783C2109.22 60.6822 2076.31 60.6822 2043.4 46.5783C2010.48 32.4744 1977.57 32.4744 1944.66 46.5783C1911.75 60.6822 1878.84 60.6822 1845.93 46.5783C1813.02 32.4744 1780.11 32.4744 1747.2 46.5783C1714.28 60.6822 1681.37 60.6822 1648.46 46.5783C1615.55 32.4744 1582.64 32.4744 1549.73 46.5783C1516.82 60.6822 1483.91 60.6822 1451 46.5783C1418.08 32.4744 1385.17 32.4744 1352.26 46.5783C1319.35 60.6822 1286.44 60.6822 1253.53 46.5783C1220.62 32.4744 1187.71 32.4744 1154.8 46.5783C1121.88 60.6822 1088.97 60.6822 1056.06 46.5783C1023.15 32.4744 990.24 32.4744 957.329 46.5783C924.418 60.6822 891.507 60.6822 858.596 46.5783C825.685 32.4744 792.774 32.4744 759.863 46.5783C726.952 60.6822 694.041 60.6822 661.129 46.5783C628.218 32.4744 595.307 32.4744 562.396 46.5783C529.485 60.6822 496.574 60.6822 463.663 46.5783C430.752 32.4744 397.841 32.4744 364.929 46.5783C332.018 60.6822 299.107 60.6822 266.196 46.5783C233.285 32.4744 200.374 32.4744 167.463 46.5783C134.552 60.6822 128.907 63.6043 95.9961 49.5004Z"
          fill="#154C8E"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_714_12225"
          x="0.996094"
          y="0.780273"
          width="2991"
          height="601.28"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-5" />
          <feGaussianBlur stdDeviation="15" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_714_12225" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_714_12225" result="shape" />
        </filter>
      </defs>
    </motion.svg>
  );
};

export const WaterThree = () => {
  return (
    <motion.svg
      style={{ width: "125%", height: "100%", zIndex: 20, position: "relative" }}
      animate={WaterThreeData.animate}
      transition={WaterThreeData.transition}
      width="2992"
      height="572"
      viewBox="0 0 2992 572"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_864_12780)">
        <path
          d="M125.796 45.0098C93.1961 31.6634 63.5961 31.6634 30.9961 45.0098V547H2962V45.0098C2929.4 58.3561 2896.8 58.3561 2864.2 45.0098C2831.6 31.6634 2799 31.6634 2766.4 45.0098C2733.8 58.3561 2701.2 58.3561 2668.6 45.0098C2636 31.6634 2603.4 31.6634 2570.8 45.0098C2538.2 58.3561 2505.6 58.3561 2473 45.0098C2440.4 31.6634 2407.8 31.6634 2375.2 45.0098C2342.6 58.3561 2310 58.3561 2277.4 45.0098C2244.8 31.6634 2212.2 31.6634 2179.6 45.0098C2147 58.3561 2114.4 58.3561 2081.8 45.0098C2049.2 31.6634 2016.6 31.6634 1984 45.0098C1951.4 58.3561 1918.8 58.3561 1886.2 45.0098C1853.6 31.6634 1821 31.6634 1788.4 45.0098C1755.8 58.3561 1723.2 58.3561 1690.6 45.0098C1658 31.6634 1625.4 31.6634 1592.8 45.0098C1560.2 58.3561 1527.6 58.3561 1495 45.0098C1462.4 31.6634 1429.8 31.6634 1397.2 45.0098C1364.6 58.3561 1332 58.3561 1299.4 45.0098C1266.8 31.6634 1234.2 31.6634 1201.6 45.0098C1169 58.3561 1136.4 58.3561 1103.8 45.0098C1071.2 31.6634 1038.6 31.6634 1006 45.0098C973.396 58.3561 940.796 58.3561 908.196 45.0098C875.596 31.6634 842.996 31.6634 810.396 45.0098C777.796 58.3561 745.196 58.3561 712.596 45.0098C679.996 31.6634 647.396 31.6634 614.796 45.0098C582.196 58.3561 549.596 58.3561 516.996 45.0098C484.396 31.6634 451.796 31.6634 419.196 45.0098C386.596 58.3561 353.996 58.3561 321.396 45.0098C288.796 31.6634 256.196 31.6634 223.596 45.0098C190.996 58.3561 158.396 58.3561 125.796 45.0098Z"
          fill="#0F4381"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_864_12780"
          x="0.996094"
          y="0"
          width="2991"
          height="572"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-5" />
          <feGaussianBlur stdDeviation="15" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_864_12780" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_864_12780" result="shape" />
        </filter>
      </defs>
    </motion.svg>
  );
};

export const WaterFour = () => {
  return (
    <motion.svg
      style={{ width: "125%", height: "100%", zIndex: 10, position: "relative" }}
      animate={WaterFourData.animate}
      transition={WaterFourData.transition}
      width="2992"
      height="572"
      viewBox="0 0 2992 572"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_864_12782)">
        <path
          d="M128.696 45.0098C96.1294 31.6634 63.5628 31.6634 30.9961 45.0098V547H2962V45.0098C2929.43 58.3561 2896.86 58.3561 2864.3 45.0098C2831.73 31.6634 2799.16 31.6634 2766.6 45.0098C2734.03 58.3561 2701.46 58.3561 2668.9 45.0098C2636.33 31.6634 2603.76 31.6634 2571.2 45.0098C2538.63 58.3561 2506.06 58.3561 2473.5 45.0098C2440.93 31.6634 2408.36 31.6634 2375.8 45.0098C2343.23 58.3561 2310.66 58.3561 2278.1 45.0098C2245.53 31.6634 2212.96 31.6634 2180.4 45.0098C2147.83 58.3561 2115.26 58.3561 2082.7 45.0098C2050.13 31.6634 2017.56 31.6634 1985 45.0098C1952.43 58.3561 1919.86 58.3561 1887.3 45.0098C1854.73 31.6634 1822.16 31.6634 1789.6 45.0098C1757.03 58.3561 1724.46 58.3561 1691.9 45.0098C1659.33 31.6634 1626.76 31.6634 1594.2 45.0098C1561.63 58.3561 1529.06 58.3561 1496.5 45.0098C1463.93 31.6634 1431.36 31.6634 1398.8 45.0098C1366.23 58.3561 1333.66 58.3561 1301.1 45.0098C1268.53 31.6634 1235.96 31.6634 1203.4 45.0098C1170.83 58.3561 1138.26 58.3561 1105.7 45.0098C1073.13 31.6634 1040.56 31.6634 1008 45.0098C975.429 58.3561 942.863 58.3561 910.296 45.0098C877.729 31.6634 845.163 31.6634 812.596 45.0098C780.029 58.3561 747.463 58.3561 714.896 45.0098C682.329 31.6634 649.763 31.6634 617.196 45.0098C584.629 58.3561 552.063 58.3561 519.496 45.0098C486.929 31.6634 454.363 31.6634 421.796 45.0098C389.229 58.3561 356.663 58.3561 324.096 45.0098C291.529 31.6634 258.963 31.6634 226.396 45.0098C193.829 58.3561 161.263 58.3561 128.696 45.0098Z"
          fill="#0D3666"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_864_12782"
          x="0.996094"
          y="0"
          width="2991"
          height="572"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-5" />
          <feGaussianBlur stdDeviation="15" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_864_12782" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_864_12782" result="shape" />
        </filter>
      </defs>
    </motion.svg>
  );
};
