import React, { useState, useEffect } from "react";
import "../css/Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCountdown(50);

    axios
      .post("https://readright-server.onrender.com/auth/register", {
        username,
        email,
        password,
      })
      .then((res) => {
        setIsLoading(false);
        if (res.data.user) {
          toast.success("User registered successfully!");
          navigate("/login");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        toast.error("An error occurred. Please try again.");
      });
  };

  // Countdown effect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

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
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isLoading} // Disable input during loading
          />
          <span>Username</span>
        </label>
        <label>
          <input
            className="input"
            type="email"
            placeholder=""
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading} // Disable input during loading
          />
          <span>Email</span>
        </label>
        <label>
          <input
            className="input"
            type="password"
            placeholder=""
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading} // Disable input during loading
          />
          <span>Password</span>
        </label>

        <button className="submit" disabled={isLoading}>
          {isLoading ? `User will be careted in less than... ${countdown}s` : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Register;
