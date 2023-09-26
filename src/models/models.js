import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const courseSchema = new Schema({
  CourseName: {
    type: String,
    required: "Enter the course name",
  },
  ProgramName: {
    type: String,
    required: "Enter your program name",
  },
  College: {
    type: String,
  },
  CollegeContact: {
    type: Number,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
