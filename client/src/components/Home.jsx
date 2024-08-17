import React from "react";
import boy from "../assets/boy.png";

import think from "../assets/think.png";
import walk from "../assets/walk.png";
import { useState, useEffect } from "react";
import Login from "./Login";
import Register from "./Register";
import "../css/Home.css";

const images = [boy, think, walk];
function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
  const [showForm, setShowForm] = useState("register");
  const handleRegisterClick = () => {
    setShowForm("register");
  };

  const handleLoginClick = () => {
    setShowForm("login");
  };

  return (
    <div className="fullscreen">
      <div className="loginRegister">
        <div className="contentlogin">
          <div className="loginleft">
            <div className="image-container">
              <img
                className="image"
                src={images[currentImageIndex]}
                alt="boybanner"
                style={{
                  height: "469px",
                  width: "333px",
                  borderRadius: "5px 5px 5px 5px",
                  transition: "opacity 0.5s ease-in-out",
                }}
              />
              <div className="text-overlay">
                Discover Your Next Great Read !
              </div>
              <div className="text-overlay2">
                Find Inspiration And Growth In Every Chapter
              </div>
            </div>
          </div>
          <div className="loginright">
            <span style={{ fontSize: "40px", color: "white" }}>
              <b style={{ color: "#7678E1" }}>Read</b>Right
            </span>
            <div className="buttons" style={{ marginTop: "20px" }}>
              <button
                className="submit"
                onClick={handleRegisterClick}
                style={{ width: "190px" }}
              >
                Sign Up
              </button>

              <button
                style={{ marginLeft: "10px", width: "190px" }}
                className="submit"
                onClick={handleLoginClick}
              >
                Login
              </button>
            </div>

            {showForm === "register" && <Register />}
            {showForm === "login" && <Login />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
