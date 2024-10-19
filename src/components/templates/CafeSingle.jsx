
function CafeSingle() {
  return (
    <main className="text-white container">
      {/* main slider */}
      <section className="SliderSec">
        <h5 className="mb-4">جزییات و رزرو</h5>
        <section className="SliderContainer menu-reserve">
          <div className="swiper">
            {/* Additional required wrapper */}
            <div className="swiper-wrapper">
              {/* Slides */}
              <div className="swiper-slide">
                <img
                  className="w-100 h-100"
                  src="./assets/img-icons/slide2.png"
                  alt="slide-imge"
                />
              </div>
              <div className="swiper-slide">
                <img
                  className="w-100 h-100"
                  src="./assets/img-icons/slide3.png"
                  alt="slide-imge"
                />
              </div>
              <div className="swiper-slide">
                <img
                  className="w-100 h-100"
                  src="./assets/img-icons/slide4.png"
                  alt="slide-imge"
                />
              </div>
            </div>
            <div className="swiperUtilContainer">
              <button id="mainslidernext" className="custom-next-btn">
                <img
                  src="./assets/img-icons/right-arrow-orange.svg"
                  alt="svg"
                />
              </button>
              <div className="swiper-pagination" />
              <button id="mainsliderprev" className="custom-prev-btn">
                <img src="./assets/img-icons/left-arrow-orange.svg" alt="svg" />
              </button>
            </div>
          </div>
        </section>
      </section>
      {/* main slider end */}
      {/* section 2 */}
      <section className="menu-reserve-sec2 mt-5 d-flex flex-column align-items-center justify-content-center gap-3">
        <h5>امکانات کافه، رستوران لیتالو</h5>
        <p>همه جزییات در نظر گرفته شده است</p>
        <section>
          <div className="d-flex flex-column gap-2 align-items-center">
            <img src="./assets/img-icons/tv.svg" alt="img" />
            <span>تلویزیون</span>
          </div>
          <div className="d-flex flex-column gap-2 align-items-center">
            <img src="./assets/img-icons/cake.svg" alt="img" />
            <span>مراسم تولد</span>
          </div>
          <div className="d-flex flex-column gap-2 align-items-center">
            <img src="./assets/img-icons/book.svg" alt="img" />
            <span>کافه کتاب</span>
          </div>
          <div className="d-flex flex-column gap-2 align-items-center">
            <img src="./assets/img-icons/tower2.svg" alt="img" />
            <span>فرانسوی</span>
          </div>
          <div className="d-flex flex-column gap-2 align-items-center">
            <img src="./assets/img-icons/horse.svg" alt="img" />
            <span>فضای کودک</span>
          </div>
          <div className="d-flex flex-column gap-2 align-items-center">
            <img src="./assets/img-icons/pizza2.svg" alt="img" />
            <span>پیتزا</span>
          </div>
          <div className="d-flex flex-column gap-2 align-items-center">
            <img src="./assets/img-icons/italy-tower.svg" alt="img" />
            <span>ایتالیایی</span>
          </div>
          <div className="d-flex flex-column gap-2 align-items-center">
            <img src="./assets/img-icons/guitar2.svg" alt="img" />
            <span>موزیک زنده</span>
          </div>
          <div className="d-flex flex-column gap-2 align-items-center">
            <img src="./assets/img-icons/controller.svg" alt="img" />
            <span>اتاق بازی</span>
          </div>
          <div className="d-flex flex-column gap-2 align-items-center">
            <img src="./assets/img-icons/glass-drink.svg" alt="img" />
            <span>کوکتل</span>
          </div>
          <div className="d-flex flex-column gap-2 align-items-center">
            <img src="./assets/img-icons/pipe2.svg" alt="img" />
            <span>اسموک روم</span>
          </div>
          <div className="d-flex flex-column gap-2 align-items-center">
            <img src="./assets/img-icons/palace.svg" alt="img" />
            <span>چینی</span>
          </div>
          <div className="d-flex flex-column gap-2 align-items-center">
            <img src="./assets/img-icons/sofa.svg" alt="img" />
            <span>مبلمان</span>
          </div>
          <div className="d-flex flex-column gap-2 align-items-center">
            <img src="./assets/img-icons/food3.svg" alt="img" />
            <span>سلف سرویس</span>
          </div>
          <div className="d-flex flex-column gap-2 align-items-center">
            <img src="./assets/img-icons/smoke2.svg" alt="img" />
            <span>قلیان</span>
          </div>
        </section>
      </section>
      {/* section 2 end */}
      {/* MAP SEC BAGIN */}
      <section className="px-2 px-md-0">
        <section className="MapSection">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d25909.759955952068!2d51.33222457145884!3d35.73310428374431!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1725867089078!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="flex-column gap-3 d-none d-md-flex">
            <h5>کافه، رستوران لیتالو</h5>
            <div className="d-flex align-items-start gap-2">
              <img src="./assets/img-icons/phone3.svg" alt="icon" />
              <div className="d-flex flex-column">
                <span>021-35326598</span>
                <span>0912-5654332</span>
              </div>
            </div>
            <div className="d-flex align-items-start gap-2">
              <img src="./assets/img-icons/location.svg" alt="icon" />
              <p>تهران - ادامه آدرس اینجا قرار می گیرد</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img src="./assets/img-icons/instagram3.svg" alt="icon" />
              <p>litalo_restaurant</p>
            </div>
          </div>
        </section>
      </section>
      {/* MAP SEC END */}
      {/* Cafe menu begin */}
      <section className="mt-5 d-flex flex-column justify-content-center align-items-center">
        <div className="menuSecHeader text-center">
          <h3>منو کافه، رستوران</h3>
          <p className="mb-2">همه قیمت ها به همراه تخفیف</p>
        </div>
        <div className="menuSecTabs mt-3 mb-5">
          <button data-tab="in-person" className="tab">
            انتخاب در کافه
          </button>
          <button data-tab="online" className="tab active">
            انتخاب به صورت آنلاین
          </button>
        </div>
        {/* MAIN MENU CONTAINER */}
        <section className="MainCafeMenuContainer position-relative overflow-hidden">
          {/* MENU LISTS */}
          <div
            data-content="in-person"
            className="tab-container d-flex justify-content-center align-items-center"
          >
            <section className="MenuListsSec">
              <div>
                {/* header */}
                <div className="header d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src="./assets/img-icons/drink-burger.svg" alt="icon" />
                    <p className="align-self-end mt-1">فست فود</p>
                  </div>
                  <span>
                    <img src="./assets/img-icons/20dis.svg" alt="icon" />
                  </span>
                </div>
                {/* content */}
                <ul className="content d-flex flex-column gap-3 pt-3">
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> پیتزا پپرونی </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> پیتزا آمریکانو </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> پیتزا پپرونی </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> پیتزا پپرونی </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> پیتزا پپرونی </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> پیتزا پپرونی </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                {/* header */}
                <div className="header d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src="./assets/img-icons/plate-spoon.svg" alt="icon" />
                    <p className="align-self-end mt-1">غذای ایرانی</p>
                  </div>
                  <span className="mt-1">
                    <img src="./assets/img-icons/10dis.svg" alt="icon" />
                  </span>
                </div>
                {/* content */}
                <ul className="content d-flex flex-column gap-3 pt-3">
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> باقالی پلو با ماهیچه</span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> زرشک پلو</span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> تهچین </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> زرشک پلو </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> زرشک پلو </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> زرشک پلو </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                {/* header */}
                <div className="header d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src="./assets/img-icons/hot-coffe2.svg" alt="icon" />
                    <p className="align-self-end mt-1">نوشیدنی گرم</p>
                  </div>
                  <span className="mt-1" />
                </div>
                {/* content */}
                <ul className="content d-flex flex-column gap-3 pt-3">
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> اسپرسو </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> آمریکانو </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> موکا </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> لاته </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> موکا </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> کاپوچینو </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                {/* header */}
                <div className="header d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src="./assets/img-icons/can.svg" alt="icon" />
                    <p className="align-self-end mt-1">نوشیدنی</p>
                  </div>
                  <span />
                </div>
                {/* content */}
                <ul className="content d-flex flex-column gap-3 pt-3">
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> نوشابه </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> آب </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> دوغ </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> دلتسر </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> دلتسر </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> آب </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div
            data-content="online"
            className="tab-container d-flex justify-content-center align-items-center show"
          >
            <section className="MenuListsSec">
              <div>
                {/* header */}
                <div className="header d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src="./assets/img-icons/drink-burger.svg" alt="icon" />
                    <p className="align-self-end mt-1">فست فود</p>
                  </div>
                  <span>
                    <img src="./assets/img-icons/20dis.svg" alt="icon" />
                  </span>
                </div>
                {/* content */}
                <ul className="content d-flex flex-column gap-3 pt-3">
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> پیتزا پپرونی </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> پیتزا آمریکانو </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> پیتزا پپرونی </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> پیتزا پپرونی </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> پیتزا پپرونی </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> پیتزا پپرونی </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                {/* header */}
                <div className="header d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src="./assets/img-icons/plate-spoon.svg" alt="icon" />
                    <p className="align-self-end mt-1">غذای ایرانی</p>
                  </div>
                  <span className="mt-1">
                    <img src="./assets/img-icons/10dis.svg" alt="icon" />
                  </span>
                </div>
                {/* content */}
                <ul className="content d-flex flex-column gap-3 pt-3">
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> باقالی پلو با ماهیچه</span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> زرشک پلو</span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> تهچین </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> زرشک پلو </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> زرشک پلو </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> زرشک پلو </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                {/* header */}
                <div className="header d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src="./assets/img-icons/hot-coffe2.svg" alt="icon" />
                    <p className="align-self-end mt-1">نوشیدنی گرم</p>
                  </div>
                  <span className="mt-1" />
                </div>
                {/* content */}
                <ul className="content d-flex flex-column gap-3 pt-3">
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> اسپرسو </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> آمریکانو </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> موکا </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> لاته </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> موکا </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> کاپوچینو </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                {/* header */}
                <div className="header d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src="./assets/img-icons/can.svg" alt="icon" />
                    <p className="align-self-end mt-1">نوشیدنی</p>
                  </div>
                  <span />
                </div>
                {/* content */}
                <ul className="content d-flex flex-column gap-3 pt-3">
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> نوشابه </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> آب </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> دوغ </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> دلتسر </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> دلتسر </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      {/* item div */}
                      <div className="item-div">
                        <span className="mb-1"> آب </span>
                        <div className="dashedDiv mx-1" />
                      </div>
                      {/* price div */}
                      <div className="price-div">
                        350T
                        <div className="dashedDiv" />
                      </div>
                    </div>
                    {/* btns */}
                    <div
                      style={{ marginRight: 5 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <button className="plusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <span className="menuItemQty">0</span>
                      <button className="minusBtn">
                        <img
                          style={{ width: 15, height: 15 }}
                          src="./assets/img-icons/minus.svg"
                          alt="minus"
                        />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          {/* MENU LISTS END */}
        </section>
        {/* MAIN MENU CONTAINER END */}
      </section>
      {/* Cafe menu end */}
      {/* Reserve Sec */}
      <h5 className="ReserveSecHeader mb-3">رزروتو نهایی کن</h5>
      <section className="ReserveSec d-flex flex-column flex-lg-row align-items-center justify-content-center">
        <div>
          <form className="" action="#">
            <div className="flex-column flex-md-row">
              <input type="text" placeholder="نام" />
              <input type="text" placeholder="شماره تماس" />
            </div>
            <div className="flex-column flex-md-row">
              <select id="dino-select">
                <option>تعداد نفرات</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <div className="position-relative secondDiv">
                <input
                  type="text"
                  data-jdp=""
                  data-jdp-min-date="today"
                  placeholder="تاریخ"
                  data-jdp-only-date=""
                />
                <img
                  style={{ left: 10 }}
                  className="position-absolute"
                  src="./assets/img-icons/calendar.svg"
                  alt="item"
                />
              </div>
            </div>
            <textarea
              name="reserveDescription"
              id="reserveDescription"
              placeholder="توضیحات"
              className="mt-2"
              defaultValue={""}
            />
            <button>دریافت کد رزرو</button>
          </form>
        </div>
        <img
          className="mt-5 w-100"
          src="./assets/img-icons/coffe-leaf.svg"
          alt="image"
        />
      </section>
      {/* Reserve sec end */}
    </main>
  );
}

export default CafeSingle;
