// controllers/submenuController.js
const Submenu = require("../models/Submenu");

// Create a submenu
exports.createSubmenu = async (req, res) => {
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
};

// Get submenus by menuId
exports.getSubmenusByMenuId = async (req, res) => {
  const { menuId } = req.params;
  console.log(menuId);

  try {
    const submenus = await Submenu.find({ menu: menuId });
    console.log(submenus);

    res.send(submenus);
  } catch (error) {
    console.error("Error fetching submenus:", error);
    res.status(500).send("Error fetching submenus");
  }
};

// Update a submenu by id
exports.updateSubmenusByMenuId = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const updatedSubmenu = await Submenu.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );
    res.status(200).json(updatedSubmenu);
  } catch (error) {
    console.error("Error updating submenu:", error);
    res.status(500).json({ error: "Failed to update submenu" });
  }
};

// Delete a submenu by id
exports.deleteSubmenusByMenuId = async (req, res) => {
  const { id } = req.params;

  try {
    await Submenu.findByIdAndDelete(id);
    res.status(200).json({ message: "Submenu deleted successfully" });
  } catch (error) {
    console.error("Error deleting submenu:", error);
    res.status(500).json({ error: "Failed to delete submenu" });
  }
};
