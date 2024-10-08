import React, { useEffect, useState } from "react";
import "../css/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsLoading(true);
    setCountdown(50);

    axios
      .post("https://readright-server.onrender.com/auth/login", { username, password })
      .then(res => {
        setIsLoading(false);
        if (res.data.user) {
          const role = res.data.role;
          // Navigate based on role
          if (role === "admin") {
            toast.success("Admin logged in successfully");
            navigate("/dashboard");
          } else if (role === "user") {
            toast.success("User logged in successfully");
            navigate("/homePage");
          }
        }
      })
      .catch(err => {
        setIsLoading(false);
        if (err.response && err.response.data && err.response.data.message) {
          toast.error(err.response.data.message);
        } else {
          toast.error("An error occurred. Please try again.");
        }
        console.error(err);
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

  // Function to handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isLoading) {
      handleSubmit();
    }
  };

  return (
    <div className="main">
      <div className="form">
        <p className="title">Login to ReadRight</p>
        <p className="message">Login For Full Access Of Our App!</p>
        <label>
          <input
            className="input"
            type="text"
            placeholder=""
            required
            onChange={e => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading} // Disable input during loading
          />
          <span>Username</span>
        </label>
        <label>
          <input
            className="input"
            type="password"
            placeholder=""
            required
            onChange={e => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading} // Disable input during loading
          />
          <span>Password</span>
        </label>
        <button
          className="submit"
          onClick={handleSubmit}
          disabled={isLoading} // Disable button during loading
        >
          {isLoading ? `Please wait... ${countdown}s` : "Login"}
        </button>
      </div>
    </div>
  );
}

export default Login;
