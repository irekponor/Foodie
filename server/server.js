// env variables load

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// importing installed library

const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt"); // bcrypt import
const passport = require("passport"); // passport import
const initializePassport = require("./passport");
const flash = require("express-flash");
const session = require("express-session");

// Start a connection to the database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to database.");
});

// backend api
const corsOptions = {
  origin: ["http://localhost:5173"], // Allow requests from the React app
  methods: "GET,HEAD,PUT,PATCH,POST",
  credentials: true,
};

// passport call
initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

const users = [];

app.use(express.json());

app.use(cors(corsOptions));
app.use(flash());
app.use(
  session({
    secret: process.env.SECRET_KEY, // the secret_key should be what is in your .env file
    resave: false, // if nothing is changed dont resave variable
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// register post configure
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists in the database
    db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
      if (err) {
        console.error("Database query error:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      if (results.length > 0) {
        return res.status(400).json({ error: "User already exists" });
      }

      // Hash password
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          console.error("Password hashing error:", err);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        // Insert the new user into the database
        db.query(
          "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
          [name, email, hashedPassword],
          (err, results) => {
            if (err) {
              console.error(
                "Error inserting user into the database:",
                err.message
              );
              return res.status(500).json({ error: "Internal Server Error" });
            }
            console.log("User registered successfully:", results.insertId);
            res.status(201).json({ message: "User registered successfully" });
          }
        );
      });
    });
  } catch (e) {
    console.error("Registration error:", e);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// login post configure
app.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  // Check if user exists
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: "User not found" });
    }

    const user = results[0];

    // Compare password with hashed password in the database
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error("Password comparison error:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      if (!isMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // If password is correct, log the user in
      req.logIn(user, (err) => {
        if (err) return next(err);
        return res.json({ message: "Login successful" });
      });
    });
  });
});

//session handling
app.get("/protected-route", checkAuthenticated, (req, res) => {
  res.json({ message: "This is a protected route!" });
});

// api test route
app.get("/api", (req, res) => {
  res.json({ food: ["node", "broo", "sardine"] });
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

// server
app.listen(7000, () => {
  console.log("listening.....");
});
