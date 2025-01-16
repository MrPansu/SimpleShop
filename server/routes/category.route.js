import express from "express";

import {
  createCategory,
  getAllCategory,
  getCategoryById,
  deleteCategoryById,
  updateCategoryById,
} from "../controllers/category.controller.js";

const router = express.Router();

router.post("/", createCategory);
router.get("/", getAllCategory);
router.get("/:id", getCategoryById);
router.delete("/:id", deleteCategoryById);
router.put("/:id", updateCategoryById);

export default router;
