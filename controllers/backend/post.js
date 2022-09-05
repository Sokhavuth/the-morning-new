// controllers/backend/post.js

const postdb = require("../../models/post")


class Post{
    async getPage(req, res){
        const setup = req.mysetup()
        setup.pageTitle = "Post page"
        setup.route = "/admin/post"

        const { sessionid } = req.signedCookies
        let user = false
        if(sessionid){
            user = await req.mydb.session.get(sessionid)
        }
        if(user){
            setup.username = user.title
        }

        const { posts, length} = await postdb.getPosts(req, setup.dpostLimit)
        setup.items = posts
        setup.count = length

        res.render("base", { data: setup })
    }

    async createPost(req, res){
        postdb.createPost(req)
        res.redirect("/admin/post")
    }
}


module.exports = new Post()