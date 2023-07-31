const userschema = require("../models/user.schema");

const home = (req,res) =>{
    // res.sendFile(__dirname + '/views/index.html');
    res.send("Welcome home")

}
const login = (req,res)=>{
    res.send("login successfull");
    console.log(req.body);
}

module.exports = {home,login}