import mongoose from "mongoose";

let UserSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    token:{ type: String }
})

let User = mongoose.model("User", UserSchema)

export {User};