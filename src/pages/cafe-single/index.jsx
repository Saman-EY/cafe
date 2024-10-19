import CafeSingle from "@/components/templates/CafeSingle";
import Script from "next/script";

function Index() {
  return (
    <>
      <Script src="/scripts/menu-and-reserve.js" />

      <CafeSingle />
    </>
  );
}

export default Index;
