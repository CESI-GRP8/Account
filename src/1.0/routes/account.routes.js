const express = require("express")
const router = express.Router();

const authController = require("../controllers/account.controllers")

router.get("/", (req, res) => {
    res.status(200).json({ message: "API is up!" })
})

router.post("/register", authController.createUsers)
router.get("/all", authController.readAll)
router.get("/all/:id", authController.readAll)
router.get("/users", authController.readUser)
router.get("/users/:id", authController.readUser)
router.get("/restorer/", authController.readRestorer)
router.get("/restorer/:id", authController.readRestorer)
router.patch("/users/:id", authController.updateUsers)
router.delete("/users/:id", authController.deleteUsers)
router.post("/login", authController.login)

module.exports = router