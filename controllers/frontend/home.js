// controllers/frontend


class Home{
    async getPage(req, res){
        const setup = req.mysetup()
        setup.pageTitle = "Home"
        setup.route = "/"

        res.render("base", {data: setup})
    }
}


module.exports = new Home()