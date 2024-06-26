// controllers/menuController.js
const Menu = require("../models/menuModel");

// Display menu management page
exports.getMenuManagementPage = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.render("menu-management", { menus });
  } catch (error) {
    console.error("Error retrieving menus from the database:", error);
    res.status(500).send("Error retrieving menus from the database");
  }
};

// Handle menu creation
exports.createMenu = async (req, res) => {
  const menuData = {
    name: req.body.menuName,
    description: req.body.menuDescription,
  };

  try {
    const newMenu = new Menu(menuData);
    await newMenu.save();
    res.redirect("/menu-management");
  } catch (error) {
    console.error("Error saving menu to the database:", error);
    res.status(500).send("Error saving menu to the database");
  }
};

// Handle menu update
exports.updateMenu = async (req, res) => {
  const { id } = req.params;
  const updatedData = {
    name: req.body.menuName,
    description: req.body.menuDescription,
  };

  try {
    await Menu.findByIdAndUpdate(id, updatedData);
    res.redirect("/menu-management");
  } catch (error) {
    console.error("Error updating menu in the database:", error);
    res.status(500).send("Error updating menu in the database");
  }
};

// Handle menu deletion
exports.deleteMenu = async (req, res) => {
  const { id } = req.params;

  try {
    await Menu.findByIdAndDelete(id);
    res.redirect("/menu-management");
  } catch (error) {
    console.error("Error deleting menu from the database:", error);
    res.status(500).send("Error deleting menu from the database");
  }
};
