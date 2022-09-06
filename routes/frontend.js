// routes/frontend.js

const express = require("express")
const router = express.Router()

const homeRouter = require("./frontend/home")
router.use("/", homeRouter)

const postRouter = require("./frontend/post")
router.use("/post", postRouter)


module.exports = router