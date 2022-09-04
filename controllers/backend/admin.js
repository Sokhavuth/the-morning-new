// controllers/frontend


class Admin{
    async getPage(req, res){
        const setup = req.mysetup()
        setup.pageTitle = "POST PAGE"

        res.render("base", {data: setup})
    }
}


module.exports = new Admin()