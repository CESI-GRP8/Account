const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid');

const User = require('../models/user.models')
const Restorer = require('../models/restorer.models')
const Deliverer = require('../models/deliverer.models')
const Developer = require('../models/developer.models')
const Marketing = require('../models/marketing.models')
const Administrator = require('../models/administrator.models')

exports.register = async (req, res) => {
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
            case "deliverer":
                var newUser = new Deliverer({
                    type: req.body.type,
                    firstname: req.body.firstname,
                    surname: req.body.surname,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    phone: req.body.phone,
                    sponsorCode: req.body.sponsorCode,
                    delivererSponsorCode: uuidv4(),
                })
                break;
            case "developer":
                var newUser = new Developer({
                    type: req.body.type,
                    firstname: req.body.firstname,
                    surname: req.body.surname,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    phone: req.body.phone,
                })
                break;
            case "marketing":
                var newUser = new Marketing({
                    type: req.body.type,
                    firstname: req.body.firstname,
                    surname: req.body.surname,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    phone: req.body.phone,
                })
                break;
            case "administrator":
                var newUser = new Administrator({
                    type: req.body.type,
                    firstname: req.body.firstname,
                    surname: req.body.surname,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    phone: req.body.phone,
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

exports.login = async (req, res) => {
    try {
        const user = await User.find({ email: req.body.email })
        const restorer = await Restorer.find({ email: req.body.email })
        const deliverer = await Deliverer.find({ email: req.body.email })
        const developer = await Developer.find({ email: req.body.email })
        const marketing = await Marketing.find({ email: req.body.email })
        const administrator = await Administrator.find({ email: req.body.email })
        const existingUser = user.concat(restorer).concat(deliverer).concat(developer).concat(marketing).concat(administrator)
        if (existingUser) {
            if (bcrypt.compareSync(req.body.password, existingUser[0].password)) {
                const accessToken = jwt.sign({ type: existingUser[0].type, exp: Math.floor(Date.now() / 1000) + 120 }, process.env.ACCESS_JWT_KEY);
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

exports.authenticate = async (req, res) => {
    try {
        token = req.headers["authorization"]
        if (token.includes("Bearer")) token = token.substring(7)
        jwt.verify(token, process.env.ACCESS_JWT_KEY, async (err, decoded) => {
            if (err == null) {
                return res.status(200).json({ message: "User authenticate !" })
            }
            return res.status(401).json({ err: err })
        })
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}


exports.readAll = async (req, res) => {
    try {
        if (req.params.email) {
            const users = await User.find({ email: req.params.email })
            const restorers = await Restorer.find({ email: req.params.email })
            const deliverers = await Deliverer.find({ email: req.params.email })
            const developer = await Developer.find({ email: req.params.email })
            const marketing = await Marketing.find({ email: req.params.email })
            const administrators = await Administrator.find({ email: req.params.email })
            const json = users.concat(restorers).concat(deliverers).concat(developer).concat(marketing).concat(administrators)
            return res.status(200).json(json)
        }
        const users = await User.find()
        const restorers = await Restorer.find()
        const deliverers = await Deliverer.find()
        const developer = await Developer.find()
        const marketing = await Marketing.find()
        const administrators = await Administrator.find()
        const json = users.concat(restorers).concat(deliverers).concat(developer).concat(marketing).concat(administrators)
        return res.status(200).json(json)
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}

exports.readUser = async (req, res) => {
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

exports.readRestorer = async (req, res) => {
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

exports.readDeliverer = async (req, res) => {
    try {
        if (req.params.id) {
            return res.status(200).json(await Deliverer.find({ _id: req.params.id }))
        }
        return res.status(200).json(await Deliverer.find())
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}

exports.readDeveloper = async (req, res) => {
    try {
        if (req.params.id) {
            return res.status(200).json(await Developer.find({ _id: req.params.id }))
        }
        return res.status(200).json(await Developer.find())
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}

exports.readMarketing = async (req, res) => {
    try {
        if (req.params.id) {
            return res.status(200).json(await Marketing.find({ _id: req.params.id }))
        }
        return res.status(200).json(await Marketing.find())
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}

exports.readAdministrator = async (req, res) => {
    try {
        if (req.params.id) {
            return res.status(200).json(await Administrator.find({ _id: req.params.id }))
        }
        return res.status(200).json(await Administrator.find())
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}


exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate({ _id: req.params.id }, req.body)
        if (updatedUser != null) {
            return res.status(200).json({ message: `User ${req.params.id} updated!` })
        }
        return res.status(404).json({ message: `User ${req.params.id} not found!` })

    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}

exports.updateRestorer = async (req, res) => {
    try {
        const updatedRestorer = await Restorer.findOneAndUpdate({ _id: req.params.id }, req.body)
        if (updatedRestorer != null) {
            return res.status(200).json({ message: `Restorer ${req.params.id} updated!` })
        }
        return res.status(404).json({ message: `Restorer ${req.params.id} not found!` })

    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}

exports.updateDeliverer = async (req, res) => {
    try {
        const updatedDeliverer = await Deliverer.findOneAndUpdate({ _id: req.params.id }, req.body)
        if (updatedDeliverer != null) {
            return res.status(200).json({ message: `Deliverer ${req.params.id} updated!` })
        }
        return res.status(404).json({ message: `Deliverer ${req.params.id} not found!` })

    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}

exports.updateDeveloper = async (req, res) => {
    try {
        const updatedDeveloper = await Developer.findOneAndUpdate({ _id: req.params.id }, req.body)
        if (updatedDeveloper != null) {
            return res.status(200).json({ message: `Developer ${req.params.id} updated!` })
        }
        return res.status(404).json({ message: `Developer ${req.params.id} not found!` })

    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}

exports.updateMarketing = async (req, res) => {
    try {
        const updatedMarketing = await Marketing.findOneAndUpdate({ _id: req.params.id }, req.body)
        if (updatedMarketing != null) {
            return res.status(200).json({ message: `Marketing ${req.params.id} updated!` })
        }
        return res.status(404).json({ message: `Marketing ${req.params.id} not found!` })

    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}

exports.updateAdministrator = async (req, res) => {
    try {
        const updatedAdministrator = await Administrator.findOneAndUpdate({ _id: req.params.id }, req.body)
        if (updatedAdministrator != null) {
            return res.status(200).json({ message: `Administrator ${req.params.id} updated!` })
        }
        return res.status(404).json({ message: `Administrator ${req.params.id} not found!` })

    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}


exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.deleteOne({ _id: req.params.id })
        if (deletedUser.deletedCount != 0) {
            return res.status(200).json({ message: `User ${req.params.id} deleted!` })
        }
        return res.status(404).json({ message: `User ${req.params.id} not found!` })
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}

exports.deleteRestorer = async (req, res) => {
    try {
        const deletedRestorer = await Restorer.deleteOne({ _id: req.params.id })
        if (deletedRestorer.deletedCount != 0) {
            return res.status(200).json({ message: `Restorer ${req.params.id} deleted!` })
        }
        return res.status(404).json({ message: `Restorer ${req.params.id} not found!` })
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}

exports.deleteDeliverer = async (req, res) => {
    try {
        const deletedDeliverer = await Deliverer.deleteOne({ _id: req.params.id })
        if (deletedDeliverer.deletedCount != 0) {
            return res.status(200).json({ message: `Deliverer ${req.params.id} deleted!` })
        }
        return res.status(404).json({ message: `Deliverer ${req.params.id} not found!` })
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}

exports.deleteDevloper = async (req, res) => {
    try {
        const deletedDevloper = await Devloper.deleteOne({ _id: req.params.id })
        if (deletedDevloper.deletedCount != 0) {
            return res.status(200).json({ message: `Devloper ${req.params.id} deleted!` })
        }
        return res.status(404).json({ message: `Devloper ${req.params.id} not found!` })
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}

exports.deleteMarketing = async (req, res) => {
    try {
        const deletedMarketing = await Marketing.deleteOne({ _id: req.params.id })
        if (deletedMarketing.deletedCount != 0) {
            return res.status(200).json({ message: `Marketing ${req.params.id} deleted!` })
        }
        return res.status(404).json({ message: `Marketing ${req.params.id} not found!` })
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}

exports.deleteAdministrator = async (req, res) => {
    try {
        const deletedAdministrator = await Administrator.deleteOne({ _id: req.params.id })
        if (deletedAdministrator.deletedCount != 0) {
            return res.status(200).json({ message: `Administrator ${req.params.id} deleted!` })
        }
        return res.status(404).json({ message: `Administrator ${req.params.id} not found!` })
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}