const express = require("express");
const db = require("./db");
const app = express();
require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Welcome to the Hotel!");
});

// Import routers
const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");

// Mount routes
app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

app.listen(PORT, () => {
  console.log("Server started at",PORT);
});
