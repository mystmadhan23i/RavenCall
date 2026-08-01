const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors({
  origin: [
    "http://7810016234.s3-website-ap-southeast-2.amazonaws.com"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb+srv://sermadhan_db_user:LAs2tDjSApg7uMHj@cluster01.zvgzw4d.mongodb.net/raven-call?retryWrites=true&w=majority&appName=Cluster01")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Model
const User = mongoose.model("User", userSchema);

// POST - Save Data
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = new User({

      email,
      password,
    });

    await user.save();

    res.json({
      message: "User Saved Successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// GET - Fetch All Users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});