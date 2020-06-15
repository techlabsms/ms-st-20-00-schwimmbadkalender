const express = require('express')
const router = new express.Router()
const db = require('../database/mysql-db')
const User = require('../models/user')

// Get user list
router.get('/', (req, res) => 
User.findAll()
    .then(user => {
        console.log(user);
        res.sendStatus(200);
    })
    .catch(err => console.log(err)))

// Add a user
router.get('/add', (req, res) => {
    const data = {
        id: 2,
        fname: 'Lina',
        lname: 'Fromme',
        createdAt: '2020-06-15 12:00:00',
        updatedAt: '2020-06-15 12:00:01'
    }

    let  {id, fname, lname, createdAt, updatedAt } = data;

    // Insert into table
    User.create({
        id,
        fname,
        lname,
        createdAt,
        updatedAt
    })
    .then(user => res.redirect('/users'))
    .catch(err => console.log(err))

})





module.exports = router