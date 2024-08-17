import React from "react";
import "../css/Aboutus.css";
import teamImage from "../assets/yelopp.jpg";
import testimonialImage1 from "../assets/more.png";
import testimonialImage2 from "../assets/shree.png";
import testimonialImage3 from "../assets/sid.png";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaArrowLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/homepage");
  };

  return (
    <div className="about-container">
      <button className="back-button" onClick={handleBackClick}>
        <FaArrowLeft />
      </button>

      <section className="introduction">
        <h1>
          Welcome to <b style={{ color: "#7678E1" }}>&nbsp;Read</b>
          Right
        </h1>
        <p className="appabt">
          ReadRight is your go-to app for accessing a vast library of
          self-improvement books and Self-knowledge Journaling questions. Dive
          into a world of knowledge and growth with just a few clicks.
        </p>
      </section>

      <section className="key-features">
        <h2>Key Features</h2>
        <ul>
          <li>📚 Extensive Library of Self-Improvement Books</li>
          <li>🔗 PDF Download Links for Offline Book Reading</li>
          <li>🔍 Easy to Search books according to the topic of interest</li>
          <li>📖 Self Discovery journal Questions</li>
          <li>☑️ User-Friendly bento grid Interface</li>
        </ul>
      </section>

      <section className="team">
        <h2>Meet the Dev</h2>
        <div className="team-member">
          <img src={teamImage} alt="Atharva Lakhamade" className="team-image" />
          <h3>Atharva Lakhamade</h3>
          <p>Founder & Developer</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/atharva-lakhamade-80b626219/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/atha2810"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/AtharvaLk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/me_atharva__?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <img
            src={testimonialImage1}
            alt="User A"
            className="testimonial-image"
          />
          <blockquote>
            <p>
              "ReadRight has transformed the way I approach self-improvement.
              The app is incredibly user-friendly and has a fantastic selection
              of books." - Abhishek More.
            </p>
          </blockquote>
        </div>
        <div className="testimonial">
          <img
            src={testimonialImage2}
            alt="User B"
            className="testimonial-image"
          />
          <blockquote>
            <p>
              "I love the easy navigation and categoried book section. ReadRight
              is a game-changer!" - Atharva Bhambure.
            </p>
          </blockquote>
        </div>
        <div className="testimonial">
          <img
            src={testimonialImage3}
            alt="User C"
            className="testimonial-image"
          />
          <blockquote>
            <p>
              "I love that I can access a vast library of books on any subject
              at any time, even offline!" - Siddharth Khamitkar.
            </p>
          </blockquote>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          Email:{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=atharva19510@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            atharva19510@gmail.com
          </a>
        </p>
        <p>Feel free to reach out to us with any questions or feedback!</p>
      </section>

      <section className="call-to-action">
        <h2>Start reading Today!</h2>
      </section>
    </div>
  );
};

export default About;
