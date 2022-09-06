// controllers/backend/post.js

const postdb = require("../../models/post")


class Post{
    async getPage(req, res){
        const setup = req.mysetup()
        setup.pageTitle = "Post page"
        setup.route = "/admin/post"
        setup.type = "post"

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

    async editPost(req, res){
        const setup = req.mysetup()
        setup.pageTitle = "Edit post page"
        setup.route = "/admin/post"
        setup.type = "post"
        setup.username = req.myusername

        const { posts, length} = await postdb.getPosts(req, setup.dpostLimit)
        setup.items = posts
        setup.count = length
        setup.item = await postdb.getPost(req)

        res.render("base", { data: setup })
    }

    async updatePost(req, res){
        if(req.myuser.role === "Author"){
            const post = await postdb.getPost(req)
            if(req.myuser.id === post.userid){
                postdb.updatePost(req)
            }
        }else{
            postdb.updatePost(req)
        }

        res.redirect("/admin/post")
    }

    async deletePost(req, res){
        if(req.myuser.role === "Author"){
            const post = await postdb.getPost(req)
            if(req.myuser.id === post.userid){
                postdb.deletePost(req)
            }
        }else{
            postdb.deletePost(req)
        }

        res.redirect("/admin/post")
    }
}


module.exports = new Post()