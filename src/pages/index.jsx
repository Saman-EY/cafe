import HomePage from "@/components/templates/HomePage";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="/scripts/swiper-bundle.js" />
      <Script src="/scripts/swiper-effect-utils.js" />
      <Script src="/scripts/home-page.js" />

      <HomePage />
    </>
  );
}
