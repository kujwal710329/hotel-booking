import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    country: undefined,
    city: undefined,
    phone: undefined,
    password: undefined,
    cpassword: undefined,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (credentials.password !== credentials.cpassword) {
        window.alert("Password not matching");
        return;
      }
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      console.log(credentials);

      const { data } = await axios.post("/auth/register", credentials, config);

      window.alert("registered successfully");
      console.log(data);
      navigate("/login");
    } catch (err) {
      console.log(err);
      window.alert("Not registered. please fill form again.");
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <p className="register-heading">Register to create an account</p>
        <input type="text" placeholder="username" id="username" onChange={handleChange} className="rInput" />
        <input type="email" placeholder="Email" id="email" onChange={handleChange} className="rInput" />
        <input type="text" placeholder="Country" id="country" onChange={handleChange} className="rInput" />
        <input type="text" placeholder="City" id="city" onChange={handleChange} className="rInput" />
        <input type="tel" placeholder="Phone" id="phone" onChange={handleChange} className="rInput" />
        <input type="password" placeholder="password" id="password" onChange={handleChange} className="rInput" />
        <input type="password" placeholder="confirm password" id="cpassword" onChange={handleChange} className="rInput" />

        {/* <button disabled={loading} onClick={handleClick} className="rButton">
          Register
        </button> */}
        <button onClick={handleClick} className="rButton">
          Register
        </button>
        <a href="login">login here</a>
        {/* {error && <span>{error.message}</span>} */}
      </div>
    </div>
  );
};

export default Register;
