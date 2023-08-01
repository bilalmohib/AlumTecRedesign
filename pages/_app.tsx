import "@/styles/globals.css";
import type { AppProps } from "next/app";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importing Components
import GlobalCssPriority from "@/app/Components/GlobalCssPriority";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalCssPriority>
      <Component {...pageProps} />
    </GlobalCssPriority>
  );
};
export default App;
