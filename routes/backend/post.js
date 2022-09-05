// routes/backend/post.js

const express = require("express")
const router = express.Router()

const post = require("../../controllers/backend/post")

router.get("/", async (req, res) => {
    post.getPage(req, res)
})


module.exports = router