import axios from "axios";
import { useState } from "react";

const initialFormData = {
  name: "",
  surname: "",
  age: "",
  email: "",
  password: "",
  position: "",
  agreement: false,
};

function Login() {
  //state olusturduk
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(event) {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    console.log(newFormData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //API'ya veriyi gönderecek
    axios
      .post("https://reqres.in/api/users", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.response.message);
      })
      .finally(() => {
        console.log("İstek sonlandırıldı");
      });
    //formu sıfırlayacak
    setFormData(initialFormData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Adınızı giriniz"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="surname">
          Surname:
          <input
            id="surname"
            name="surname"
            type="text"
            placeholder="Soyadınızı giriniz"
            value={formData.surname}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="age">
          Age:
          <input
            id="age"
            name="age"
            type="number"
            placeholder="Yaşınızı giriniz"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          E-Mail:
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-Mail adresinizi giriniz"
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
          />
        </label>
      </div>
      <p>Which position are you working on?</p>
      <div>
        <input
          id="hr"
          name="position"
          type="radio"
          value="hr"
          checked={formData.position === "hr"}
          onChange={handleChange}
        />
        <label htmlFor="hr">HR</label>
      </div>
      <div>
        <input
          id="sales"
          name="position"
          type="radio"
          value="sales"
          checked={formData.position === "sales"}
          onChange={handleChange}
        />
        <label htmlFor="sales">Sales & Marketing</label>
      </div>
      <div>
        <input
          id="education"
          name="position"
          type="radio"
          value="education"
          checked={formData.position === "education"}
          onChange={handleChange}
        />
        <label htmlFor="education">Education</label>
      </div>
      <div>
        <input
          id="agreement"
          name="agreement"
          type="checkbox"
          checked={formData.agreement}
          onChange={handleChange}
        />
        <label htmlFor="agreement">I accept the terms and conditions.</label>
      </div>
      <button type="submit">Giriş Yap</button>
    </form>
  );
}
export default Login;
