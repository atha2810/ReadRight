// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import BookCategories from "./components/BookCategories";
import JournalCategories from "./components/JournalCategories";
import Aboutus from "./components/Aboutus";
import Pricing from "./components/Pricing";
import Logout from "./components/Logout";

function App() {
  axios.defaults.withCredentials = true;

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bookCategories" element={<BookCategories />} />
        <Route path="/journalCategories" element={<JournalCategories />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
