const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;

const restorerModel = new Schema({
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
    restaurantType: {
        required: [true, "RestaurantType is a required field"],
        type: String,
    },
    restaurantName: {
        required: [true, "RestaurantName is a required field"],
        type: String,
    },
    restaurantAddress: {
        required: [true, "RestaurantAddress is a required field"],
        type: String,
    },
    restaurantPhone: {
        required: [true, "RestaurantPhone is a required field"],
        type: String,
    },
    sponsorCode: {
        required: false,
        type: String,
    },
    restorerSponsorCode: {
        required: [true, "RestorerSponsorCode is a required field"],
        type: String,
        unique: true,
    },
})

module.exports = mongoose.model("Restorer", restorerModel)