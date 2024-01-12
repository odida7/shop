import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    image: String,

})

const User = mongoose.models.User  || mongoose.models("User", userSchema);

export default User;