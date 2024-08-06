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
          content="Optiven Homes is aimed at providing our customers 100% professional touch. Considering your needs, wants, and plans, we create a truly unique home that is designed to suit your lifestyle, land, and budget. Optiven Homes is focusing on developing residential homes within Nairobi Metropolis and surrounding counties. Turn Your Optiven Plot Ownership Into Home Reality with our 50:40:10 Construction Plan. We Build Maisonettes, Bungalows, and Apartments."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Optiven Homes is aimed at providing our customers 100% professional touch. Considering your needs, wants, and plans, we create a truly unique home that is designed to suit your lifestyle, land, and budget. Optiven Homes is focusing on developing residential homes within Nairobi Metropolis and surrounding counties. Turn Your Optiven Plot Ownership Into Home Reality with our 50:40:10 Construction Plan. We Build Maisonettes, Bungalows, and Apartments."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Optiven Homes - Your Home. Our Commitment."
        />
        <meta
          property="og:description"
          content="Optiven Homes is aimed at providing our customers 100% professional touch. Considering your needs, wants, and plans, we create a truly unique home that is designed to suit your lifestyle, land, and budget. Optiven Homes is focusing on developing residential homes within Nairobi Metropolis and surrounding counties. Turn Your Optiven Plot Ownership Into Home Reality with our 50:40:10 Construction Plan. We Build Maisonettes, Bungalows, and Apartments."
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
          content="Optiven Homes is aimed at providing our customers 100% professional touch. Considering your needs, wants, and plans, we create a truly unique home that is designed to suit your lifestyle, land, and budget. Optiven Homes is focusing on developing residential homes within Nairobi Metropolis and surrounding counties. Turn Your Optiven Plot Ownership Into Home Reality with our 50:40:10 Construction Plan. We Build Maisonettes, Bungalows, and Apartments."
        />
        <meta name="twitter:image" content="/images/twitter-image.jpg" />
        <link rel="canonical" href="https://www.optivenhomes.co.ke" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Optiven Homes",
            "url": "https://www.optivenhomes.co.ke",
            "logo": "https://www.optivenhomes.co.ke/optiven-homes-logo.png",
            "description": "Optiven Homes is aimed at providing our customers 100% professional touch. Considering your needs, wants, and plans, we create a truly unique home that is designed to suit your lifestyle, land, and budget. Optiven Homes is focusing on developing residential homes within Nairobi Metropolis and surrounding counties. Turn Your Optiven Plot Ownership Into Home Reality with our 50:40:10 Construction Plan. We Build Maisonettes, Bungalows, and Apartments.",
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
              "telephone": "+254743404040",
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
