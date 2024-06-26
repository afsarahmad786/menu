// routes/menuRoutes.js
const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

// Route to render the Menu Management page
router.get("/", menuController.getMenuManagementPage);

// Route to handle form submission (create menu)
router.post("/", menuController.createMenu);

// Route to handle updating a menu
router.post("/update/:id", menuController.updateMenu);

// Route to handle deleting a menu
router.post("/delete/:id", menuController.deleteMenu);

module.exports = router;
