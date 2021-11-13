import "@styles/tailwind.css";
import "@styles/styles.scss";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CatLoading } from "@components/Loading";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: any) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url: any) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return loading ? (
    <CatLoading />
  ) : (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
