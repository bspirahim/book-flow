import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            },
        email: {
            type: String,
            unique: true,
                required: true,
            },
        password: {
            type: String,
                required: false,
            },
    },
    { timeStamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default  User;


   

