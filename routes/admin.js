const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const auth = require("../auth");

router.use(bodyParser.json()); // to support JSON-encoded bodies
router.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

// Source Model
const Info = require("../models/Info");
const Beer = require("../models/Beer");

// Update A Info
// Private
router.post("/info", auth, (req, res) => {
  const hours = {
    monday: req.body.monday,
    tuesday: req.body.tuesday,
    wednesday: req.body.wednesday,
    thursday: req.body.thursday,
    friday: req.body.friday,
    saturday: req.body.saturday,
    sunday: req.body.sunday
  };
  const newData = {
    email: req.body.email,
    phone: req.body.phone,
    hours: hours
  };

  Info.findByIdAndUpdate(
    "5c56650bfb6fc035679226ba",
    newData,
    { new: true },
    err => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/edit");
      }
    }
  );
});

// Update A Beer
// Private
router.post("/beer=:id", auth, (req, res) => {
  const newData = {
    name: req.body.name,
    style: req.body.style,
    abv: req.body.abv,
    desc: req.body.desc
  };

  Beer.findByIdAndUpdate(req.params.id, newData, { new: true }, err => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/edit");
    }
  });
});

// Create A Beer
// Private
router.post("/beer/create", auth, (req, res) => {
  newBeer = new Beer({
    name: req.body.name,
    style: req.body.style,
    abv: req.body.abv,
    desc: req.body.desc
  });

  newBeer.save().then(() => res.redirect("/edit"));
});
// Delete A Beer
// Private
router.delete("/beer=:id", auth, (req, res) => {
  Beer.findById(req.params.id)
    .then(beer => beer.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
