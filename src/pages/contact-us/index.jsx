import ContactUs from "@/components/templates/ContactUs";
import Script from "next/script";

function Index() {
  return (
    <>
      <Script src="/scripts/accordion.js" />
      <ContactUs />
    </>
  );
}

export default Index;
