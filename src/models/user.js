const Sequelize = require('sequelize')
const db = require('../database/mysql-db')

const User = db.define('user', {
    fname: {
        type: Sequelize.STRING
    },
    lname: {
        type: Sequelize.STRING
    },
    street: {
        type: Sequelize.STRING
    },
    streetNumber: {
        type: Sequelize.STRING
    },
    plz: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    numberOfPersons: {
        type: Sequelize.STRING
    }
})

module.exports = User;