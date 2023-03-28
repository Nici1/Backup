const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const User = require("./models/User.js");
require("dotenv").config();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5174",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("tesk ok");
});

app.post("/resgister", (req, res) => {
  const { name, email, password } = req.body;
  res.json({ name, email, password });
});

//F9TUCc0PNl801xrm

app.listen(5000);
