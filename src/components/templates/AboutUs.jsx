
function AboutUs() {
  return (
    <main className="container text-white">
  {/* SECTION 1 */}
  <section className="AboutusSec1 mt-4 d-flex flex-column flex-md-row gap-4 align-items-center justify-content-center justify-content-md-between">
    {/* text */}
    <div className="text">
      <h5>درباره ما</h5>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصفارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود
        در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
        حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
        اساسا مورد استفاده قرار گیرد.
      </p>
    </div>
    {/* img */}
    <div className="imgSec">
      <img src="./assets/img-icons/coffeMachine.svg" alt="img" />
      <img src="./assets/img-icons/coffeMachineBottomSvg.svg" alt="svg" />
    </div>
  </section>
  {/* SECTION 1 END */}
  {/* SECTION 2 */}
  <section className="HomeSec6 mt-5">
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
  {/* SECTION 2 END */}
  {/* SECTION 3 */}
  <section className="AboutusSec3 d-flex flex-column flex-md-row align-items-center justify-content-between gap-5 p-4">
    <div>
      <h5 className="text-center text-md-end">از آخرین ها مطلع شو</h5>
      <p className="mb-3 mt-2">
        آخرین کافه ها و رستوران های طرف قرار داد رو می خوای ؟
      </p>
      <div className="d-flex align-items-center justify-content-between">
        <input className="px-3" type="text" placeholder="ایمیلتو وارد کن" />
        <button className="m-1">
          ارسال
          <img src="./assets/img-icons/send1.svg" alt="svg" />
        </button>
      </div>
    </div>
    <img src="./assets/img-icons/cup-of-coffe.svg" alt="img" />
  </section>
  {/* SECTION 3 end */}
  {/* section 4 */}
  <section className="AboutusSec4 d-flex flex-column align-items-lg-center justify-content-center justify-content-lg-center">
    <h5 className="text-center">تیم تخفیف کافه</h5>
    <p className="mt-2 mb-5 text-center">با تیم ما بیشتر آشنا شوید</p>
    {/* list */}
    <div className="list mt-4">
      <div className="d-flex flex-column align-items-center justify-content-end gap-3">
        <img src="./assets/img-icons/Tmember1.png" alt="profile-pic" />
        <div className="d-flex flex-column gap-2 align-items-center justify-content-between">
          <h6>پویا قاضی</h6>
          <span>مدیر فروش</span>
          <div className="d-flex gap-3 align-items-center justify-content-between gap-2">
            <img src="./assets/img-icons/linkdin-primary.svg" alt="icon" />
            <img src="./assets/img-icons/instagram-primary.svg" alt="icon" />
            <img src="./assets/img-icons/telegram-primary.svg" alt="icon" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-end gap-3">
        <img src="./assets/img-icons/Tmember2.png" alt="profile-pic" />
        <div className="d-flex flex-column gap-2 align-items-center justify-content-between">
          <h6>نسیم گرمسار</h6>
          <span>پشتیبانی</span>
          <div className="d-flex gap-3 align-items-center justify-content-between gap-2">
            <img src="./assets/img-icons/linkdin-primary.svg" alt="icon" />
            <img src="./assets/img-icons/instagram-primary.svg" alt="icon" />
            <img src="./assets/img-icons/telegram-primary.svg" alt="icon" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-end gap-3">
        <img src="./assets/img-icons/Tmember3.png" alt="profile-pic" />
        <div className="d-flex flex-column gap-2 align-items-center justify-content-between">
          <h6>نسیم گرمسار</h6>
          <span>پشتیبانی</span>
          <div className="d-flex gap-3 align-items-center justify-content-between gap-2">
            <img src="./assets/img-icons/linkdin-primary.svg" alt="icon" />
            <img src="./assets/img-icons/instagram-primary.svg" alt="icon" />
            <img src="./assets/img-icons/telegram-primary.svg" alt="icon" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-end gap-3">
        <img src="./assets/img-icons/Tmember4.png" alt="profile-pic" />
        <div className="d-flex flex-column gap-2 align-items-center justify-content-between">
          <h6>نیما سعید خانی</h6>
          <span>پشتیبان</span>
          <div className="d-flex gap-3 align-items-center justify-content-between gap-2">
            <img src="./assets/img-icons/linkdin-primary.svg" alt="icon" />
            <img src="./assets/img-icons/instagram-primary.svg" alt="icon" />
            <img src="./assets/img-icons/telegram-primary.svg" alt="icon" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* section 4 end */}
</main>

  )
}

export default AboutUs