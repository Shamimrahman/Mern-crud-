const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

//for use in all file and this is imp for db connection
dotenv.config({ path: "./config.env" });
//connec app to the express
const app = express();

//use bodyparser for image
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//cors
app.use(cors());

//db
require("./db/connection");

//use routes
const postrouter = require("./routes/posts");
app.use(postrouter);

//connection
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`The Node App is connected from ${port}`);
});
