import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";
import categoryRoutes from "./routes/category.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //allow to accept JSON data in req.body

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

app.listen(PORT, () => {
  connectDB();
  console.info(`listening on http://localhost:${PORT}`);
});
