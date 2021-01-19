import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="font" href="/fonts/TTNorms-Medium.woff" as="font" />
          <link rel="font" href="/fonts/TTNorms-Medium.eot" as="font" />
          <link rel="font" href="/fonts/TTNorms-Medium.ttf" as="font" />

          <link rel="font" href="/fonts/TTNorms-Bold.woff" as="font" />
          <link rel="font" href="/fonts/TTNorms-Bold.eot" as="font" />
          <link rel="font" href="/fonts/TTNorms-Bold.ttf" as="font" />

          <link rel="font" href="/fonts/TTNorms-ExtraBold.woff" as="font" />
          <link rel="font" href="/fonts/TTNorms-ExtraBold.eot" as="font" />
          <link rel="font" href="/fonts/TTNorms-ExtraBold.ttf" as="font" />

          <link rel="stylesheet" href="/styles/reset.css" />
          <link rel="stylesheet" href="/styles/fonts.css" />
          {/* <link rel="stylesheet" href="/styles/timepad.css" /> */}

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WKQMFWB');`,
            }}
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WKQMFWB"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
