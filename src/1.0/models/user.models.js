const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;

const userModel = new Schema({
    type: {
        required: [true, "Type is a required field"],
        type: String,
    },
    firstname: {
        required: [true, "Firstname is a required field"],
        type: String,
    },
    surname: {
        required: [true, "Surname is a required field"],
        type: String,
        uppercase: true,
    },
    email: {
        lowercase: true,
        required: [true, "Email is a required field"],
        trim: true,
        type: String,
        unique: true,
        validate: [validator.isEmail, "Please enter a valid E-mail!"],
    },
    password: {
        required: [true, "Password is a required field"],
        type: String,
    },
    address: {
        required: [true, "Address is a required field"],
        type: String,
    },
    phone: {
        required: [true, "Phone is a required field"],
        type: String,
    },
    sponsorCode: {
        required: false,
        type: String,
    },
    userSponsorCode: {
        required: [true, "UserSponsorCode is a required field"],
        type: String,
        unique: true,
    },
})

module.exports = mongoose.model("User", userModel)