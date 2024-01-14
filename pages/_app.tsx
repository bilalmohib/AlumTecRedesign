import type { AppProps } from "next/app";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.min.css";

// Importing Components
import GlobalCssPriority from "@/app/Components/GlobalCssPriority";

import { SnackbarProvider, useSnackbar } from 'notistack';

import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalCssPriority>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </GlobalCssPriority>
  );
};
export default App;
