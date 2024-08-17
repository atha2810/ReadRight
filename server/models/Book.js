const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  author: { type: String, required: true },
  summary: { type: String, required: true },
  category: { type: String, required: true },
  imgUrl: { type: String },
  ebookUrl: { type: String, required: true },
});

module.exports = mongoose.model("Book", bookSchema);
