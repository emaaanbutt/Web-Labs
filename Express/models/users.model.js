import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    roles: [String]

});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;