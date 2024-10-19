import { useState } from "react";

function HomePage() {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update the active tab when clicked
  };

  return (
    <main className="text-white container">
      {/* home sec1 */}
      <section className="HomeSec1 d-flex flex-column flex-lg-row-reverse align-items-center justify-content-between">
        <img src="./assets/img-icons/plate-of-food.svg" alt="img" />
        {/* decsription */}
        <div className="decsription d-flex flex-column gap-3 mb-5">
          <h5>تخفیف کافه</h5>
          <p>نزدیکترین کافه یا رستوران رو برا آخر هفته پیدا کن</p>
          {/* options container */}
          <div className="optionsContainer mt-5">
            <div>
              <span>لوکیشن</span>
              <button className="d-flex align-items-center justify-content-between">
                همه
                <img src="./assets/img-icons/arrow-up.svg" alt="icon" />
              </button>
            </div>
            <div>
              <span>نوع بوفه</span>
              <button className="d-flex align-items-center justify-content-between">
                کافه
                <img src="./assets/img-icons/arrow-up.svg" alt="icon" />
              </button>
            </div>
            <div>
              <span>قیمت منو ها</span>
              <button className="d-flex align-items-center justify-content-between">
                دارای آفر
                <img src="./assets/img-icons/arrow-up.svg" alt="icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* home sec1 end */}
      {/* home sec2 */}
      <section className="HomeSec2">
        <div className="HomeSec2Title text-center">
          <h3>انتخابت کدومه ؟</h3>
          <p className="mb-2">بهترین هارو براتون در نظر گرفتیم</p>
        </div>
        {/* tabs */}
        <div className="HomeSec2Tabs mt-4 mb-5">
          <button
            data-tab="cafe"
            onClick={() => handleTabClick("1")}
            className={`tab ${activeTab === "1" ? "active" : ""}`}
          >
            کافه
          </button>
          <button
            data-tab="restuarant"
            onClick={() => handleTabClick("2")}
            className={`tab ${activeTab === "2" ? "active" : ""}`}
          >
            رستوران
          </button>
          <button
            data-tab="cafe-restuarant"
            onClick={() => handleTabClick("3")}
            className={`tab ${activeTab === "3" ? "active" : ""}`}
          >
            کافه، رستوران
          </button>
        </div>
        <section className="tabsContainer position-relative  overflow-hidden">
          <div
            data-content="cafe"
            className={`tab-container ${activeTab === "1" ? "show" : ""}`}
          >
            <section
              style={{ paddingBottom: "5rem" }}
              className="CardContainer mt-4 d-flex align-items-center justify-content-center gap-3"
            >
              <div className="MiniCard">
                {/* DISCOUNT ICON */}
                <img src="./assets/img-icons/20dis.svg" alt="" />
                {/* CARD COVER */}
                <div>
                  <img
                    className="w-100"
                    src="./assets/img-icons/cardimg2.png"
                    alt="card-img"
                  />
                </div>
                {/* CARD DESCRIPTION */}
                <div className="MiniCardDescription">
                  <h4 className="py-1">کافه، رستوران شماره ۱</h4>
                  <section className="">
                    <div>
                      <img src="./assets/img-icons/food2.svg" alt="icon" />
                      <p>سلف سرویس</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/tower.svg" alt="icon" />
                      <p>فرانسوری</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/smoke.svg" alt="icon" />
                      <p>قلیان</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/pizza.svg" alt="icon" />
                      <p>فست فود</p>
                    </div>
                  </section>
                  {/* CARD BTN */}
                  <button>مشاهده و رزرو</button>
                </div>
              </div>
              <div className="MiniCard">
                {/* DISCOUNT ICON */}
                <img src="./assets/img-icons/20dis.svg" alt="" />
                {/* CARD COVER */}
                <div>
                  <img
                    className="w-100"
                    src="./assets/img-icons/cardimg2.png"
                    alt="card-img"
                  />
                </div>
                {/* CARD DESCRIPTION */}
                <div className="MiniCardDescription">
                  <h4 className="py-1">کافه، رستوران شماره ۱</h4>
                  <section className="">
                    <div>
                      <img src="./assets/img-icons/food2.svg" alt="icon" />
                      <p>سلف سرویس</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/tower.svg" alt="icon" />
                      <p>فرانسوری</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/smoke.svg" alt="icon" />
                      <p>قلیان</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/pizza.svg" alt="icon" />
                      <p>فست فود</p>
                    </div>
                  </section>
                  {/* CARD BTN */}
                  <button>مشاهده و رزرو</button>
                </div>
              </div>
              <div className="MiniCard">
                {/* DISCOUNT ICON */}
                <img src="./assets/img-icons/20dis.svg" alt="" />
                {/* CARD COVER */}
                <div>
                  <img
                    className="w-100"
                    src="./assets/img-icons/cardimg2.png"
                    alt="card-img"
                  />
                </div>
                {/* CARD DESCRIPTION */}
                <div className="MiniCardDescription">
                  <h4 className="py-1">کافه، رستوران شماره ۱</h4>
                  <section className="">
                    <div>
                      <img src="./assets/img-icons/food2.svg" alt="icon" />
                      <p>سلف سرویس</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/tower.svg" alt="icon" />
                      <p>فرانسوری</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/smoke.svg" alt="icon" />
                      <p>قلیان</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/pizza.svg" alt="icon" />
                      <p>فست فود</p>
                    </div>
                  </section>
                  {/* CARD BTN */}
                  <button>مشاهده و رزرو</button>
                </div>
              </div>
            </section>
            <a href="#" className="btn-under-slider mt-5">
              دیدن همه
              <span>
                <img src="./assets/img-icons/long-arrow.svg" alt="icon" />
              </span>
            </a>
          </div>
          <div
            data-content="restuarant"
            className={`tab-container ${activeTab === "2" ? "show" : ""}`}
          >
            <section
              style={{ paddingBottom: "5rem" }}
              className="CardContainer mt-4 d-flex align-items-center justify-content-center gap-3"
            >
              <div className="MiniCard">
                {/* DISCOUNT ICON */}
                <img src="./assets/img-icons/20dis.svg" alt="" />
                {/* CARD COVER */}
                <div>
                  <img
                    className="w-100"
                    src="./assets/img-icons/cardimg3.png"
                    alt="card-img"
                  />
                </div>
                {/* CARD DESCRIPTION */}
                <div className="MiniCardDescription">
                  <h4 className="py-1">کافه، رستوران شماره ۱</h4>
                  <section className="">
                    <div>
                      <img src="./assets/img-icons/food2.svg" alt="icon" />
                      <p>سلف سرویس</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/tower.svg" alt="icon" />
                      <p>فرانسوری</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/smoke.svg" alt="icon" />
                      <p>قلیان</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/pizza.svg" alt="icon" />
                      <p>فست فود</p>
                    </div>
                  </section>
                  {/* CARD BTN */}
                  <button>مشاهده و رزرو</button>
                </div>
              </div>
              <div className="MiniCard">
                {/* DISCOUNT ICON */}
                <img src="./assets/img-icons/20dis.svg" alt="" />
                {/* CARD COVER */}
                <div>
                  <img
                    className="w-100"
                    src="./assets/img-icons/cardimg3.png"
                    alt="card-img"
                  />
                </div>
                {/* CARD DESCRIPTION */}
                <div className="MiniCardDescription">
                  <h4 className="py-1">کافه، رستوران شماره ۱</h4>
                  <section className="">
                    <div>
                      <img src="./assets/img-icons/food2.svg" alt="icon" />
                      <p>سلف سرویس</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/tower.svg" alt="icon" />
                      <p>فرانسوری</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/smoke.svg" alt="icon" />
                      <p>قلیان</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/pizza.svg" alt="icon" />
                      <p>فست فود</p>
                    </div>
                  </section>
                  {/* CARD BTN */}
                  <button>مشاهده و رزرو</button>
                </div>
              </div>
              <div className="MiniCard">
                {/* DISCOUNT ICON */}
                <img src="./assets/img-icons/20dis.svg" alt="" />
                {/* CARD COVER */}
                <div>
                  <img
                    className="w-100"
                    src="./assets/img-icons/cardimg3.png"
                    alt="card-img"
                  />
                </div>
                {/* CARD DESCRIPTION */}
                <div className="MiniCardDescription">
                  <h4 className="py-1">کافه، رستوران شماره ۱</h4>
                  <section className="">
                    <div>
                      <img src="./assets/img-icons/food2.svg" alt="icon" />
                      <p>سلف سرویس</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/tower.svg" alt="icon" />
                      <p>فرانسوری</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/smoke.svg" alt="icon" />
                      <p>قلیان</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/pizza.svg" alt="icon" />
                      <p>فست فود</p>
                    </div>
                  </section>
                  {/* CARD BTN */}
                  <button>مشاهده و رزرو</button>
                </div>
              </div>
            </section>
            <a href="#" className="btn-under-slider mt-5">
              دیدن همه
              <span>
                <img src="./assets/img-icons/long-arrow.svg" alt="icon" />
              </span>
            </a>
          </div>
          <div
            data-content="cafe-restuarant"
            className={`tab-container ${activeTab === "3" ? "show" : ""}`}
          >
            <section
              style={{ paddingBottom: "5rem" }}
              className="CardContainer mt-4 d-flex align-items-center justify-content-center gap-3"
            >
              <div className="MiniCard">
                {/* DISCOUNT ICON */}
                <img src="./assets/img-icons/20dis.svg" alt="" />
                {/* CARD COVER */}
                <div>
                  <img
                    className="w-100"
                    src="./assets/img-icons/cardimg1.png"
                    alt="card-img"
                  />
                </div>
                {/* CARD DESCRIPTION */}
                <div className="MiniCardDescription">
                  <h4 className="py-1">کافه، رستوران شماره ۱</h4>
                  <section className="">
                    <div>
                      <img src="./assets/img-icons/food2.svg" alt="icon" />
                      <p>سلف سرویس</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/tower.svg" alt="icon" />
                      <p>فرانسوری</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/smoke.svg" alt="icon" />
                      <p>قلیان</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/pizza.svg" alt="icon" />
                      <p>فست فود</p>
                    </div>
                  </section>
                  {/* CARD BTN */}
                  <button>مشاهده و رزرو</button>
                </div>
              </div>
              <div className="MiniCard">
                {/* DISCOUNT ICON */}
                <img src="./assets/img-icons/20dis.svg" alt="" />
                {/* CARD COVER */}
                <div>
                  <img
                    className="w-100"
                    src="./assets/img-icons/cardimg1.png"
                    alt="card-img"
                  />
                </div>
                {/* CARD DESCRIPTION */}
                <div className="MiniCardDescription">
                  <h4 className="py-1">کافه، رستوران شماره ۱</h4>
                  <section className="">
                    <div>
                      <img src="./assets/img-icons/food2.svg" alt="icon" />
                      <p>سلف سرویس</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/tower.svg" alt="icon" />
                      <p>فرانسوری</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/smoke.svg" alt="icon" />
                      <p>قلیان</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/pizza.svg" alt="icon" />
                      <p>فست فود</p>
                    </div>
                  </section>
                  {/* CARD BTN */}
                  <button>مشاهده و رزرو</button>
                </div>
              </div>
              <div className="MiniCard">
                {/* DISCOUNT ICON */}
                <img src="./assets/img-icons/20dis.svg" alt="" />
                {/* CARD COVER */}
                <div>
                  <img
                    className="w-100"
                    src="./assets/img-icons/cardimg1.png"
                    alt="card-img"
                  />
                </div>
                {/* CARD DESCRIPTION */}
                <div className="MiniCardDescription">
                  <h4 className="py-1">کافه، رستوران شماره ۱</h4>
                  <section className="">
                    <div>
                      <img src="./assets/img-icons/food2.svg" alt="icon" />
                      <p>سلف سرویس</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/tower.svg" alt="icon" />
                      <p>فرانسوری</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/smoke.svg" alt="icon" />
                      <p>قلیان</p>
                    </div>
                    <div>
                      <img src="./assets/img-icons/pizza.svg" alt="icon" />
                      <p>فست فود</p>
                    </div>
                  </section>
                  {/* CARD BTN */}
                  <button>مشاهده و رزرو</button>
                </div>
              </div>
            </section>
            <a href="#" className="btn-under-slider mt-5">
              دیدن همه
              <span>
                <img src="./assets/img-icons/long-arrow.svg" alt="icon" />
              </span>
            </a>
          </div>
        </section>
      </section>
      {/* home sec2 end */}
      {/* home sec3 */}
      <section className="HomeSec3 mt-5 d-flex flex-column flex-md-row justify-content-center align-items-center gap-4">
        <img src="./assets/img-icons/starbox.svg" alt="img" />
        <div className="d-flex flex-column gap-3">
          <h5>تخفیف کافه چیه ؟</h5>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزاحان خلاقی، و فرهنگ پیشرو در زبان
            فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
            موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
            نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
            دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
      </section>
      {/* home sec3 end */}
      {/* home sec4 */}
      <section className="HomeSec4 my-5">
        <div>
          <img src="./assets/img-icons/food1.svg" alt="icon" />
          <span>۵۶</span>
          <span>تعداد رستوران ها</span>
        </div>
        <div>
          <img src="./assets/img-icons/hot-coffe.svg" alt="icon" />
          <span>١٢٠</span>
          <span>تعداد کافه ها</span>
        </div>
        <div>
          <img src="./assets/img-icons/drink-food.svg" alt="icon" />
          <span>٨٣</span>
          <span>تعداد کافه، رستوران ها</span>
        </div>
        <div>
          <img src="./assets/img-icons/calender-checked.svg" alt="icon" />
          <span>٥٤٠</span>
          <span>تعداد رزرو ها</span>
        </div>
        {/* svg */}
        <img src="./assets/img-icons/coffeDrops.svg" alt="svg" />
      </section>
      {/* home sec4 end */}
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
      {/* home sec6 */}
      <section className="HomeSec6">
        <h5>چرا تخفیف کافه ؟</h5>
        <p className="mt-2 mb-5">کیفیت و احترام در ارائه خدمات ارزش ماست</p>
        <section>
          <div>
            <img src="./assets/img-icons/headphone.svg" alt="svg" />
            <span> پشتیبانی </span>
          </div>
          <div>
            <img src="./assets/img-icons/location-checked.svg" alt="svg" />
            <span> کافه های تایید شده </span>
          </div>
          <div>
            <img src="./assets/img-icons/mailbox.svg" alt="svg" />
            <span> رزرو آسان </span>
          </div>
          <div>
            <img src="./assets/img-icons/note.svg" alt="svg" />
            <span> تنوع منو ها </span>
          </div>
          <div>
            <img src="./assets/img-icons/dollar.svg" alt="svg" />
            <span> قیمت های بهینه </span>
          </div>
          <div>
            <img src="./assets/img-icons/star-badge.svg" alt="svg" />
            <span> بهترین کیفیت </span>
          </div>
          <div>
            <img src="./assets/img-icons/check-thumb.svg" alt="svg" />
            <span> دسترسی آسان </span>
          </div>
        </section>
      </section>
      {/* home sec6 end */}
    </main>
  );
}

export default HomePage;
