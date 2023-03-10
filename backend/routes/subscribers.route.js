const express = require("express");
const subscribersRoute = express.Router();
const SubscribersModel = require("../models/subscribers.model");

subscribersRoute.get("/", function (req, res) {
  try {
    SubscribersModel.find({})
      .then((result) => {
        return res.status(222).send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    res.status(425).send(err);
  }
});

module.exports = subscribersRoute;
