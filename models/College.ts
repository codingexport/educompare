import mongoose from "mongoose";

const CollegeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    fees: { type: String, required: true },
    description: { type: String },
});

export default mongoose.models.College ||
    mongoose.model("College", CollegeSchema);
