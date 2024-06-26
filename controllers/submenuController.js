// controllers/submenuController.js
const Submenu = require("../models/submenuModel");

// Create a submenu
exports.createSubmenu = async (req, res) => {
  const { menuId } = req.params;
  const { name, description } = req.body;

  try {
    const newSubmenu = new Submenu({
      name,
      description,
      parentMenuId: menuId,
    });

    await newSubmenu.save();
    res.status(201).send(newSubmenu);
  } catch (error) {
    console.error("Error creating submenu:", error);
    res.status(500).send("Error creating submenu");
  }
};

// Get submenus by menuId
exports.getSubmenusByMenuId = async (req, res) => {
  const { menuId } = req.params;

  try {
    const submenus = await Submenu.find({ parentMenuId: menuId });
    res.send(submenus);
  } catch (error) {
    console.error("Error fetching submenus:", error);
    res.status(500).send("Error fetching submenus");
  }
};
