import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <header>
      {/* mobile navbar */}
      <section className="MobileNavbar d-flex justify-content-between align-items-center px-5 d-md-none">
        <button id="OpenMobileOffcanvas">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
        <img src="../../assets/img-icons/takhfifcoffe-light.svg" alt="icon" />
      </section>
      {/* mobile navbar end */}
      {/* desktop navbar */}
      <section className="DesktopNavbar p-4 mt-3">
        {/* logo - navlinks */}
        <div className="first d-flex align-items-center gap-4">
          <img src="../../assets/img-icons/takhfifcoffe-light.svg" alt="logo" />
          <ul className="d-flex gap-5 align-items-center">
            <li className={` ${pathname === "/" ? "active" : null}`}>
              <Link href="/" >صفحه اصلی</Link>
            </li>
            <li
              className={` ${
                pathname === "/cafe-restuarant" ? "active" : null
              }`}
            >
              <Link href="/cafe-restuarant">کافه، رستوران ها</Link>
            </li>
            <li className={` ${pathname === "/cafe-single" ? "active" : null}`}>
              <Link href="/cafe-single">اطلاعات کافه</Link>
            </li>
            <li className={` ${pathname === "/contact-us" ? "active" : null}`}>
              <Link href="/contact-us">تماس با ما</Link>
            </li>
            <li className={` ${pathname === "/about-us" ? "active" : null}`}>
              <Link href="/about-us">درباره ما</Link>
            </li>
            <li className={` ${pathname === "/reserve" ? "active" : null}`}>
              <Link href="/reserve">اطلاعات رزرو</Link>
            </li>
          </ul>
        </div>
        {/* search - login */}
        <div className="second d-flex align-items-center gap-2">
          <div className="d-flex align-items-end gap-1">
            <button>
              <img src="./assets/img-icons/search-normal.svg" alt="icon" />
            </button>
            <div>
              <input type="text" />
            </div>
          </div>
          <Link href="/register">
            <span>
              <svg
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1469 10.87C13.0469 10.86 12.9269 10.86 12.8169 10.87C10.4369 10.79 8.54688 8.84 8.54688 6.44C8.54688 3.99 10.5269 2 12.9869 2C15.4369 2 17.4269 3.99 17.4269 6.44C17.4169 8.84 15.5269 10.79 13.1469 10.87Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.14703 14.56C5.72703 16.18 5.72703 18.82 8.14703 20.43C10.897 22.27 15.407 22.27 18.157 20.43C20.577 18.81 20.577 16.17 18.157 14.56C15.417 12.73 10.907 12.73 8.14703 14.56Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            ورود / ثبت نام
          </Link>
        </div>
      </section>
      {/* desktop navbar end */}
    </header>
  );
}

export default Header;
