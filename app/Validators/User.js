'use strict'

class User {
  get rules () {
    return {
      // validation rules
      email: 'required|email|unique:users,email',
      password: 'required'
    }
  }
  get sanitizationRules () {
    // sanitize data before validation
  }
}

module.exports = User
