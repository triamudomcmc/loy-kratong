import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import React from "react";

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="th">
        <Head>
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Maitree:wght@600;700&display=swap" rel="stylesheet" />
          <link
            rel="preload"
            href="/assets/fonts/ChulaNarak Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="/favicon.ico" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-K3262R253B"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
			  window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments);}
			  gtag('js', new Date());
			  gtag('config', 'G-K3262R253B', {
				page_path: window.location.pathname,
			  });
			`,
            }}
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://loykratong.triamudom.club/" />
          <meta property="og:title" content="ลอยกระทงออนไลน์ 2021" />
          <meta
            property="og:description"
            content="ลอยกระทงออนไลน์ 2021 ร่วมลอยกระทงออนไลน์ โดยคณะกรรมการงานกิจกรรมพัฒนาผู้เรียน โรงเรียนเตรียมอุดมศึกษา"
          />
          <meta property="og:image" content="/assets/images/banner.png" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://loykratong.triamudom.club/" />
          <meta property="twitter:title" content="ลอยกระทงออนไลน์ 2021" />
          <meta
            property="twitter:description"
            content="ลอยกระทงออนไลน์ 2021 ร่วมลอยกระทงออนไลน์ โดยคณะกรรมการงานกิจกรรมพัฒนาผู้เรียน โรงเรียนเตรียมอุดมศึกษา"
          />
          <meta property="twitter:image" content="/assets/images/banner.png" />

          <meta
            name="keywords"
            content="เตรียมอุดมศึกษา, กช., ลอยกระทง, สร้างกระทง, ลอยกระทงกับเพื่อน, Loy Kratong, Loy Krathong, ลอยกระทงอยู่บ้าน, ลอยกระทงออนไลน์, 2564, ลอยกระทงออนไลน์ 2564, ลอยกระทงเตรียม, ลอยกระทงเตรียมอุดม, กช. เตรียมอุดม, กช เตรียมอุดม, เตรียม, คณะกรรมการงานกิจกรรมพัฒนาผู้เรียน"
          />
          <meta name="author" content="คณะกรรมการงานกิจกรรมพัฒนาผู้เรียน โรงเรียนเตรียมอุดมศึกษา" />
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
