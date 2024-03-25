import { Head, Html, Main, NextScript } from "next/document";
import organization from "@/app/data/organization.json";

export default function Document() {

  let convertedOrganization = JSON.stringify(organization);

  return (
    <Html lang="en">
      <Head />
      <title>AlumTec</title>
      <link rel="icon" href="/logo.jxr" type="image/x-icon"></link>
      <script type="application/ld+json">{JSON.stringify(organization)}</script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
