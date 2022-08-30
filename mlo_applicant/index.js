const express = require("express");
const mongoose = require("mongoose");
const app = express();

const DATABASE =
  "mongodb+srv://ripon_cluster:2LEjLOCH2ugKUwZp@cluster0.v5sjn.mongodb.net/node1try?retryWrites=true&w=majority";

app.get("/", function (req, res) {
  mongoose
    .connect(DATABASE)
    .then(() => {
      console.log("MLO Applicant Connected to Mongoose");
    })
    .catch(() => {
      console.log("MLO Applicant Connection Error to Mongoose");
    });
});

app.listen(3002);
