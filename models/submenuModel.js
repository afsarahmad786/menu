// models/submenuModel.js
const mongoose = require("mongoose");

const submenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  parentMenuId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
    required: true,
  },
});

const Submenu = mongoose.model("Submenu", submenuSchema);

module.exports = Submenu;
