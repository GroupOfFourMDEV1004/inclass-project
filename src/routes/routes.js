import {
  addNewCourse,
  deleteCourse,
  updateCourse,
  getCourse,
} from "../controllers/controllers";

const routes = (app) => {
  app
    .route("/course")
    .get((req, res, next) => {
      console.log(`Request from:${req.originalUrl}`);
      console.log(`Request Type: ${req.method}`);
      next();
    }, getCourse)
    .post(addNewCourse);
  app.route("/course/:id").put(updateCourse).delete(deleteCourse);
};

export default routes;
