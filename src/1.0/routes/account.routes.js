const express = require("express")
const router = express.Router();

const authController = require("../controllers/account.controllers")

router.get("/check", (req, res) => {
    res.status(200).json({ message: "API is up!" })
})

router.post("/register", authController.register)
router.post("/login", authController.login)
router.get("/authenticate", authController.authenticate)

router.get("/all", authController.readAll)
router.get("/all/:id", authController.readAll)
router.get("/users", authController.readUser)
router.get("/users/:id", authController.readUser)
router.get("/restorers/", authController.readRestorer)
router.get("/restorers/:id", authController.readRestorer)
router.get("/deliverers/", authController.readDeliverer)
router.get("/deliverers/:id", authController.readDeliverer)
router.get("/developers/", authController.readDeveloper)
router.get("/developers/:id", authController.readDeveloper)
router.get("/marketing/", authController.readMarketing)
router.get("/marketing/:id", authController.readMarketing)
router.get("/administrators/", authController.readAdministrator)
router.get("/administrators/:id", authController.readAdministrator)

router.patch("/users/:id", authController.updateUser)
router.patch("/restorers/:id", authController.updateRestorer)
router.patch("/deliverers/:id", authController.updateDeliverer)
router.patch("/developers/:id", authController.updateDeveloper)
router.patch("/marketing/:id", authController.updateMarketing)
router.patch("/adminitrators/:id", authController.updateAdministrator)

router.delete("/users/:id", authController.deleteUser)
router.delete("/restorers/:id", authController.deleteRestorer)
router.delete("/deliverers/:id", authController.deleteDeliverer)
router.delete("/developers/:id", authController.deleteDevloper)
router.delete("/marketing/:id", authController.deleteMarketing)
router.delete("/administrators/:id", authController.deleteAdministrator)

module.exports = router