// importing installed library

const express = require("express");
const app = express();
const cors = require("cors");
const flash = require("express-flash");
const session = require("express-session");

// backend api
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(flash());

// api test route
app.get("/api", (req, res) => {
  res.json({ food: ["node", "broo", "sardine"] });
});
app.get("/api/flash-messages", (req, res) => {
  res.json({ error: req.flash("error"), success: req.flash("success") });
});

// server
app.listen("7000");
