const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BeerSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    style: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    abv: {
      type: String,
      required: true
    }
  },
  { collection: "beer" }
);

module.exports = Info = mongoose.model("beer", BeerSchema);
