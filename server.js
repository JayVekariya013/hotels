const express = require("express");
const db = require("./db");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Welcome to the Hotel!");
});

// Import routers
const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");

// Mount routes
app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

app.listen(3000, () => {
  console.log("Server started at 3000");
});
