import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../css/BookCategories.css";
import Category from "./Category";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function BookCategories() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [books, setBooks] = useState([]);
  const [buttonText, setButtonText] = useState({});
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleDownloadClick = (bookId, ebookUrl) => {
    setButtonText((prevState) => ({
      ...prevState,
      [bookId]: "Ebook order is in process...",
    }));

    setTimeout(() => {
      setButtonText((prevState) => ({
        ...prevState,
        [bookId]: "Downloading starts soon...",
      }));

      // Start the download
      window.location.href = ebookUrl;
    }, 3000);
  };

  const handleBackClick = () => {
    navigate("/homepage");
  };

  useEffect(() => {
    if (selectedCategory) {
      fetch(`http://localhost:3000/books/category/${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => setBooks(data))
        .catch((error) => {
          console.error("Error fetching books:", error);
          // Optionally, you can display an error message in the UI here
        });
    }
  }, [selectedCategory]);

  return (
    <div style={{ fontFamily: "Comfortaa, sans-serif" }}>
      <Navbar />
      <button className="back-button" onClick={handleBackClick}>
        <FaArrowLeft />
      </button>
      <div style={{ display: "flex", color: "white", marginTop: "50px" }}>
        <div className="bookleftside">
          <div className="categories">
            <h2 style={{ marginBottom: "14px" }}>Book Categories</h2>
            <Category onSelectCategory={handleCategorySelect} />
          </div>
        </div>
        <div className="bookrightside">
          <div className="books">
            <h2 style={{ marginBottom: "14px" }}>Books</h2>

            {books.length > 0 ? (
              books.map((book) => (
                <div className="book-item" key={book._id}>
                  <div className="bookimg">
                    <img src={book.imgUrl} alt="Book cover" />
                  </div>
                  <div className="bookdetails">
                    <div className="booktitle">
                      <h3>{book.title}</h3>
                      <p className="bookSubtitle">{book.subtitle}</p>
                    </div>
                    <div className="author">By {book.author}</div>
                    <div className="summary">{book.summary}</div>

                    <button
                      className="download"
                      onClick={() =>
                        handleDownloadClick(book._id, book.ebook.url)
                      }
                    >
                      {buttonText[book._id] || "Download PDF"}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>Choose category.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCategories;
