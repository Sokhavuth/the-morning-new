// controllers/frontend


class Home{
    async getPage(req, res){
        const setup = req.mysetup()
        setup.pageTitle = "Home"

        res.render("base", {data: setup})
    }
}


module.exports = new Home()