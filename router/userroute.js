const { Router } = require("express");
const { home, login, getlogin, count } = require("../controller/user.controller");
const Auth = require("../middleware/userCheck");
const { route } = require("express/lib/application");

const Route = Router();

Route.get("/", home);
Route.post("/login", Auth, login);
Route.get("/login", getlogin);

Route.get("/count",count)
module.exports = Route;
