
function Register() {
  return (
    <main className="RegisterPageContainer">
      <section className="RegisterPage w-100 text-white">
        <section className="RegisterCard d-flex flex-column align-items-center gap-5 p-3 pt-5">
          {/* header */}
          <div className="header d-flex flex-column justify-content-center align-items-center">
            <img src="./assets/img-icons/takhfifcoffe-light.svg" alt="logo" />
            <h5>به تخفیف کافه خوش اومدی</h5>
            <p>مشخصاتتو وارد کن</p>
          </div>
          <div className="formContainer">
            <form
              className="d-flex flex-column justify-content-center align-items-center gap-3 mb-4"
              action="#"
            >
              <div>
                <label htmlFor="name">اسم شما :</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="phone">شماره تماس :</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="password">رمز عبور :</label>
                <input type="text" />
              </div>
              <div className="d-flex flex-row align-items-center gap-2 mt-3">
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <div className="toggle-switch-background">
                    <div className="toggle-switch-handle" />
                  </div>
                </label>
                <span style={{ fontSize: ".9rem" }}>به خاطر بسپار</span>
              </div>
              <button className="mt-3">ثبت نام</button>
            </form>
            <div className="d-flex gap-2 align-items-center LoginLink">
              <span>اکانت دارید ؟</span>
              <a href="#">وارد شوید</a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Register;
