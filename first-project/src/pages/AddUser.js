import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";

const initialFormData = {
  email: "", //email
  avatar: "", //url
  first_name: "", //text
  last_name: "", //text
  age: "", //number
  password: "", //password
  position: "", //radio
  gender: "", //dropdown
  agreement: false, //checkbox
};

function AddUser(props) {
  const { addNewUser } = props;

  //state olusturduk
  const [formData, setFormData] = useState(initialFormData);

  //3. adım valid state:
  const [valid, setValid] = useState(false);

  //2. adım error state:
  const [errors, setErrors] = useState({
    email: "",
    avatar: "",
    first_name: "",
    last_name: "",
    age: "",
    password: "",
    position: "",
    gender: "",
    agreement: "",
  });

  //1. adım form schema olustur:

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email address.")
      .required("Must include an email address."),
    avatar: Yup.string().url("Must include a valid URL."),
    first_name: Yup.string()
      .min(3, "Must be at least 3 characters long.")
      .required("Must include a name."),
    last_name: Yup.string()
      .min(3, "Must be at least 3 characters long.")
      .required("Must include a surname."),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long.")
      .matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Password must contain uppercase, lowercase and number."
      )
      .required("Must include a password."),
    agreement: Yup.boolean().oneOf(
      [true],
      "You must accept the Terms and Conditions."
    ),
    age: Yup.number()
      .min(18, "Must be at least 18 years old.")
      .required("Must include an age."),
    position: Yup.string()
      .oneOf(
        ["HR", "Sales", "Education"],
        "Must select one of the three positions."
      )
      .required("Position is required."),
    gender: Yup.string()
      .oneOf(["Male", "Female"], "Please select your gender.")
      .required("Gender is required."),
  });

  function handleChange(event) {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox" //koşul
        ? event.target.checked //true ise
        : event.target.value; //false ise
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //API'ya veriyi gönderecek
    axios
      .post("https://reqres.in/api/users", formData)
      .then((response) => {
        addNewUser(response.data);
        toast.success(response.data.first_name + " isimli kullanıcı eklendi");
      })
      .catch((error) => {
        toast.error(error.response.message);
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
        <label htmlFor="first_name">
          Name:
          <input
            id="first_name"
            name="first_name"
            type="text"
            placeholder="Adınızı giriniz"
            value={formData.first_name} //controlled component
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="last_name">
          Surname:
          <input
            id="last_name"
            name="last_name"
            type="text"
            placeholder="Soyadınızı giriniz"
            value={formData.last_name}
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
        <label htmlFor="avatar">
          Avatar:
          <input
            id="avatar"
            name="avatar"
            type="url"
            placeholder="Avatar adresinizi giriniz"
            value={formData.avatar}
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
      <div>
        <label htmlFor="gender">
          Gender:
          <select onChange={handleChange} name="gender" id="gender">
            <option value="">Please select a gender</option>
            <option selected={formData.gender === "male"} value="male">
              Male
            </option>
            <option selected={formData.gender === "female"} value="female">
              Female
            </option>
          </select>
        </label>
      </div>
      <button type="submit">Giriş Yap</button>
    </form>
  );
}
export default AddUser;
