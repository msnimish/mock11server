import mongoose from "mongoose";

let BugSchema = mongoose.Schema({
    text: { type: String, required: true },
    severity: { type: String, enum: ["Low","Medium","Major","Critical"], required: true },
})

let Bug = mongoose.model("bug", BugSchema)

export default Bug;