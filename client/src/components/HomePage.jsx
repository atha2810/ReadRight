import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import { motion } from "framer-motion";
import boook from "../assets/multi.png";
import journal from "../assets/thotjournal.png";
import "../css/HomePage.css";

const HomePage = () => {
  return (
    <div style={{ fontFamily: "Comfortaa, sans-serif", paddingTop: "25px" }}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Navbar />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Hero />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        {" "}
        <div className="TwoCards">
          <Card
            title="Book Categories"
            subtitle="Tailored Selections for Every Topic"
            image={boook}
            type="book"
          />
          <Card
            title=" Journaling Questions"
            subtitle="Reflective Queries for Personal Growth"
            image={journal}
            type="journal"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
