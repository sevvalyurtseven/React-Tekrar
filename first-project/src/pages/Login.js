function Login() {
  return (
    <form>
      <div>
        <label htmlFor="email">
          E-Mail:
          <input
            id="email"
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
            type="password"
            placeholder="Şifrenizi giriniz"
          />
        </label>
      </div>
      <button type="submit">Giriş Yap</button>
    </form>
  );
}
export default Login;
