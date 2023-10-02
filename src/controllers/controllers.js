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
export const getCourse = (req, res) => {
  Course.find()
    .then((data) => res.send(data))
    .catch((e) => console.error(e.message));
};

export const getCourseByID = (req, res) => {
  Course.findById(req.params.id)
    .then((data) => res.send(data))
    .catch((e) => console.error(e.message));
};

export const updateCourse = (req, res) => {
  const courseId = req.params.id;
  const updatedData = req.body;
  Course.findOneAndUpdate({ _id: courseId }, updatedData, { new: true })
    .then((updatedCourse) => {
      if (!updatedCourse) {
        res.status(404).send({ message: "No course found to update" });
      } else {
        res.status(200).send(updatedCourse);
      }
    })
    .catch((e) => {
      console.error(e.message);
      res.status(500).send({ message: "Failed to update the course" });
    });
};

export const deleteCourse = (req, res) => {
  const courseId = req.params.id;

  Course.findByIdAndDelete(courseId)
    .then((deletedCourse) => {
      if (!deletedCourse) {
        res.status(404).send({ message: "No course found with the given ID" });
      } else {
        res.status(200).send({
          message: "Course deleted successfully",
          data: deletedCourse,
        });
      }
    })
    .catch((e) => {
      console.error(e.message);
      res.status(500).send({ message: "Failed to delete the course" });
    });
};
