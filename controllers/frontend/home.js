// controllers/frontend/home.js

const postdb = require("../../models/post")


class Home{
    async getPage(req, res){
        const setup = req.mysetup()
        setup.pageTitle = "Home"
        setup.route = "/"

        const { posts } = await postdb.getPosts(req, setup.fpostLimit)
        setup.items = posts

        res.render("base", { data: setup })
    }
}


module.exports = new Home()