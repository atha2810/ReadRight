import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Logout({ setRoleVar }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get("/auth/logout")
      .then(res => {
        if (res.data.logout) {
          // Clear role from localStorage
          localStorage.removeItem("role");
          if (typeof setRoleVar === 'function') {
            setRoleVar(""); // Reset role in App.js
          } else {
            console.error("setRoleVar is not a function");
          }
          navigate("/login");
        }
      })
      .catch(err => {
        console.error("Error logging out:", err);
        toast.error("Error logging out. Please try again.");
      });
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
