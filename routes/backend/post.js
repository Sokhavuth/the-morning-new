// routes/backend/post.js

const express = require("express")
const router = express.Router()

const post = require("../../controllers/backend/post")

router.get("/", async (req, res) => {
    post.getPage(req, res)
})

router.post("/", async (req, res) => {
    const { sessionid } = req.signedCookies
    let user = false
    if(sessionid){
        user = await req.mydb.session.get(sessionid)
    }
    
    if(user.role in {"Admin":1, "Editor":1, "Author":1}){
        req.myuserid = user.key
        post.createPost(req, res)
    }else{
        res.redirect("/admin/post")
    }
})


module.exports = router