// controllers/backend/post.js


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

        res.render("base", { data: setup })
    }
}


module.exports = new Post()