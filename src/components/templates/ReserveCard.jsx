
function ReserveCard() {
  return (
    <main className="container text-white">
      <section className="ReserveInfoSec d-flex flex-column align-items-center justify-content-center gap-4 mt-5 p-3 px-md-4 pt-5 pb-md-3">
        {/* reserve info */}
        <section className="ReserveInfo  d-flex flex-column align-items-center flex-md-row justify-content-md-between w-100">
          <div className="">
            {/* header */}
            <div className="ReserveInfoHeader d-flex align-items-center justify-content-between border-bottom border-white w-100">
              <p className="mb-2">آقای سعید محسنی</p>
              <div className="d-flex align-items-center gap-3">
                <span className="d-flex align-items-center gap-2">
                  ١٤٠٣/٥/٢
                  <img src="./assets/img-icons/calendar-2.svg" alt="icon" />
                </span>
                <span className="d-flex align-items-center gap-2 header-divider">
                  ١٥:٣٥
                  <img src="./assets/img-icons/clock.svg" alt="icon" />
                </span>
                <span className="d-flex align-items-center gap-2">
                  <img src="./assets/img-icons/printer.svg" alt="icon" />
                </span>
              </div>
            </div>
            {/* content */}
            <div className="ReserveInfoBody d-flex flex-column gap-3">
              <section>
                <div>
                  <p>شماره رزرو :</p>
                  <span>٥٠٠٠٨</span>
                </div>
                <div>
                  <p>شماره تلفن کافه :</p>
                  <span>١٢٣٤٥٦٧٨-٠٢١</span>
                </div>
                <div>
                  <p>شماره تلفن :</p>
                  <span>٠٩٣٥٨٤٢٤١٧٤</span>
                </div>
                <div>
                  <p>تاریخ رزرو :</p>
                  <span>سه شنبه ٥ تیر</span>
                </div>
              </section>
              <div className="mt-3">
                <p>آدرس کافه :</p>
                <span>تهران خیابان آزادی ادامه آدرس اینجا قرار می گیرد</span>
              </div>
            </div>
          </div>
          {/* qrcode sec */}
          <section className="QrcodeSec  d-flex justify-content-center mt-4">
            <img src="./assets/img-icons/qrcode.svg" alt="qrcode" />
          </section>
        </section>
        {/* BottomLine */}
        <div className="BottomLineContainer">
          {/* line */}
          <div className="Line" />
          <p className="">
            توجه داشته باشید تخفیف زمانی اعمال می شود که کد رزرو شده را به صندوق
            کافه ارائه دهید
          </p>
        </div>
      </section>
    </main>
  );
}

export default ReserveCard;
