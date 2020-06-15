const Sequelize = require('sequelize')
const db = require('../database/mysql-db')

const User = db.define('user', {
    fname: {
        type: Sequelize.STRING
    },
    lname: {
        type: Sequelize.STRING
    }
})

module.exports = User;