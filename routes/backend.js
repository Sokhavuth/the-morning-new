// routes/backend.js

const express = require("express")
const router = express.Router()

const adminRouter = require("./backend/admin")
router.use("/", adminRouter)

const postRouter = require("./backend/post")
router.use("/post", postRouter)

const categoryRouter = require("./backend/category")
router.use("/category", categoryRouter)

const uploadRouter = require("./backend/upload")
router.use("/upload", uploadRouter)

const userRouter = require("./backend/user")
router.use("/user", userRouter)

const settingRouter = require("./backend/setting")
router.use("/setting", settingRouter)


module.exports = router