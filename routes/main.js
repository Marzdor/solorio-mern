const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.json()); // to support JSON-encoded bodies
router.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

// Source Model
const Info = require("../models/Info");
const Beer = require("../models/Beer");

// Get All Info
// Public
router.get("/info", (req, res) => {
  Info.find().then(info => res.json(info));
});

// Get Days
// Public
router.get("/info/days", (req, res) => {
  Info.find().then(info => {
    res.json(info[0].days);
  });
});

// Get Contact
// Public
router.get("/info/contact", (req, res) => {
  Info.find().then(info => {
    res.json(info[0].contact);
  });
});

// Get Events
// Public
router.get("/info/events", (req, res) => {
  Info.find().then(info => {
    res.json(info[0].events);
  });
});

// Get All Beers
// Public
router.get("/beer", (req, res) => {
  Beer.find()
    .sort({ name: 1 })
    .then(beer => res.json(beer));
});

// Get Beer By ID
// Public
router.get("/beer=:id", (req, res) => {
  Beer.findById(req.params.id).then(beer => res.json(beer));
});

module.exports = router;
