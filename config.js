// config.js
// npm install deta

async function setup(){
    const setting = await db.setting.get("61pett3k4zzf")
    const settings = {
        siteTitle: "The Morning News",
        description: "News as it happends",
        date: (new Date()).toDateString(),
        dpostLimit: 10,
        fpostLimit: 65,
        categoryItemLimit: 20,
        pageTitle: "Home",
        username: "",
        message: "",
        count: 0,
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
db.pages = deta.Base("the_morning_news_pages")
db.categories = deta.Base("the_morning_news_categories")
db.setting = deta.Base("the_morning_news_setting")
db.upload = deta.Drive("upload")

module.exports = { setup, db }