import CafeSingle from "@/components/templates/CafeSingle";
import Script from "next/script";

function Single() {
  return (
    <>
      <Script src="/scripts/menu-and-reserve.js" />
      {/* <Script src="../../dist/jalalidatepicker.js" /> */}

      <CafeSingle />
    </>
  );}

export default Single;
