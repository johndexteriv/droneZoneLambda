const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String,
    address: String,
    city: String,
    state: String,
    country: String,
    zipcode: String,
    about: String
});

module.exports = mongoose.model("user", userSchema);