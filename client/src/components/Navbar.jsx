import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get("https://readright-server.onrender.com/auth/logout", { withCredentials: true }) // Include credentials with the request
      .then(res => {
        if (res.data.logout) {
          // Clear any client-side state if needed
          // For example, you might clear user data from state management or context

          // Redirect to home or login page
          navigate("/");
        }
      })
      .catch(err => console.error("Error logging out:", err));
  };

  const handleAbout = () => {
    navigate("/aboutus");
  };

  const handlePricing = () => {
    navigate("/pricing");
  };

  return (
    <div>
      <div className="navbar">
        <h1
          style={{
            fontSize: "28px",
            color: "#FFB829 ",
            transform: "scale(1.03)",
          }}
        >
          <b style={{ color: "#7678E1" }}>&nbsp;Read</b>
          Right
        </h1>

        <div className="user-info">
          <div className="abtus" onClick={handlePricing}>
            Pricing
          </div>

          <div className="abtus" onClick={handleAbout}>
            About us
          </div>
          <div className="logout" onClick={handleLogout}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
