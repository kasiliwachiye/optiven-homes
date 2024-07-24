import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Header from "../components/header";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="main">
      <Header />
      <AnimatePresence mode="wait">
        <div className="content">
          <Component key={router.route} {...pageProps} />
        </div>
      </AnimatePresence>
    </div>
  );
}
