import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },

    user: {
        type: String,
        required: true 
    },

    email: {
        type: String,
        required: true 
    },

    password: {
        type: String,
        required: true 
    },

    permission: {
        type: String,
        required: false 
    },
});

const userData = mongoose.model("userData", UsersSchema);

export default userData;
