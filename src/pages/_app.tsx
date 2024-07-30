import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Header from "../components/header";
import Head from "next/head";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <main>
      <Head>
        <title>Optiven Homes - Your Home. Our Commitment.</title>
        <meta
          name="description"
          content="Optiven Limited offers value-added plots and land in various parts of Kenya. Discover sustainable development and innovative solutions with us."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Optiven, Real Estate Kenya, Value-added plots, Land for sale Kenya, Land for sale Nanyuki, Land for sale Kajiado, Land for sale Kitengela, Land for sale Malindi, Land for sale Nakuru, Land for sale Konza, Land for sale Thika, Sustainable Development, Innovative Solutions"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Optiven Homes - Your Home. Our Commitment."
        />
        <meta
          property="og:description"
          content="Optiven Homes offers value-added plots and land in various parts of Kenya. Discover sustainable development and innovative solutions with us."
        />
        <meta property="og:url" content="https://www.optivenhomes.co.ke" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Optiven Homes - Your Home. Our Commitment."
        />
        <meta
          name="twitter:description"
          content="Optiven Homes offers value-added plots and land in various parts of Kenya. Discover sustainable development and innovative solutions with us."
        />
        <meta name="twitter:image" content="/images/twitter-image.jpg" />
        <link rel="canonical" href="https://www.optivenhomes.co.ke" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Optiven Homes",
            "url": "https://www.optivenhomes.co.ke",
            "logo": "https://www.optivenhomes.co.ke/optiven-logo.png",
            "description": "Optiven Homes offers value-added plots and land in various parts of Kenya. Discover sustainable development and innovative solutions with us.",
            "sameAs": [
              "https://www.facebook.com/Optivenlimited",
              "https://x.com/OptivenLimited",
              "https://www.linkedin.com/company/optiven-limited",
              "https://www.youtube.com/@OptivenKenyaLimited",
              "https://www.tiktok.com/@optivenlimited"

            ],
            "areaServed": {
              "@type": "Place",
              "name": "Kenya"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+254790300300",
              "contactType": "Customer Service"
            }
          }
          `}
        </script>
      </Head>
      <Header />
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </main>
  );
}
