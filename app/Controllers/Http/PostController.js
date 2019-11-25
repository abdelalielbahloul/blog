'use strict'

const Post = use('App/Models/Post')

class PostController {

    async index({ view }) {
        
        try {
            const posts = await Post.all();
            return view.render('post/index', { posts: posts.toJSON() });
        } catch (error) {
            return view.render('post/index', error)
        }
      
    }

    async create({ view }) {
        return view.render('post/create');
    }

    async store({ request, response }) {
        const post = new Post();
        post.title = request.input('title');
        post.body = request.input('body');

        try {
            post.save();
            response.redirect('/posts');

        } catch (error) {
            console.log(error);
            
        }
        
        
    }

    async edit({ view }) {
        return view.render('post/edit');
    }

    async show({ view }) {
        return view.render('post/show');
    }
}

module.exports = PostController
