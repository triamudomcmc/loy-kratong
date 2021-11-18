import { FC } from "react";

export const SpeakerMute: FC<{ className?: string }> = ({ className }) => {
  return (
    <>
      <svg
        width="24"
        height="16"
        className={className}
        viewBox="0 0 24 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.77778 16C10.3764 16 10.8027 15.5737 10.8027 14.9841V1.07029C10.8027 0.480726 10.3764 0 9.75964 0C9.3424 0 9.05215 0.181406 8.58957 0.62585L4.72562 4.25397C4.66213 4.30839 4.58957 4.3356 4.49887 4.3356H1.89569C0.671202 4.3356 0 5.01587 0 6.322V9.69615C0 11.0113 0.671202 11.6825 1.89569 11.6825H4.49887C4.58957 11.6825 4.66213 11.7098 4.72562 11.7642L8.58957 15.4286C9.0068 15.8277 9.36054 16 9.77778 16Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.79 4.78999C14.0438 4.53615 14.4554 4.53615 14.7092 4.78999L17.4996 7.58037L20.29 4.78999C20.5438 4.53615 20.9554 4.53615 21.2092 4.78999C21.4631 5.04383 21.4631 5.45539 21.2092 5.70923L18.4188 8.49961L21.2092 11.29C21.4631 11.5438 21.4631 11.9554 21.2092 12.2092C20.9554 12.4631 20.5438 12.4631 20.29 12.2092L17.4996 9.41885L14.7092 12.2092C14.4554 12.4631 14.0438 12.4631 13.79 12.2092C13.5361 11.9554 13.5361 11.5438 13.79 11.29L16.5804 8.49961L13.79 5.70923C13.5361 5.45539 13.5361 5.04383 13.79 4.78999Z"
          fill="#2C2C2B"
        />
      </svg>
    </>
  );
};
