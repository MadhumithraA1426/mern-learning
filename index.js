const express = require("express");
const app = express();
const PORT = 5000;

// Middleware: to parse JSON body
app.use(express.json());

// Route 1: Home
app.get("/", (req, res) => {
  res.send("Welcome to Day 3: JSON API 🚀");
});

// Route 2: Send JSON response
app.get("/student", (req, res) => {
  res.json({
    name: "Madhu",
    course: "CSE",
    year: 2
  });
});

// Route 3: Accept JSON data from client
app.post("/register", (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: "User registered successfully!",
    data: { name, email }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
