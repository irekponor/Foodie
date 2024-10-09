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

// login post configure
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err); // Handle error
    if (!user) {
      return res.status(401).json({ error: info.message });
    }
    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.json({ message: "Login successful" });
    });
  })(req, res, next);
});

// register post configure
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists (pseudo-check)
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
    });

    console.log(users);
    // Return a success response
    return res.status(201).json({ message: "User registered successfully" });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// api test route
app.get("/api", (req, res) => {
  res.json({ food: ["node", "broo", "sardine"] });
});

// server
app.listen(7000, () => {
  console.log("listening.....");
});
