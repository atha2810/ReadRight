import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../css/Dashboard.css";
import BookCategories from "./BookCategories";
import Cookies from "js-cookie"; 

function Dashboard() {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    author: "",
    ebookUrl: "",
    subtitle: "",
    category: "",
    imgUrl: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const token = Cookies.get("authToken");
    try {
      const response = await fetch("https://readright-server.onrender.com/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include", // Include cookies in the request
      });

      if (!response.ok) {
        throw new Error("Failed to add book");
      }

      const data = await response.json();
      toast.success("Book added successfully");

      // Clear form fields after successful submission
      setFormData({
        title: "",
        summary: "",
        author: "",
        ebookUrl: "",
        subtitle: "",
        category: "",
        imgUrl: "",
      });
    } catch (error) {
      toast.error("Failed to add book");
      console.error("Failed to add book:", error);
    }
  };

  return (
    <>
      <ToastContainer /> {/* Place ToastContainer here for global access */}
      <h1 style={{ textAlign: "center", color: "white", marginTop: "30px" }}>
        BOOK CONTROL
      </h1>
      <form
        className="BookForm"
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          placeholder="Subtitle"
          required
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>

          <option value="Self improvement">Self improvement</option>
          <option value="Productivity and Time">Productivity and Time</option>
          <option value="Money">Money</option>
          <option value="Communication">Communication</option>
          <option value="Health">Health</option>
          <option value="Happiness">Happiness</option>
          <option value="Mind">Mind</option>
          <option value="Mental health">Mental health</option>
          <option value="Business & Startups">Business & Startups</option>
          <option value="Relationships">Relationships</option>
          <option value="Selling">Selling</option>
          <option value="Marketing">Marketing</option>
          <option value="Stocks & Trading">Stocks & Trading</option>
          <option value="Science + SciFi">Science + SciFi</option>
          <option value="History">History</option>
          <option value="Leadership">Leadership</option>
          <option value="Social Media Marketing">Social Media Marketing</option>
          <option value="Spirituality">Spirituality</option>
        </select>
        <input
          type="text"
          name="imgUrl"
          value={formData.imgUrl}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <input
          type="text"
          name="ebookUrl"
          value={formData.ebookUrl}
          onChange={handleChange}
          placeholder="Ebook URL"
          required
        />
        <input
          type="text"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          placeholder="Summary"
          required
        />
        <button type="submit">Add Book</button>
      </form>
      <BookCategories />
    </>
  );
}

export default Dashboard;
