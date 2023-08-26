import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>AlumTec</title>
      {/* Font Awesome */}
      {/* <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        rel="stylesheet"
      /> */}
      {/* Google Fonts */}
      {/* <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        rel="stylesheet"
      /> */}
      {/* MDB */}
      {/* <link
        href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.css"
        rel="stylesheet"
      /> */}
      <meta
        name="description"
        content="Aluminium curtain wall, windows and doors are our speciality."
      />
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
