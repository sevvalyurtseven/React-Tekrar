function Login() {
  return (
    <form>
      <div>
        <label htmlFor="email">
          E-Mail:
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-Mail adresinizi giriniz"
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Şifrenizi giriniz"
          />
        </label>
      </div>
      <p>Which position are you working on?</p>
      <div>
        <input id="hr" name="position" type="radio" value="hr" />
        <label htmlFor="hr">HR</label>
      </div>
      <div>
        <input id="sales" name="position" type="radio" value="sales" />
        <label htmlFor="sales">Sales & Marketing</label>
      </div>
      <div>
        <input id="education" name="position" type="radio" value="education" />
        <label htmlFor="education">Education</label>
      </div>
      <div>
        <input id="agreement" name="agreement" type="checkbox" />
        <label htmlFor="agreement">I accept the terms and conditions.</label>
      </div>
      <button type="submit">Giriş Yap</button>
    </form>
  );
}
export default Login;
