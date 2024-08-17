import React from "react";
import "../css/Hero.css";
import greetGirl from "../assets/greetgirl.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="hero-container">
        <div className="greeting-section">
          <h1 style={{ fontWeight: "1000" }}>
            Explore <br />
            Beyond <b className="curved-underline">Books</b>
            <br /> Discover <b className="curved-underline">Yourself</b>
          </h1>
          <p style={{ fontSize: "18px" }}>
            {" "}
            With E-books & Journaling Questions
          </p>
        </div>
        <div className="greetImg">
          <img src={greetGirl} alt="greetimg"></img>
        </div>
        <div className="insight-section">
          <h2>Find Your Next Favorite Genre</h2>
          <p>According To Your Personal Need</p>
          <div className="discover" style={{ display: "flex" }}>
            <div className="discoverbtn">
              <Link
                to="/bookCategories"
                style={{ textDecoration: "none", color: "black" }}
              >
                <button className="discover-button">Discover Books</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
