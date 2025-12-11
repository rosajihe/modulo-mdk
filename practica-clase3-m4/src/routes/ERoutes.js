const express = require("express")
const router = express.Router()
const controller = require("../controllers/EController")

router.get("/estudiantes", controller.obtenerE)

module.exports = router