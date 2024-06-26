// routes/submenuRoutes.js

const express = require("express");
const router = express.Router();
const Submenu = require("../models/Submenu");

// POST route to add a submenu to a specific menu
router.post("/:menuId", async (req, res) => {
  const { menuId } = req.params;
  const { name, description } = req.body;
  console.log("Submeny", req.body);
  console.log("Submeny", menuId);

  try {
    // Assuming menuId is a valid ObjectId and exists in the Menu collection
    const newSubmenu = new Submenu({
      name: name,
      description: description,
      menu: menuId, // Assign the menuId to submenu's menu field
    });

    const savedSubmenu = await newSubmenu.save();
    res.status(201).json(savedSubmenu); // Return the saved submenu as JSON
  } catch (error) {
    console.error("Error adding submenu:", error);
    res.status(500).json({ error: "Failed to add submenu" });
  }
});

module.exports = router;
