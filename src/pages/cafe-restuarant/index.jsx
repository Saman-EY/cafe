import CafeAndRestuarant from "@/components/templates/CafeAndRestuarant";
import Script from "next/script";

function index() {
  return (
    <>
      <Script src="/scripts/cafe-restuarant.js" />
      <CafeAndRestuarant />
    </>
  );
}

export default index;
