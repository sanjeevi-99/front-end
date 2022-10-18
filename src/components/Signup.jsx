import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate()
  const handleOnChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await axios.post("https://aqueous-dawn-48698.herokuapp.com/api/auth/signup", form)
    if (result.status === 200) {
      // const token = result.data.token
      // localStorage.setItem("token", token)
      navigate("/menu")
      localStorage.setItem('signup', true);
    }
    else {
      alert(result.data.message)
    }
  }
  return (
    <div className="rootdiv">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
        <input type="email" onChange={(e) => handleOnChange("email", e.target.value)} name="email" className="form-control middle" placeholder="Email address" required />
        <input type="password" onChange={(e) => handleOnChange("password", e.target.value)} name="password" className="form-control bottom" placeholder="Password" required />
        <button className="btn btn-md btn-primary btn-block" type="submit">Sign Up</button>
        <p className="mt-5 mb-3 text-muted">&copy; Sanjeevi</p>
      </form>
    </div>

  )
}

export default Signup;



