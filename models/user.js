// models/user.js
// npm install bcryptjs

const bcrypt = require("bcryptjs")


class User{
    async createRootUser(req){
        const hashPassword = bcrypt.hashSync("xxxxxxxxxxxxxxx", 8)

        const user = {
            title: "Guest",
            password: hashPassword,
            email: "guest@khmerweb.app",
            role: "Guest",
            thumb: "",
            info: "",
            video: "",
            date: ""
        }

        await req.mydb.users.put(user)
    }

    async checkUser(req){
        return await req.mydb.users.fetch({ email: req.body.email })
    }
    
}


module.exports = new User()