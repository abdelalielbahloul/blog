'use strict'

const User = use('App/Models/User');

class AuthController {

    async login( { request, response } ) {

        const user = new User();
        // user.userName = request.input('userName');
        user.email = request.input('email');
        user.password = request.input('password');

        response.redirect('/');
        // return user;
       
    }
    async register( { request, response }) {
        
        const user = new User();
        user.userName = request.input('userName');
        user.email = request.input('email');
        user.password = request.input('password');
        user.save();
        response.redirect('/signin');
    }
}

module.exports = AuthController
