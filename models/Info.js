const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const InfoSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    hours: {
      type: Object,
      required: true
    }
  },
  { collection: "info" }
);

module.exports = Info = mongoose.model("info", InfoSchema);
