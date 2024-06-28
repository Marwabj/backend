const express = require("express");
const Admin = require("./models/admin");
const mongoose = require("mongoose");
const adminRoute = require("./routes/admin");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./config/connect");

const app = express();
app.use(express.json());
app.use(adminRoute);
//+
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes+
app.use("/admin", administrateurapi);

//http:127.0.0.1:3000

app.listen(3000, () => {
  console.log("server work");
});
