import "@/styles/bootstrap.min.css";
import "@/styles/bootstrap.rtl.min.css";
import "@/styles/app.css";
import "@/styles/responsive.css";
import "@/styles/swiper-bundle.css";
import "@/styles/swiper.css";

import Script from "next/script";
import Layout from "@/components/layout/Layout";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }) {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/register" ? <Script src="/scripts/app.js" /> : null}
      <Script src="/scripts/bootstrap.bundle.min.js" />
      <Script src="/scripts/bootstrap.min.js" />
      <Script src="/scripts/swiper-bundle.js" />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
