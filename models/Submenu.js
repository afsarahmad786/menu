// models/Submenu.js

const mongoose = require("mongoose");

const submenuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  menu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
    required: true,
  },
});

module.exports = mongoose.model("Submenu", submenuSchema);
