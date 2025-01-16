import mongoose from "mongoose";
import Category from "../models/category.models.js";
import Product from "../models/product.model.js";

export const createCategory = async (req, res) => {
  const category = req.body;

  if (!category.name || !category.desc) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all data" });
  }

  const newCategory = new Category(category);

  try {
    await newCategory.save();
    res.status(201).json({ success: true, data: newCategory });
  } catch (error) {
    console.error("Error creating category:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getAllCategory = async (req, res) => {
  try {
    const category = await Category.find({});
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    console.error("error in fetching category", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getCategoryById = async (req, res) => {
  const { id } = req.params;
  const category = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid Id" });
  }

  try {
    const category = await Category.findById(id);
    if (!category) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    console.error("error in fetching category", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteCategoryById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid Id" });
  }

  try {
    const category = await Category.findByIdAndDelete(id);
    if (category) {
      Product.updateMany(
        { category: { $in: [id] } },
        { $pull: { category: id } }
      ).exec();
    }
    res.status(200).json({
      success: true,
      data: category,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.error("error in deleting category", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateCategoryById = async (req, res) => {
  const { id } = req.params;
  const category = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid Id" });
  }

  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, category, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedCategory });
  } catch (error) {
    console.error("error in updating category", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
