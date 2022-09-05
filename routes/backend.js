// routes/backend.js

const express = require("express")
const router = express.Router()

const adminRouter = require("./backend/admin")
router.use("/", adminRouter)

const postRouter = require("./backend/post")
router.use("/post", postRouter)


module.exports = router