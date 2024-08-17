const express = require("express");
const Book = require("../models/Book");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middleware/verifyToken");

// Add a Book - Admin only
router.post("/", verifyToken, isAdmin, async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json({ message: "Book added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add book" });
  }
});

// Get Books by Category - Public
router.get("/category/:category", async (req, res) => {
  try {
    const books = await Book.find({ category: req.params.category });
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

// Find a Book by ID - Public
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch book" });
  }
});

// Update a Book - Admin only
router.put("/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Book updated successfully", book });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update book" });
  }
});

// Delete a Book - Admin only
router.delete("/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete book" });
  }
});

module.exports = router;
