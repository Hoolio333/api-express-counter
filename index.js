//Include the express library
const express = require("express");
//Include the morgan middleware
const morgan = require("morgan");
//Include the cors middleware
const cors = require("cors");

//Create a new express application
const app = express();

//Tell express we want to use the morgan library
app.use(morgan("dev"));
//Tell express we want to use the cors library
app.use(cors());
app.use(express.json());

let number = 0;

app.get("/", (req, res) => {
  console.log("got request!");
  res.send("Hello World!");
});

app.get("/counter", (req, res) => {
  res.json({
    value: number,
  });
});

app.post("/counter/increment", (req, res) => {
  number++;
  res.json({
    value: number,
  });
});

app.post("/counter/decrement", (req, res) => {
  number--;
  res.json({
    value: number,
  });
});

app.post("/counter/double", (req, res) => {
  number = number * 2;
  res.json({
    value: number,
  });
});

app.delete("/counter", (req, res) => {
  number = 0;
  res.json({
    value: number,
  });
});

//Start up our server
const port = 3030;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
