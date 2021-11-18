import "@styles/tailwind.css";
import "@styles/styles.scss";
import type { AppProps } from "next/app";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { CatLoading } from "@components/Loading";
import { SpeakerMute } from "@components/Vector/mute";
import { SpeakerUnmute } from "@components/Vector/unmute";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [mute, setMute] = useState(true);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleStart = (url: any) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url: any) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  useEffect(() => {
    if (audioRef.current !== null) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.7;
    }
  }, []);

  return loading ? (
    <CatLoading />
  ) : (
    <>
      <audio muted={mute} ref={audioRef} className="song">
        <source src="/assets/audio/music.mp3"></source>
      </audio>
      <Component {...pageProps} />
      <div className="fixed bottom-0 w-screen z-[99]">
        <div
          className="absolute text-center right-6 bottom-4 cursor-pointer w-[36px] h-[36px]"
          onClick={() => {
            setMute(!mute);
            if (!clicked) {
              setClicked(true);
              if (audioRef.current) audioRef.current.play();
            }
          }}
        >
          {mute ? <SpeakerMute className="w-full h-full" /> : <SpeakerUnmute className="w-[80%] h-[80%]" />}
        </div>
      </div>
    </>
  );
}

export default MyApp;
