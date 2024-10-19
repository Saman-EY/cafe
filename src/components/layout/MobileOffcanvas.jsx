import Link from "next/link";

function MobileOffcanvas() {
  return (
    <>
      <div className="offcanvasOverlay" />
      <section className="MobileOffcanvas">
        <button id="closeMobileOffcanvas">
          <svg
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
          </svg>
        </button>
        <ul className="p-3 mt-3 d-flex flex-column gap-3">
          <li>
            <a href="/">صفحه اصلی</a>
          </li>
          <li>
            <a href="/cafe-restuarant">کافه رستوران ها</a>
          </li>
          <li>
            <a href="/cafe-single">طلاعات کافه</a>
          </li>
          <li>
            <Link href="/contact-us">تماس با ما</Link>
          </li>
          <li>
            <Link href="/about-us">درباره ما</Link>
          </li>
          <li>
            <Link href="/reserve">اطلاعات رزرو</Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export default MobileOffcanvas;
