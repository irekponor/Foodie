// env variables load

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// importing installed library

const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt"); // bcrypt import
const passport = require("passport"); // passport import
const initializePassport = require("./passport");
const flash = require("express-flash");
const session = require("express-session");

// backend api
const corsOptions = {
  origin: ["http://localhost:5173"],
};

// passport call
initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

const users = [];

app.use(cors(corsOptions));
app.use(flash());
app.use(
  session({
    secret: process.env.SECRET_KEY, // the secret_key should be what you used in the .env file
    resave: false, // if nothing is changed dont resave variable
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// login post configure
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

// register post configure
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 is a standard way of creating hashedpwd
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    console.log(users);
    res.redirect("/login");
  } catch (e) {
    console.log(e);
    res.redirect("/register");
  }
});

// api test route
app.get("/api", (req, res) => {
  res.json({ food: ["node", "broo", "sardine"] });
});

// server
app.listen("7000");
