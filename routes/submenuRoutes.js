// routes/submenuRoutes.js

const express = require("express");
const router = express.Router();
const SubmenuController = require("../controllers/submenuController");

// Get submenus by menuId
router.get("/:menuId", SubmenuController.getSubmenusByMenuId);
router.post("/:menuId", SubmenuController.createSubmenu);

router.get("/detail/:submenuId", SubmenuController.detailSubMenu);

// POST route to update a specific submenu
router.post("/update/:submenuId", SubmenuController.updateSubmenusByMenuId);

// POST route to delete a specific submenu
router.post("/delete/:submenuId", SubmenuController.deleteSubmenusByMenuId);

module.exports = router;
