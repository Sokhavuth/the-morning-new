// routes/backend.js

const express = require("express")
const router = express.Router()

const adminRouter = require("./backend/admin")
router.use("/", adminRouter)


module.exports = router