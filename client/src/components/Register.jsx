import React from "react";
import "../css/Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

function Register() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://readright-server.onrender.com/auth/register", {
        username,
        email,
        password,
      })
      .then(res => {
        if (res.data.user) {
          toast.success("User registered successfully!");
          navigate("/login");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="main">
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Sign Up</p>
        <p className="message">Create your login!</p>

        <label>
          <input
            className="input"
            type="text"
            placeholder=""
            onChange={e => setName(e.target.value)}
            required
          />
          <span>Username</span>
        </label>
        <label>
          <input
            className="input"
            type="email"
            placeholder=""
            onChange={e => setEmail(e.target.value)}
            required
          />
          <span>Email</span>
        </label>
        <label>
          <input
            className="input"
            type="password"
            placeholder=""
            onChange={e => setPassword(e.target.value)}
            required
          />
          <span>Password</span>
        </label>

        <button className="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
