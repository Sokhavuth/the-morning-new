// config.js
// npm install deta

function setup(){
    const settings = {
        siteTitle: "Apsara Templates",
        pageTitle: "Home",
        message: "",
        count: 0,
        dpostLimit: 10,
        fpostLimit: 9,
    }

    return settings
}

const { Deta } = require("deta")
const dotenv = require('dotenv')
dotenv.config()

const db = {}
const deta = Deta(process.env.PROJECT_KEY)
db.users = deta.Base("users")
db.session = deta.Base("session")
db.posts = deta.Base("posts")
db.upload = deta.Drive("upload")

module.exports = { setup, db }