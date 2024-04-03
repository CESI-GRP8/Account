const express = require("express")
const router = express.Router();

const authController = require("../controllers/authentication.controllers")

router.get("/", (req, res) => {
    res.status(200).json({ message: "API is up!" })
})

router.post("/register", authController.createUsers)
router.get("/users", authController.readUsers)
router.get("/users/:email", authController.readUsers)
router.patch("/users/:id", authController.updateUsers)
router.delete("/users/:id", authController.deleteUsers)
router.post("/login", authController.login)

module.exports = router