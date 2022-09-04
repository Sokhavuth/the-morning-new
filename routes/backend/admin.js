// routes/frontend/admin.js

const express = require("express")
const router = express.Router()

const admin = require("../../controllers/backend/admin")

router.get("/", async (req, res) => {
    admin.getPage(req, res)
})


module.exports = router