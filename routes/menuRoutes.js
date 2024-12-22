const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/MenuItem");

// POST method to add new menu item
router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newMenu = new MenuItem(data);

    const response = await newMenu.save();
    res.status(200).json(response);
    console.log("Data saved  : ", response._id);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(err);
  }
});

//GET method to get menu
router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(err);
  }
});

//GET method to get items by their taste
router.get("/:taste", async (req, res) => {
  try {
    const tasteType = req.params.taste;
    if (tasteType == "sweet" || tasteType == "spicy" || tasteType == "sour") {
      const data = await MenuItem.find({ taste: tasteType });
      res.status(200).json(data);
    } else {
      res.status(404).json("Data Not Found");
    }
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
});

module.exports = router;
