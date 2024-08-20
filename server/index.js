const express = require("express");
const booksRouter = require("./routes/book.js");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { verifyToken, isAdmin } = require("./middleware/verifyToken");
const authRoute = require("./routes/auth");

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://read-right.vercel.app/", // Your frontend origin
    credentials: true, // Allow cookies or credentials
  })
);
app.use(cookieParser());
app.use("/auth", authRoute);

// Apply middleware to routes that need protection
app.use("/books", booksRouter);

// Example of using isAdmin for admin-specific routes
app.use("/admin-only", verifyToken, isAdmin, (req, res) => {
  res.send("Welcome Admin");
});

mongoose
  .connect(process.env.DB_CONNECT, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

app.listen(PORT, () => console.log("Server is Running"));

module.exports = app;
