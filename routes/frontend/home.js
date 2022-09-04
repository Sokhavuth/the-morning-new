// routes/frontend/home.js

const express = require("express")
const router = express.Router()

const home = require("../../controllers/frontend/home")

router.get("/", async (req, res) => {
    home.getPage(req, res)
})


module.exports = router