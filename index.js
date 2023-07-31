const express = require("express");
const connect = require("./config/db");
const userschema = require("./models/user.schema");
const Route = require("./router/userroute");
require("dotenv").config();
let PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", Route);

app.listen(PORT, () => {
  connect();
  console.log(`.....listening on port ${PORT}.....`);
})