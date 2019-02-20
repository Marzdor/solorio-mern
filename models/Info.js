const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const InfoSchema = new Schema(
  {
    contact: {
      type: Object,
      required: true
    },
    events: {
      type: Array,
      required: true
    },
    days: {
      type: Object,
      required: true
    }
  },
  { collection: "info" }
);

module.exports = Info = mongoose.model("info", InfoSchema);
