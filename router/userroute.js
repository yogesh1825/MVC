const { Router } = require("express");
const { home, login, getlogin } = require("../controller/user.controller");
const Auth = require("../middleware/userCheck");

const Route = Router();

Route.get("/", home);
Route.post("/login", Auth, login);
Route.get("/login", getlogin);

module.exports = Route;
