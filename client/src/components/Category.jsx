import React from "react";
import "../css/Category.css";
import greetboy from "../assets/greetboy.png";
import health from "../assets/health.png";
import mental from "../assets/mental.png";
import business from "../assets/business.png";
import money from "../assets/money.png";
import social from "../assets/social.png";
import reln from "../assets/reln.png";
import lead from "../assets/lead.png";
import scifi from "../assets/scifi.png";
import marketing from "../assets/marketing.png";
import selling from "../assets/selling.png";
import mind from "../assets/mind.png";
import spiritual from "../assets/spiritual.png";
import trade from "../assets/trade.png";
import commune from "../assets/commune.png";
import history from "../assets/history.png";
import productivity from "../assets/productivity.png";
import happiness from "../assets/happiness.png";

const categories = [
  { name: "Self improvement", img: greetboy },
  { name: "Money", img: money },
  { name: "Productivity and Time", img: productivity },
  { name: "Communication", img: commune },
  { name: "Health", img: health },
  { name: "Mental health", img: mental },
  { name: "Relationships", img: reln },
  { name: "Business & Startups", img: business },

  { name: "Selling", img: selling },
  { name: "Marketing", img: marketing },
  { name: "Social Media Marketing", img: social },
  { name: "Leadership", img: lead },
  { name: "Mind", img: mind },
  { name: "Happiness", img: happiness},

  { name: "Stocks & Trading", img: trade },
  { name: "Science + SciFi", img: scifi },
  { name: "History", img: history },
  { name: "Spirituality", img: spiritual },
];

function Category({ onSelectCategory }) {
  return (
    <div>
      {categories.map(category => (
        <div
          className="ctegory"
          key={category.name}
          onClick={() => onSelectCategory(category.name)}
        >
          <div className="leftimg">
            <img src={category.img} alt="catimg" />
          </div>
          <div className="righttitle">
            <h2>{category.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
