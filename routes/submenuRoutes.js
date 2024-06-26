// routes/submenuRoutes.js
const express = require("express");
const router = express.Router();
const submenuController = require("../controllers/submenuController");

// Route to create a submenu
router.post("/:menuId", submenuController.createSubmenu);

// Route to fetch submenus by menuId
router.get("/:menuId", submenuController.getSubmenusByMenuId);

module.exports = router;
