import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema(
    {
        category_id: {
            type: String,
            required: true,

        },
        categoryName: {
            type: String,
            required: true,

        },
    },
    { timeStamps: true }
);

const Category = mongoose.models.categories || mongoose.model("categories", categorySchema);

export default Category;