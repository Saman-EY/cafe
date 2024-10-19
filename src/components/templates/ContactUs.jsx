
function ContactUs() {
  return (
    <main className="container text-white">
      {/* section 1 */}
      <section className="ContactUsSec1 d-flex flex-column gap-3">
        <h5 className="">ارتباط با ما</h5>
        {/* contents */}
        <div className="contents d-flex flex-column justify-content-between align-items-center flex-md-row gap-5">
          {/* form */}
          <form className="d-flex flex-column gap-3" action="#">
            <div className="d-flex flex-column gap-2">
              <label htmlFor="fullName">
                نام و نام خانوادگی
                <span>(اختیاری)</span>
              </label>
              <input type="text" placeholder="نام خود را وارد کنید" />
            </div>
            <div className="d-flex flex-column gap-2">
              <label htmlFor="fullName">ایمیل</label>
              <input type="text" placeholder="ایمیل خود را وارد کنید" />
            </div>
            <div className="d-flex flex-column gap-2">
              <label htmlFor="fullName">دیدگاه</label>
              <textarea
                name="comment"
                id="comment"
                rows={5}
                placeholder="دیدگاه خود را بنویس"
                defaultValue={""}
              />
            </div>
            <button className="mt-2">ارسال</button>
          </form>
          {/* address and links */}
          <section className="w-100">
            <div className="info">
              <section>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex align-items-center gap-2">
                    <img src="./assets/img-icons/mailbox2.svg" alt="icon" />
                    <span>کد پستی</span>
                  </div>
                  <p>6521354-6813</p>
                </div>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex align-items-center gap-2">
                    <img src="./assets/img-icons/map2.svg" alt="icon" />
                    <span>آدرس</span>
                  </div>
                  <p>
                    چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                    روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                  </p>
                </div>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex align-items-center gap-2">
                    <img src="./assets/img-icons/phone2.svg" alt="icon" />
                    <span>تماس با ما</span>
                  </div>
                  <p className="d-flex justify-content-around align-items-center fs-6">
                    021-6655235000
                    <span className="divider-circle" />
                    021-6655235000
                  </p>
                </div>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex align-items-center gap-2">
                    <img src="./assets/img-icons/mail-primary.svg" alt="icon" />
                    <span>ایمیل</span>
                  </div>
                  <p>info@mail.com</p>
                </div>
              </section>
              {/* social Links */}
              <section className="pb-5">
                <a href="#">
                  <img src="./assets/img-icons/instagram2.svg" alt="icon" />
                </a>
                <a href="#">
                  <img src="./assets/img-icons/telegram2.svg" alt="icon" />
                </a>
                <a href="#">
                  <img src="./assets/img-icons/linkdin2.svg" alt="icon" />
                </a>
                <a href="#">
                  <img src="./assets/img-icons/youtube2.svg" alt="icon" />
                </a>
                <a href="#">
                  <img src="./assets/img-icons/x2.svg" alt="icon" />
                </a>
                <a href="#">
                  <img src="./assets/img-icons/whatsapp2.svg" alt="icon" />
                </a>
              </section>
            </div>
          </section>
        </div>
      </section>
      {/* section 1 end */}
      {/* COMMON Q SEC BEGIN */}
      <section className="CommonQSec px-2 px-md-0">
        <div className="mb-5 text-center">
          <h5>سوالات متداول</h5>
          <p>جواب خیلی از سوال های شما اینجاست</p>
        </div>
        {/* accordions container  */}
        <div className="AccordionsContainer">
          <section className="AccordionSec">
            <div className="d-flex align-items-center justify-content-between gap-5 AccordionHeader">
              لورم ایپسوم متن ساختگفی با تولید سادگی نامفهوم از صنعت چاپ
              <span className="openAccordion">
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
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              <span className="closeAccordion">
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
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <p className="AccordionBody">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شن لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است، و برای شرایط فعلی افزارها شن
            </p>
          </section>
          <section className="AccordionSec">
            <div className="d-flex align-items-center justify-content-between gap-5 AccordionHeader">
              لورم ایپسوم متن ساختگفی با تولید سادگی نامفهوم از صنعت چاپ
              <span className="openAccordion">
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
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              <span className="closeAccordion">
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
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <p className="AccordionBody">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شن لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است، و برای شرایط فعلی افزارها شن
            </p>
          </section>
          <section className="AccordionSec">
            <div className="d-flex align-items-center justify-content-between gap-5 AccordionHeader">
              لورم ایپسوم متن ساختگفی با تولید سادگی نامفهوم از صنعت چاپ
              <span className="openAccordion">
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
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              <span className="closeAccordion">
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
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <p className="AccordionBody">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شن لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است، و برای شرایط فعلی افزارها شن
            </p>
          </section>
          <section className="AccordionSec">
            <div className="d-flex align-items-center justify-content-between gap-5 AccordionHeader">
              لورم ایپسوم متن ساختگفی با تولید سادگی نامفهوم از صنعت چاپ
              <span className="openAccordion">
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
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              <span className="closeAccordion">
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
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <p className="AccordionBody">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شن لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است، و برای شرایط فعلی افزارها شن
            </p>
          </section>
        </div>
      </section>
      {/* COMMON Q SEC END */}
      {/* section 3 */}
      {/* home sec5 */}
      <section className="HomeSec5 d-flex flex-column gap-3 my-5">
        <h5>به تخفیف کافه بپیوند</h5>
        <p>کافه یا رستورانتو به تخفیف کافه اضافه کن</p>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 gap-md-2">
          {/* form */}
          <form
            className="d-flex flex-column justify-content-center align-items-center gap-3"
            action="#"
          >
            <div className="d-flex flex-column">
              <label htmlFor="name">اسم شما :</label>
              <input type="text" />
            </div>
            <div className="d-flex flex-column">
              <label htmlFor="name">آدرس :</label>
              <input type="text" />
            </div>
            <div className="d-flex flex-column">
              <label htmlFor="name">شماره تماس :</label>
              <input type="text" />
            </div>
          </form>
          {/* img */}
          <img src="./assets/img-icons/burger.svg" alt="" />
        </div>
      </section>
      {/* home sec5 end */}
      {/* section 3 end */}
    </main>
  );
}

export default ContactUs;
