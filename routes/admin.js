const express = require("express");
const router = express.Router();
const Admin = require("../models/admin");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  data = req.body;
  account = new Admin(data);
  console.log(account.email);
  Admin.findOne({ email: account.email })
    .then((saved) => {
      if (saved.password == account.password) {
        console.log("password true");
      } else console.log("password false");
      console.log(saved);
      res.status(200).send(saved);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
module.exports = router;
