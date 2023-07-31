const mongoose  = require('mongoose');

const user = new mongoose.Schema ({
    username : String,
    email : String,
    password : String
})

let userschema = mongoose.model("user",user)

module.exports = userschema