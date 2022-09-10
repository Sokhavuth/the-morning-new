// controllers/frontend/category.js

const postdb = require("../../models/post")


class Category{
    async getPosts(req, res){
        const setup = await req.mysetup()
        setup.pageTitle = "Category page"
        setup.route = "/category"
        setup.type = req.params.category

        const { posts } = await postdb.getPosts(req, setup.categoryItemLimit)
        setup.items = posts
        res.render("base", { data: setup })
    }
}


module.exports = new Category()