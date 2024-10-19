
function CafeAndRestuarant() {
  return (
    <main className="text-white container">
      {/* first sec */}
      <section className="HomeSec2 d-flex flex-column justify-content-between align-items-center gap-4">
        {/* tabs */}
        <div className="HomeSec2Tabs mt-3 mb-5">
          <button data-tab="cafe" className="tab">
            کافه
          </button>
          <button data-tab="restuarant" className="tab">
            رستوران
          </button>
          <button data-tab="cafe-restuarant" className="tab active">
            کافه، رستوران
          </button>
        </div>
      </section>
      {/* first sec end */}
      <section className="position-relative w-100 overflow-hidden">
        {/* tab 1 */}
        <div data-content="cafe" className="cafeRestuarant-tab-container">
          {/* Categories filter */}
          <section className="CategoriesFilterSec d-flex flex-column flex-lg-row align-items-center justify-content-between gap-0 mb-3">
            {/* titles */}
            <div className="titles text-center text-lg-end">
              <h5>دسته بندی کافه</h5>
              <p>نتایج رو متناسب با نیازت بچین دوست من</p>
            </div>
            {/* filters */}
            <section className="ListFiltersContainer">
              <button className="dropdownButton">
                <span>نوع</span>
                <span className="OptionGBadge" />
                <img
                  className="OptionGIcon"
                  src="./assets/img-icons/rounded-arrow-down.svg"
                  alt="icon"
                />
                <ul className="ListFilterDropDown">
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">همه</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">دارای آفر</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">اقتصادی</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">شگفت انگیز</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">لاکچری</span>
                    </label>
                  </li>
                </ul>
              </button>
              <button className="dropdownButton">
                <span>هزینه</span>
                <span className="OptionGBadge" />
                <img
                  className="OptionGIcon"
                  src="./assets/img-icons/rounded-arrow-down.svg"
                  alt="icon"
                />
                <ul className="ListFilterDropDown">
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">همه</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">دارای آفر</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">اقتصادی</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">شگفت انگیز</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">لاکچری</span>
                    </label>
                  </li>
                </ul>
              </button>
              <button className="dropdownButton">
                <span>شهر</span>
                <span className="OptionGBadge" />
                <img
                  className="OptionGIcon"
                  src="./assets/img-icons/rounded-arrow-down.svg"
                  alt="icon"
                />
                <ul className="ListFilterDropDown">
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">همه</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">دارای آفر</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">اقتصادی</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">شگفت انگیز</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">لاکچری</span>
                    </label>
                  </li>
                </ul>
              </button>
              <button className="dropdownButton">
                <span>امکانات</span>
                <span className="OptionGBadge" />
                <img
                  className="OptionGIcon"
                  src="./assets/img-icons/rounded-arrow-down.svg"
                  alt="icon"
                />
                <ul className="ListFilterDropDown">
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">همه</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">دارای آفر</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">اقتصادی</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">شگفت انگیز</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">لاکچری</span>
                    </label>
                  </li>
                </ul>
              </button>
              <button className="dropdownButton">
                <span>ترتیب</span>
                <span className="OptionGBadge" />
                <img
                  className="OptionGIcon"
                  src="./assets/img-icons/rounded-arrow-down.svg"
                  alt="icon"
                />
                <ul className="ListFilterDropDown">
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">همه</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">دارای آفر</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">اقتصادی</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">شگفت انگیز</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">لاکچری</span>
                    </label>
                  </li>
                </ul>
              </button>
            </section>
          </section>
          {/* Categories filter end */}
          {/* LIST OF CARDS */}
          <section className="CardListContainer">
            <div className="MiniCard">
              {/* DISCOUNT ICON */}
              <img src="./assets/img-icons/20dis.svg" alt="" />
              {/* CARD COVER */}
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
          {/* LIST OF CARDS END */}
        </div>
        {/* tab 1 end */}
        {/* tab 2 */}
        <div data-content="restuarant" className="cafeRestuarant-tab-container">
          {/* Categories filter */}
          <section className="CategoriesFilterSec d-flex flex-column flex-lg-row align-items-center justify-content-between gap-0 mb-3">
            {/* titles */}
            <div className="titles text-center text-lg-end">
              <h5>دسته بندی رستوران</h5>
              <p>نتایج رو متناسب با نیازت بچین دوست من</p>
            </div>
            {/* filters */}
            <section className="ListFiltersContainer">
              <button className="dropdownButton">
                <span>نوع</span>
                <span className="OptionGBadge" />
                <img
                  className="OptionGIcon"
                  src="./assets/img-icons/rounded-arrow-down.svg"
                  alt="icon"
                />
                <ul className="ListFilterDropDown">
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">همه</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">دارای آفر</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">اقتصادی</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">شگفت انگیز</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">لاکچری</span>
                    </label>
                  </li>
                </ul>
              </button>
              <button className="dropdownButton">
                <span>هزینه</span>
                <span className="OptionGBadge" />
                <img
                  className="OptionGIcon"
                  src="./assets/img-icons/rounded-arrow-down.svg"
                  alt="icon"
                />
                <ul className="ListFilterDropDown">
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">همه</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">دارای آفر</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">اقتصادی</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">شگفت انگیز</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">لاکچری</span>
                    </label>
                  </li>
                </ul>
              </button>
              <button className="dropdownButton">
                <span>شهر</span>
                <span className="OptionGBadge" />
                <img
                  className="OptionGIcon"
                  src="./assets/img-icons/rounded-arrow-down.svg"
                  alt="icon"
                />
                <ul className="ListFilterDropDown">
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">همه</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">دارای آفر</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">اقتصادی</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">شگفت انگیز</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">لاکچری</span>
                    </label>
                  </li>
                </ul>
              </button>
              <button className="dropdownButton">
                <span>امکانات</span>
                <span className="OptionGBadge" />
                <img
                  className="OptionGIcon"
                  src="./assets/img-icons/rounded-arrow-down.svg"
                  alt="icon"
                />
                <ul className="ListFilterDropDown">
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">همه</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">دارای آفر</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">اقتصادی</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">شگفت انگیز</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">لاکچری</span>
                    </label>
                  </li>
                </ul>
              </button>
              <button className="dropdownButton">
                <span>ترتیب</span>
                <span className="OptionGBadge" />
                <img
                  className="OptionGIcon"
                  src="./assets/img-icons/rounded-arrow-down.svg"
                  alt="icon"
                />
                <ul className="ListFilterDropDown">
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">همه</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">دارای آفر</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">اقتصادی</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">شگفت انگیز</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">لاکچری</span>
                    </label>
                  </li>
                </ul>
              </button>
            </section>
          </section>
          {/* Categories filter end */}
          {/* LIST OF CARDS */}
          <section className="CardListContainer">
            <div className="MiniCard">
              {/* DISCOUNT ICON */}
              <img src="./assets/img-icons/20dis.svg" alt="" />
              {/* CARD COVER */}
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
          {/* LIST OF CARDS END */}
        </div>
        {/* tab 2 end */}
        {/* tab 3 */}
        <div
          data-content="cafe-restuarant"
          className="cafeRestuarant-tab-container show"
        >
          {/* Categories filter */}
          <section className="CategoriesFilterSec d-flex flex-column flex-lg-row align-items-center justify-content-between gap-0 mb-3">
            {/* titles */}
            <div className="titles text-center text-lg-end">
              <h5>دسته بندی کافه و رستوران ها</h5>
              <p>نتایج رو متناسب با نیازت بچین دوست من</p>
            </div>
            {/* filters */}
            <section className="ListFiltersContainer">
              <button className="dropdownButton">
                <span>نوع</span>
                <span className="OptionGBadge" />
                <img
                  className="OptionGIcon"
                  src="./assets/img-icons/rounded-arrow-down.svg"
                  alt="icon"
                />
                <ul className="ListFilterDropDown">
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">همه</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">دارای آفر</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">اقتصادی</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">شگفت انگیز</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">لاکچری</span>
                    </label>
                  </li>
                </ul>
              </button>
              <button className="dropdownButton">
                <span>هزینه</span>
                <span className="OptionGBadge" />
                <img
                  className="OptionGIcon"
                  src="./assets/img-icons/rounded-arrow-down.svg"
                  alt="icon"
                />
                <ul className="ListFilterDropDown">
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">همه</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">دارای آفر</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">اقتصادی</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">شگفت انگیز</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">لاکچری</span>
                    </label>
                  </li>
                </ul>
              </button>
              <button className="dropdownButton">
                <span>شهر</span>
                <span className="OptionGBadge" />
                <img
                  className="OptionGIcon"
                  src="./assets/img-icons/rounded-arrow-down.svg"
                  alt="icon"
                />
                <ul className="ListFilterDropDown">
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">همه</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">دارای آفر</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">اقتصادی</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">شگفت انگیز</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">لاکچری</span>
                    </label>
                  </li>
                </ul>
              </button>
              <button className="dropdownButton">
                <span>امکانات</span>
                <span className="OptionGBadge" />
                <img
                  className="OptionGIcon"
                  src="./assets/img-icons/rounded-arrow-down.svg"
                  alt="icon"
                />
                <ul className="ListFilterDropDown">
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">همه</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">دارای آفر</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">اقتصادی</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">شگفت انگیز</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">لاکچری</span>
                    </label>
                  </li>
                </ul>
              </button>
              <button className="dropdownButton">
                <span>ترتیب</span>
                <span className="OptionGBadge" />
                <img
                  className="OptionGIcon"
                  src="./assets/img-icons/rounded-arrow-down.svg"
                  alt="icon"
                />
                <ul className="ListFilterDropDown">
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">همه</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">دارای آفر</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">اقتصادی</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">شگفت انگیز</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <img
                        className="checkImg"
                        src="./assets/img-icons/square-check.svg"
                        alt="checked icon"
                      />
                      <img
                        className="uncheckImg"
                        src="./assets/img-icons/square-uncheck.svg"
                        alt="unchecked icon"
                      />
                      <input type="checkbox" className="filterCheckbox" />
                      <span className="CheckboxSpan">لاکچری</span>
                    </label>
                  </li>
                </ul>
              </button>
            </section>
          </section>
          {/* Categories filter end */}
          {/* LIST OF CARDS */}
          <section className="CardListContainer">
            <div className="MiniCard">
              {/* DISCOUNT ICON */}
              <img src="./assets/img-icons/20dis.svg" alt="" />
              {/* CARD COVER */}
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
              <div className="CardCover">
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
                    <img src="./assets/img-icons/pipe.svg" alt="icon" />
                    <p>اسموک روم</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/tower.svg" alt="icon" />
                    <p>فرانسوری</p>
                  </div>
                  <div>
                    <img src="./assets/img-icons/guitar.svg" alt="icon" />
                    <p>موسیقی زنده</p>
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
          {/* LIST OF CARDS END */}
        </div>
        {/* tab 3 end */}
      </section>
    </main>
  );
}

export default CafeAndRestuarant;
