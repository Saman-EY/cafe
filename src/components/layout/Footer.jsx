function Footer() {
  return (
    <footer className="mt-5">
      <section className="d-flex flex-wrap justify-content-center justify-content-md-around align-items-center gap-4">
        <div>
          <img
            className="mb-4"
            src="./assets/img-icons/takhfifcoffe-dark.svg"
            alt="logo"
          />
          <ul>
            <li>
              <a href="#">
                <img src="./assets/img-icons/instagram.svg" alt="instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./assets/img-icons/telegram.svg" alt="telegram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./assets/img-icons/linkdin.svg" alt="linkdin" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./assets/img-icons/youtube.svg" alt="youtube" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./assets/img-icons/x.svg" alt="twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./assets/img-icons/whatsapp.svg" alt="whatsapp" />
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-column gap-2">
          <span>دسترسی سریع</span>
          <ul className="d-flex flex-column gap-2">
            <li>
              <a href="#"> کافه ها </a>
            </li>
            <li>
              <a href="#"> رستوران ها </a>
            </li>
            <li>
              <a href="#"> کافه، رستوران ها </a>
            </li>
            <li>
              <a href="#"> ارتباط با ما </a>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-column gap-2">
          <span>ارتباط با ما</span>
          <ul className="d-flex flex-column gap-2">
            <li>
              <img
                className="mt-1"
                src="./assets/img-icons/phone.svg"
                alt="icon"
              />
              <div>
                <a href="#"> ۰۲۱-۲۶۲۳۲۶۲۶ </a> <br />
                <a href="#"> ۰۹۱۲-۵۸۴۹۸۳۲۱ </a>
              </div>
            </li>
            <li className="my-1">
              <img src="./assets/img-icons/map.svg" alt="icon" />
              <a href="#"> تهران - ادامه آدرس اینجا قرار می گیرد</a>
            </li>
            <li>
              <img src="./assets/img-icons/sms.svg" alt="icon" />
              <a href="#"> info@takhfifcoffe.com </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
