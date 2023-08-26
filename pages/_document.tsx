import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>AlumTec</title>
      {/* <!-- ALUM TEC ICON --> */}
      <link rel="icon" href="/logo.jxr" type="image/x-icon"></link>
      <body>
        <Main />
        <NextScript />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.js" />
      </body>
    </Html>
  );
}
