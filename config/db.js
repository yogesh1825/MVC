const mongoose = require("mongoose");
require("dotenv").config()
const DB = process.env.DB_URL

const connect = async () => {
  console.log(".....DATA BASE CONNECTING....");
  await mongoose.connect(DB);
  console.log(".....DATA BASE CONNECTED.....")
};

module.exports = connect