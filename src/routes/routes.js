import { addNewCourse } from "../controllers/controllers";

const routes = (app) => {
  app
    .route("/course")
    .get(
      (req, res, next) => {
        console.log(`Request from:${req.originalUrl}`);
        console.log(`Request Type: ${req.method}`);
        next();
      },
      (req, res, next) => {
        res.send("GET Request is successful");
      }
    )
    .post(addNewCourse);

  app
    .route("/course/:id")
    .put((req, res) => res.send("PUT request is successful"))
    .delete((req, res) => res.send("DELETE Request is successful"));
};

export default routes;
