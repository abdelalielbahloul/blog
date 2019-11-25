'use strict'

class LoginController {

    async login( { view } ) {

        return view.render('login', { userName: 'Abdelali EL BAHLOUL'})
    }
}

module.exports = LoginController
