// routes/frontend.js

const express = require("express")
const router = express.Router()

const homeRouter = require("./frontend/home")
router.use("/", homeRouter)


module.exports = router