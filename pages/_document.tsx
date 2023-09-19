import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>AlumTec</title>
      <link rel="icon" href="/logo.jxr" type="image/x-icon"></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
