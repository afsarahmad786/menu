// server.js
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db"); // Import the database connection
const menuRoutes = require("./routes/menuRoutes"); // Import routes

const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Connect to MongoDB
connectDB();

// Use routes
app.use("/menu-management", menuRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
