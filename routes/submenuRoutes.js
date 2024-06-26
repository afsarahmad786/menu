// routes/submenuRoutes.js

const express = require("express");
const router = express.Router();
const SubmenuController = require("../controllers/submenuController");

// Get submenus by menuId
router.get("/:menuId", SubmenuController.getSubmenusByMenuId);
router.post("/:menuId", SubmenuController.createSubmenu);
router.post("/update/:id", SubmenuController.updateSubmenusByMenuId);
router.post("/delete/:id", SubmenuController.deleteSubmenusByMenuId);
module.exports = router;
