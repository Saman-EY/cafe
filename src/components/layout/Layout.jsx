import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";
import MobileOffcanvas from "./MobileOffcanvas";

function Layout({ children }) {
  const pathname = usePathname();

  if (pathname === "/register") {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <MobileOffcanvas />
      <Footer />
    </>
  );
}

export default Layout;
