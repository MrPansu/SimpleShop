import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
      min: 0,
    },
    category: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Category",
      require: true,
    },
    desc: {
      type: String,
      require: true,
      maxLength: 150,
    },
  },
  {
    timestamp: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
