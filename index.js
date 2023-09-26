import express from "express";
import bodyParser from "body-parser";

import routes from "./src/routes/routes";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) =>
  res.send(`Hello Again Node, Node and Server running at localhost:${PORT}`)
);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
routes(app);

mongoose.connect(
  "mongodb+srv://eric:wGDzixGMGhsEMywq@cluster0.hobacjq.mongodb.net/courses"
);
