import mongoose from "mongoose";
import { courseSchema } from "../models/models";

const Course = mongoose.model("courses", courseSchema);

export const addNewCourse = (req, res) => {
  let newCourse = new Course(req.body);
  newCourse
    .save()
    .then((course) => res.json(course))
    .catch((err) => res.send(err));
};
