// config.js
// npm install deta

function setup(){
    const settings = {
        siteTitle: "The Morning News",
        pageTitle: "Home",
        description: "News as it happends",
        date: (new Date()).toDateString(),
        message: "",
        count: 0,
        dpostLimit: 10,
        fpostLimit: 10,
        username: "",
    }

    return settings
}

const { Deta } = require("deta")
const dotenv = require('dotenv')
dotenv.config()

const db = {}
const deta = Deta(process.env.PROJECT_KEY)
db.users = deta.Base("the_morning_news_users")
db.session = deta.Base("the_morning_news_session")
db.posts = deta.Base("the_morning_news_posts")
db.upload = deta.Drive("upload")

module.exports = { setup, db }