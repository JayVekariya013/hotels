const express = require("express");
const db = require("./db");
const app = express();
require("dotenv").config();
const passport = require("./auth");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// Middleware to log requests
const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request made to : ${req.originalUrl}`
  );
  next();
};
app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate("local", { session: false });

app.get("/", function (req, res) {
  res.send("Welcome to the Hotel!");
});

// Import routers
const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");

// Mount routes
app.use("/person",localAuthMiddleware, personRoutes);
app.use("/menu", menuRoutes);

app.listen(PORT, () => {
  console.log("Server started at", PORT);
});
