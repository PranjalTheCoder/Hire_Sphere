import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, 
  headline: { type: String },
  location: { type: String },
  profilePicture: { type: String },
  skills: [{ type: String }],
  summary: { type: String },
  connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
}, { timestamps: true });

export const User = mongoose.model("User", UserSchema);