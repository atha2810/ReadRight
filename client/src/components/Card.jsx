import React from "react";
import "../css/Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ title, subtitle, image, type }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    if (type === "book") {
      navigate("/bookCategories");
    } else if (type === "journal") {
      navigate("/journalCategories");
    }
  };
  return (
    <div className="card" onClick={handleNavigation}>
      <div className="left">
        <img
          src={image}
          alt="catimg"
          style={{ height: "115px", width: "115px", marginLeft: "78px" }}
        ></img>
      </div>
      <div className="right">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
