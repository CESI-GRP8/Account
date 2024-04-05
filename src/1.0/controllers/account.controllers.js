const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid');

const User = require('../models/user.models')
const Restorer = require('../models/restorer.models')

exports.createUsers = async (req, res) => {
    let response;
    if (req.headers["authorization"]) {
        token = req.headers["authorization"]
        if (token.includes("Bearer")) token = token.substring(7)
        response = jwt.verify(token, process.env.ACCESS_JWT_KEY, async (err, decoded) => {
            if (err == null) {
                try {
                    switch (req.body.type) {
                        case "user":
                            var newUser = new User({
                                type: req.body.type,
                                firstname: req.body.firstname,
                                surname: req.body.surname,
                                email: req.body.email,
                                password: bcrypt.hashSync(req.body.password, 10),
                                address: req.body.address,
                                phone: req.body.phone,
                                sponsorCode: req.body.sponsorCode,
                                userSponsorCode: uuidv4(),
                            })
                            break;
                        case "restorer":
                            var newUser = new Restorer({
                                type: req.body.type,
                                firstname: req.body.firstname,
                                surname: req.body.surname,
                                email: req.body.email,
                                password: bcrypt.hashSync(req.body.password, 10),
                                restaurantType: req.body.restaurantType,
                                restaurantName: req.body.restaurantName,
                                restaurantAddress: req.body.restaurantAddress,
                                restaurantPhone: req.body.restaurantPhone,
                                sponsorCode: req.body.sponsorCode,
                                restorerSponsorCode: uuidv4(),
                            })
                            break;
                        default:
                            return res.status(400).json({ message: "Unsupported user type!" });
                    }
                    await newUser.save()
                    return res.status(200).json(newUser)
                } catch (error) {
                    console.log(error)
                    if (error.name === "ValidationError") {
                        let errors = {};

                        Object.keys(error.errors).forEach((key) => {
                            errors[key] = error.errors[key].message;
                        });

                        return res.status(400).json(errors);
                    }
                    if (error.name === "MongoServerError") {
                        return res.status(400).json({ message: error.message });

                    }
                    return res.status(500).json({ message: "Something went wrong!" });
                }
            }
            return res.status(401).json({ err: err })
        })
    }
    else response = res.status(401).json({ message: "Bearer authentication must be set!" })
    return response
}

exports.readAll = async (req, res) => {
    let response;
    if (req.headers["authorization"]) {
        token = req.headers["authorization"]
        if (token.includes("Bearer")) token = token.substring(7)
        response = jwt.verify(token, process.env.ACCESS_JWT_KEY, async (err, decoded) => {
            if (err == null) {
                try {
                    if (req.params.id) {
                        const users = await User.find({ _id: req.params.id })
                        const restorers = await Restorer.find({ _id: req.params.id })
                        const json = users.concat(restorers)
                        return res.status(200).json(json)
                    }
                    const users = await User.find()
                    const restorers = await Restorer.find()
                    const json = users.concat(restorers)
                    return res.status(200).json(json)
                }
                catch (error) {
                    console.log(error)
                    return res.status(400).json({ message: error.message })
                }
            }
            return res.status(401).json({ err: err })
        })
    }
    else response = res.status(401).json({ message: "Bearer authentication must be set!" })
    return response
}

exports.readUser = async (req, res) => {
    let response;
    if (req.headers["authorization"]) {
        token = req.headers["authorization"]
        if (token.includes("Bearer")) token = token.substring(7)
        response = jwt.verify(token, process.env.ACCESS_JWT_KEY, async (err, decoded) => {
            if (err == null) {
                try {
                    if (req.params.id) {
                        return res.status(200).json(await User.find({ _id: req.params.id }))
                    }
                    return res.status(200).json(await User.find())
                }
                catch (error) {
                    console.log(error)
                    return res.status(400).json({ message: error.message })
                }
            }
            return res.status(401).json({ err: err })
        })
    }
    else response = res.status(401).json({ message: "Bearer authentication must be set!" })
    return response
}

exports.readRestorer = async (req, res) => {
    let response;
    if (req.headers["authorization"]) {
        token = req.headers["authorization"]
        if (token.includes("Bearer")) token = token.substring(7)
        response = jwt.verify(token, process.env.ACCESS_JWT_KEY, async (err, decoded) => {
            if (err == null) {
                try {
                    if (req.params.id) {
                        return res.status(200).json(await Restorer.find({ _id: req.params.id }))
                    }
                    return res.status(200).json(await Restorer.find())
                }
                catch (error) {
                    console.log(error)
                    return res.status(400).json({ message: error.message })
                }
            }
            return res.status(401).json({ err: err })
        })
    }
    else response = res.status(401).json({ message: "Bearer authentication must be set!" })
    return response
}

exports.updateUsers = async (req, res) => {
    let response;
    if (req.headers["authorization"]) {
        token = req.headers["authorization"]
        if (token.includes("Bearer")) token = token.substring(7)
        response = jwt.verify(token, process.env.ACCESS_JWT_KEY, async (err, decoded) => {
            if (err == null) {
                try {
                    const updatedUser = await User.findOneAndUpdate({ _id: req.params.id }, req.body)
                    if (updatedUser != null) {
                        return res.status(200).json({ message: `user ${req.params.id} updated!` })
                    }
                    return res.status(404).json({ message: `user ${req.params.id} not found!` })

                }
                catch (error) {
                    console.log(error)
                    return res.status(400).json({ message: error.message })
                }
            }
            return res.status(401).json({ err: err })
        })
    }
    else response = res.status(401).json({ message: "Bearer authentication must be set!" })
    return response
}

exports.deleteUsers = async (req, res) => {
    let response;
    if (req.headers["authorization"]) {
        token = req.headers["authorization"]
        if (token.includes("Bearer")) token = token.substring(7)
        response = jwt.verify(token, process.env.ACCESS_JWT_KEY, async (err, decoded) => {
            if (err == null) {
                try {
                    const deletedUser = await User.deleteOne({ _id: req.params.id })
                    if (deletedUser.deletedCount != 0) {
                        return res.status(200).json({ message: `user ${req.params.id} deleted!` })
                    }
                    return res.status(404).json({ message: `user ${req.params.id} not found!` })
                }
                catch (error) {
                    console.log(error)
                    return res.status(400).json({ message: error.message })
                }
            }
            return res.status(401).json({ err: err })
        })
    }
    else response = res.status(401).json({ message: "Bearer authentication must be set!" })
    return response
}

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                const accessToken = jwt.sign({ email: req.body.email, exp: Math.floor(Date.now() / 1000) + 120 }, process.env.ACCESS_JWT_KEY);
                return res.status(200).json({ message: "You are now connected!", token: accessToken })
            }
        }
        return res.status(401).json({ message: "Invalid credentials!" })
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}