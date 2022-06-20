const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
 
const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//const db = require("./app/models");
//const Role = db.role;
// var express = require("express"), 
router = express.Router();

// simple route
app.get("/", (req, res) => {
  res.json({message:"Hi this is the backend"});
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});