const express = require("express");
const mongoose = require("mongoose");
const app = express();

const DATABASE = "mongodb+srv://ripon_cluster:2LEjLOCH2ugKUwZp@cluster0.v5sjn.mongodb.net/node1try?retryWrites=true&w=majority";

app.get("/", function (req, res) {
  mongoose
    .connect(DATABASE)
    .then(() => {
      res.send("MLO Admin Connected to Mongoose");
    })
    .catch(() => {
      res.send(" MLO Admin Connection Error to Mongoose");
    });
});

app.get("/user", function (req, res) {
  res.send("admin")
 });

app.listen(3001);
