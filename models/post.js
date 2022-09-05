// models/post.js


class Post{
    async getAllItems(req){
        let result = await req.mydb.posts.fetch()
        let allItems = result.items

        while(result.last){
            result = await req.mydb.posts.fetch({}, {last: result.last})
            allItems = allItems.concat(result.items)
        }
        
        return allItems
    }

    async createPost(req){
        let categories = []

        if(req.body.categories.includes(',')){
            categories = req.body.categories.split(',')
        }else{
            categories = [req.body.categories]
        }
        
        const new_post = {
            title: req.body.title,
            content: req.body.content,
            categories: categories,
            thumb: req.body.thumb,
            date: req.body.datetime,
            videos: req.body.videos,
            userid: req.myuserid,
        }

        await req.mydb.posts.put(new_post)
    }

    async getPosts(req, amount){
        const setup = req.mysetup()
        const allItems = await this.getAllItems(req)
        allItems.sort((a, b) => {     
            let da = new Date(a.date)
            let db = new Date(b.date)
            return db - da
        })

        const posts = allItems.slice(0, amount)
        const length = allItems.length
        return { posts, length }
    }
}


module.exports = new Post()