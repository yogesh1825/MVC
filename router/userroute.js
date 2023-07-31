const {Router} = require("express")
const { home, login } = require("../controller/user.controller")

const Route = Router()

Route.get('/',home)
Route.post("/login",login)

module.exports = Route 