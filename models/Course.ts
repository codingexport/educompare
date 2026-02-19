import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    duration: { type: String, required: true },
    category: { type: String, required: true }, // PG, UG etc
    type: { type: String, required: true }, // Online, Distance
});

export default mongoose.models.Course ||
    mongoose.model("Course", CourseSchema);
