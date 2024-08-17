import React from "react";
import "../css/Pricing.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Pricing = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/homepage");
  };
  return (
    <div>
      <button className="back-button" onClick={handleBackClick}>
        <FaArrowLeft />
      </button>
      <div className="chosen-plan">
        <span>Your current plan : </span>
        <span className="plan-name"> Free • 30</span>
      </div>

      <h1 className="page-title">Choose a plan (Pricing will start soon!)</h1>

      <div className="pricing-table">
        <div
          className="plan starter"
          style={{ backgroundColor: "black", marginBottom: "20px" }}
        >
          <h2 className="name">Basic</h2>
          <div className="price">$Free</div>
          <ul className="features">
            <li>
              <button>
                <a href="#">
                  <span>30 book Downloads</span>
                </a>
              </button>
            </li>
          </ul>
          <button className="choose-btn" type="button">
            Choose Plan
          </button>
        </div>

        <div
          className="plan pro"
          style={{ backgroundColor: "black", marginBottom: "20px" }}
        >
          <h2 className="name">Starter</h2>
          <div className="price">₹100</div>

          <ul className="features">
            <li>
              <button>
                <a href="#">
                  <span>100 book Downloads</span>
                </a>
              </button>
            </li>
          </ul>
          <button className="choose-btn active" type="button">
            Choose Plan
          </button>
        </div>

        <div
          className="plan enterprise"
          style={{ backgroundColor: "black", marginBottom: "20px" }}
        >
          <h2 className="name">Pro</h2>
          <div className="price">₹300</div>
          <ul className="features">
            <li>
              <button>
                <a href="#">
                  <span>Unlimited book Downloads</span>
                </a>
              </button>
            </li>
          </ul>
          <button className="choose-btn" type="button">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
