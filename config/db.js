const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect("mongodb+srv://kumavatyogesh92:Practice@cluster0.fdh3qtj.mongodb.net/?retryWrites=true&w=majority");
  console.log("Connected")
};

module.exports = connect