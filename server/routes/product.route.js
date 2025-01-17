import express from "express";

import {
  createProduct,
  getAllProduct,
  getProductById,
  deleteProductById,
  updateProductById,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProduct);
router.get("/:id", getProductById);
router.delete("/:id", deleteProductById);
router.put("/:id", updateProductById);

export default router;
