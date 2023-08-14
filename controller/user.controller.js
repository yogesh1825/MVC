const user = require("../models/user.schema");

const home = (req, res) => {
  res.cookie("cooki", "setcookie");
  res.send("Welcome home");
};
const login = async (req, res) => {
  let userdata = await user.create(req.body);
  console.log("userdata", userdata);
  res.cookie("id", userdata.id);
  res.send("login successfull");
};
const getlogin = (req, res) => {
  res.render("index");
};
const count =(req, res) => {
  if(req.session.visit){
      req.session.visit++
      res.send(`session.visit ${req.session.visit}`)
  }
  else{
      req.session.visit=1
      res.send(`session.visit ${req.session.visit}`)
  }
 
}

module.exports = { home, login, getlogin,count };
