// routes/backend/upload.js

const express = require("express")
const router = express.Router()


const upload = require("../../controllers/backend/upload")

router.get("/", async (req, res) => {
    const { sessionid } = req.signedCookies
    let user = false
    if(sessionid){
        user = await req.mydb.session.get(sessionid)
    }

    if(user){
        upload.getPage(req, res)
    }else{
        res.redirect("/admin")
    }
})

router.post("/", async (req, res) => {
    const { sessionid } = req.signedCookies
    let user = false
    if(sessionid){
        user = await req.mydb.session.get(sessionid)
    }

    if(user){
        upload.insertFile(req, res)
    }else{
        res.redirect("/admin")
    }
})

router.get("/download/:fileName", async (req, res) => {
    upload.getFile(req, res)
})

module.exports = router