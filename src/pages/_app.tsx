import "@styles/tailwind.css";
import "@styles/styles.scss";
import type { AppProps } from "next/app";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { CatLoading } from "@components/Loading";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
      audioRef.current.volume = 0.7;
      audioRef.current.loop = true;
      audioRef.current.play();
    }
  }, []);

  return loading ? (
    <CatLoading />
  ) : (
    <>
      <audio ref={audioRef} className="song">
        <source src="/assets/audio/music.mp3"></source>
      </audio>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
