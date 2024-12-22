const mongoose = require("mongoose");

//Define menu item schema
const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "sour", "spicy"],
  },
  is_drink: {
    type: Boolean,
    Default: false,
  },
  ingredients: {
    type: [String],
    default: [],
  },
  num_sales: {
    type: Number,
    default: 0,
  },
});

// Export the module
const MenuItem = mongoose.model("menuItem", menuSchema);
module.exports = MenuItem;
