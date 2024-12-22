const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile("home.html", { root: "./" });
});
app.get("/chinese", function (req, res) {
  res.sendFile("chinese.html", { root: "./" });
});

app.listen(3000, () => {
  console.log("Server is running at 3000");
});
