const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const courses = require("./data/data.json");
app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find((course) => course.id === id);
  res.send(course);
});

app.get("/", (req, res) => {
  res.send("Running learn-self24 server");
});

app.listen(port, () => {
  console.log("server is running on port", port);
});
