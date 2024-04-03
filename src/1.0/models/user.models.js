const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;

const userModel = new Schema({
    firstname: {
        type: String,
        required: [true, "Firstname is a required field"],
        trim: true,
        lowercase: true,
    },
    surname: {
        type: String,
        required: [true, "Surname is a required field"],
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "password is a required field"]
    },
    type: {
        type: String,
        required: [true, "Type is a required field"]
    },
    email: {
        type: String,
        required: [true, "Email is a required field"],
        trim: true,
        lowercase: true,
        unique: true,
        validate: [validator.isEmail, "Please enter a valid E-mail!"]
    },
    phone: {
        type: String,
        required: false
    },
    sponsorCode: {
        type: String,
        required: false,
        trim: true,
        lowercase: true,
    }
})

module.exports = mongoose.model("User", userModel)