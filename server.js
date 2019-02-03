const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
let db;
if (process.env.NODE_ENV === "production") {
  db = process.env.mongodb;
} else {
  db = require("./config/keys").mongoURI;
}

// Connect to Mongo
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

mongoose.set("useFindAndModify", false);

// Use routes
// TODO Setup Routes

// Serve static assests if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server Started on port " + port));
