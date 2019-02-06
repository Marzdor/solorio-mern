const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const auth = require("../auth");

router.use(bodyParser.json()); // to support JSON-encoded bodies
router.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

// Source Model
const Info = require("../models/Info");
const Beer = require("../models/Beer");

// TODO Make POST routes for info

// Update A Beer
// Private
router.post("/beer=:id", auth, (req, res) => {
  const newData = {
    name: req.body.name,
    style: req.body.style,
    abv: req.body.abv,
    desc: req.body.desc
  };
  console.log(req);
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

module.exports = router;
