import mongoose from "mongoose";

export const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
    maxLength: 150,
  },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
