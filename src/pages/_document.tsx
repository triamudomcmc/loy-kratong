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
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preload"
            href="/assets/fonts/ChulaNarak Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="icon"
            href="/favicon.ico"
          />
          {/*
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-D40C14KM60"></script>
		  <script
            dangerouslySetInnerHTML={{
              __html: `
			  window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments);}
			  gtag('js', new Date());
			  gtag('config', 'G-D40C14KM60', {
				page_path: window.location.pathname,
			  });
			`,
            }}
          />*/}
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
