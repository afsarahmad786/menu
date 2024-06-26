// controllers/submenuController.js
const Submenu = require("../models/Submenu");

// Create a submenu
exports.createSubmenu = async (req, res) => {
  const { menuId } = req.params;
  const { name, description } = req.body;
  console.log("createSubMneu");

  try {
    // Assuming menuId is a valid ObjectId and exists in the Menu collection
    const newSubmenu = new Submenu({
      name: name,
      description: description,
      menu: menuId, // Assign the menuId to submenu's menu field
    });

    const savedSubmenu = await newSubmenu.save();
    res.redirect("/menu-management"); // Redirect to menu management page after deletion
  } catch (error) {
    console.error("Error adding submenu:", error);
    res.status(500).json({ error: "Failed to add submenu" });
  }
};

// Get submenus by menuId
exports.getSubmenusByMenuId = async (req, res) => {
  const { menuId } = req.params;
  console.log(menuId);
  console.log("getSubMenu");

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
  const { submenuId } = req.params;
  const { name, description } = req.body;
  console.log("updateSubMenu");

  try {
    const updatedSubmenu = await Submenu.findByIdAndUpdate(
      submenuId,
      { name, description },
      { new: true } // Return the updated document
    );
    if (!updatedSubmenu) {
      return res.status(404).json({ error: "Submenu not found" });
    }
    res.json(updatedSubmenu);
  } catch (error) {
    console.error("Error updating submenu:", error);
    res.status(500).json({ error: "Failed to update submenu" });
  }
};
// Delete a submenu by id
exports.deleteSubmenusByMenuId = async (req, res) => {
  const { submenuId } = req.params;
  console.log("deleteSubMenu");

  try {
    const deletedSubmenu = await Submenu.findByIdAndDelete(submenuId);
    if (!deletedSubmenu) {
      return res.status(404).json({ error: "Submenu not found" });
    }
    res.redirect("/menu-management"); // Redirect to menu management page after deletion
  } catch (error) {
    console.error("Error deleting submenu:", error);
    res.status(500).json({ error: "Failed to delete submenu" });
  }
};

exports.detailSubMenu = async (req, res) => {
  const { submenuId } = req.params;
  console.log("detailSubMenu");

  try {
    const submenu = await Submenu.findById(submenuId);
    console.log("submenu item", submenu);
    if (!submenu) {
      return res.status(404).json({ error: "Submenu not found" });
    }

    return res.json(submenu);
  } catch (error) {
    console.error("Error fetching submenu:", error);
    res.status(500).json({ error: "Failed to fetch submenu" });
  }
};
