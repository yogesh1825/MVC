const express = require("express");
const connect = require("./config/db");
const userschema = require("./models/user.schema");
const Route = require("./router/userroute");
const cookies = require("cookie-parser");
const session = require("express-session");
require("dotenv").config();
let PORT = process.env.PORT;
const app = express();
app.use(cookies());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({secret:"secret-key"}));
// ejs
app.set("view engine", "ejs");
app.set("views", __dirname + "/view");
app.use(express.static(__dirname + "/public"));

app.use("/", Route);

app.listen(PORT, () => {
  connect();
  console.log(`.....listening on port ${PORT}.....`);
});
