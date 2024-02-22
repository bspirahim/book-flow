import mongoose from "mongoose";

const { Schema } = mongoose;

const bookSchema = new Schema(
    {
        bookName: {
            type: String,
            unique: true,
            required: true,
        },
        author: {
            type: String,
            required:true,

        },
        quantity: {
            type: Number,

        },
        category: {
            type: String,
            required: true,

        },
        price: {
            type: Number,
            required: true,

        },
        rating: {
            type: Number,

        },
        photo: {
            type: String,
            required: true,

        },
        details: {
            type: String,
            required: true,

        },
       
    },
    { timeStamps: true }
);

const Book = mongoose.models.books || mongoose.model("books", bookSchema);

export default  Book;